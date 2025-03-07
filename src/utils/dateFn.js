import { safeFormatMls } from './formatDate';

import {
	isStr,
	isNumber,
	isNaN
} from './isTypeFn';

const MIN_YEAR = 1999;
const _mathFloor = Math.floor
, _mathMin = Math.min;

const _crNumber = (str) => parseInt(str, 10);
const _crNumberMonth = str => _crNumber(str) - 1;

const _notInIntervalStrict = (
	n,
	min,
	max
) => isNaN(n) || (n<min || n>max);
const _notInLengthMinMax = (
	str,
	length,
	min,
	max
) =>
 (isStr(str) && str.length !== length)
 || _notInIntervalStrict(parseInt(str, 10), min, max);

const _isYmd = (
	dateStr,
	nForecastDate=0,
	minYear=MIN_YEAR
) => {
	const [
		yStr,
		mStr,
		dStr
	] = dateStr.split('-')
  , _nowYear = new Date().getFullYear();

  return !(_notInLengthMinMax(yStr, 4, minYear, _nowYear + nForecastDate)
    || _notInLengthMinMax(mStr, 2, 1, 12)
    || _notInLengthMinMax(dStr, 2, 1, 31));
};

//YYYY-MM-DD valid format
export const isYmd = (
  str,
  nForecastDate,
  minYear
) => {
  if (!isStr(str)) {
	  return false;
	}
	const _str = str.trim();
	if (_str.length !== 10) {
	  return false;
	}

  return _isYmd(_str, nForecastDate, minYear);
}

const _padByZero = v => ("0" + v).slice(-2)
, _getNumberOfDays = (
	year,
	month
) => new Date(year, month, 0).getDate();

export const subtractMonths = (
	strYmd,
	numberOfMonths
) => {
	const [y, m, d] = strYmd.split('-')
	, _m = numberOfMonths % 12
	, nM = parseInt(m);

	let _rY = parseInt(y) - _mathFloor(numberOfMonths / 12)
	, _rM;

	if (nM > _m) {
		_rM = nM - _m
	} else {
		_rY = _rY - 1
		_rM = nM === _m
		  ? 12
			: _rM = nM - _m + 12
	}

	const __rD = _getNumberOfDays(_rY, _rM)
	, _rD = _padByZero(_getNumberOfDays(y, m)) === d
	  ? __rD
		: _mathMin(parseInt(d), __rD);
	return `${_rY}-${_padByZero(_rM)}-${_padByZero(_rD)}`;
}

const _getYmdUTC = (
  d,
  yearFromDate
) => (d.getUTCFullYear()-yearFromDate)
  + "-" + _padByZero(d.getUTCMonth() + 1)
  + "-" + _padByZero(d.getUTCDate());

const DF_YEAR_FROM_DATE = 2;
export const getFromDate = (
  yearFromDate=DF_YEAR_FROM_DATE
) => {
	const dNow = new Date();
	return _getYmdUTC(dNow, yearFromDate);
}

export const getToDate = () => getFromDate(0)

export const mlsToDmy = (
	mlsUTC
) => {
	if (!(isNumber(mlsUTC) && isFinite(mlsUTC))) {
		return '';
	}
  const d = new Date(mlsUTC);
	if (d.toString() === 'Invalid Date') {
		return '';
	}
  return _padByZero(d.getUTCDate())
    + "-" + _padByZero(d.getUTCMonth() + 1)
    + "-" + d.getUTCFullYear();
}

export const mlsToYmd = (
	mlsUTC
) => {
	const dmy = mlsToDmy(mlsUTC);
	if (dmy === '') {
		return '';
	}
	const [
		d,
		m,
		y
	] = dmy.split('-');
	return `${y}-${m}-${d}`;
}

export const ymdToMlsUTC = (
	strDate
) => {
	if (!isStr(strDate)) {
		return NaN;
	}
  const arr = strDate.split('-');
  return Date.UTC(
		arr[0],
		_crNumberMonth(arr[1]),
		arr[2]
	);
}

export const ymdToUTCSecond = (
	strDate
) => ymdToMlsUTC(strDate)/1000


/* 1970-01-01 */
export const isWeekend = (
	year,
	month,
	day
) => {
	const date = new Date(
		Date.UTC(
			 _crNumber(year+''),
			 _crNumberMonth(month+''),
			 _crNumber(day+'')
		));
	if (isNaN(date)) {
		return false;
	}
  const weekday = date.getUTCDay();

  return weekday === 0 || weekday === 6;
}

//YYYY-MM-DDTHH:MM:SSZ
export const crDateAgo = (str, nowMls) => {
	const _mls = (str || '').trim().length === 20
    ? Date.UTC(
        str.slice(0,4),
				_crNumberMonth(str.slice(5,7)),
				_crNumber(str.slice(8,10)),
				_crNumber(str.slice(11,13)),
				_crNumber(str.slice(14,16))
      )
    : void 0;
	return safeFormatMls(_mls, nowMls);
}
