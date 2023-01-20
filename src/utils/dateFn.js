import {
	isStr,
	isNumber,
	isNaN
} from './isTypeFn';

const MIN_YEAR = 1999;

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

const _getYmdUTC = (
  d,
  yearFromDate
) => (d.getUTCFullYear()-yearFromDate)
  + "-" + ("0"+(d.getUTCMonth() + 1)).slice(-2)
  + "-" + ("0"+d.getUTCDate()).slice(-2);

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
  return ("0" + d.getUTCDate()).slice(-2)
    + "-" + ("0" + (d.getUTCMonth() + 1) ).slice(-2)
    + "-" + d.getUTCFullYear() ;
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
		parseInt(arr[1],10)-1,
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
			 parseInt(year+'', 10),
			 parseInt(month+'',10)-1,
			 parseInt(day+'',10)
		));
	if (isNaN(date)) {
		return false;
	}
  const weekday = date.getUTCDay();

  return weekday === 0 || weekday === 6;
}
