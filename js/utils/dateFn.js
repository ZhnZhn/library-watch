"use strict";

exports.__esModule = true;
exports.ymdToUTCSecond = exports.ymdToMlsUTC = exports.mlsToYmd = exports.mlsToDmy = exports.isYmd = exports.isWeekend = exports.getToDate = exports.getFromDate = exports.crDateAgo = void 0;
var _formatDate = require("./formatDate");
var _isTypeFn = require("./isTypeFn");
const MIN_YEAR = 1999;
const _crNumber = str => parseInt(str, 10);
const _crNumberMonth = str => _crNumber(str) - 1;
const _notInIntervalStrict = (n, min, max) => (0, _isTypeFn.isNaN)(n) || n < min || n > max;
const _notInLengthMinMax = (str, length, min, max) => (0, _isTypeFn.isStr)(str) && str.length !== length || _notInIntervalStrict(parseInt(str, 10), min, max);
const _isYmd = function (dateStr, nForecastDate, minYear) {
  if (nForecastDate === void 0) {
    nForecastDate = 0;
  }
  if (minYear === void 0) {
    minYear = MIN_YEAR;
  }
  const [yStr, mStr, dStr] = dateStr.split('-'),
    _nowYear = new Date().getFullYear();
  return !(_notInLengthMinMax(yStr, 4, minYear, _nowYear + nForecastDate) || _notInLengthMinMax(mStr, 2, 1, 12) || _notInLengthMinMax(dStr, 2, 1, 31));
};

//YYYY-MM-DD valid format
const isYmd = (str, nForecastDate, minYear) => {
  if (!(0, _isTypeFn.isStr)(str)) {
    return false;
  }
  const _str = str.trim();
  if (_str.length !== 10) {
    return false;
  }
  return _isYmd(_str, nForecastDate, minYear);
};
exports.isYmd = isYmd;
const _getYmdUTC = (d, yearFromDate) => d.getUTCFullYear() - yearFromDate + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2);
const DF_YEAR_FROM_DATE = 2;
const getFromDate = function (yearFromDate) {
  if (yearFromDate === void 0) {
    yearFromDate = DF_YEAR_FROM_DATE;
  }
  const dNow = new Date();
  return _getYmdUTC(dNow, yearFromDate);
};
exports.getFromDate = getFromDate;
const getToDate = () => getFromDate(0);
exports.getToDate = getToDate;
const mlsToDmy = mlsUTC => {
  if (!((0, _isTypeFn.isNumber)(mlsUTC) && isFinite(mlsUTC))) {
    return '';
  }
  const d = new Date(mlsUTC);
  if (d.toString() === 'Invalid Date') {
    return '';
  }
  return ("0" + d.getUTCDate()).slice(-2) + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + d.getUTCFullYear();
};
exports.mlsToDmy = mlsToDmy;
const mlsToYmd = mlsUTC => {
  const dmy = mlsToDmy(mlsUTC);
  if (dmy === '') {
    return '';
  }
  const [d, m, y] = dmy.split('-');
  return y + "-" + m + "-" + d;
};
exports.mlsToYmd = mlsToYmd;
const ymdToMlsUTC = strDate => {
  if (!(0, _isTypeFn.isStr)(strDate)) {
    return NaN;
  }
  const arr = strDate.split('-');
  return Date.UTC(arr[0], _crNumberMonth(arr[1]), arr[2]);
};
exports.ymdToMlsUTC = ymdToMlsUTC;
const ymdToUTCSecond = strDate => ymdToMlsUTC(strDate) / 1000;

/* 1970-01-01 */
exports.ymdToUTCSecond = ymdToUTCSecond;
const isWeekend = (year, month, day) => {
  const date = new Date(Date.UTC(_crNumber(year + ''), _crNumberMonth(month + ''), _crNumber(day + '')));
  if ((0, _isTypeFn.isNaN)(date)) {
    return false;
  }
  const weekday = date.getUTCDay();
  return weekday === 0 || weekday === 6;
};

//YYYY-MM-DDTHH:MM:SSZ
exports.isWeekend = isWeekend;
const crDateAgo = (str, nowMls) => {
  const _mls = (str || '').trim().length === 20 ? Date.UTC(str.slice(0, 4), _crNumberMonth(str.slice(5, 7)), _crNumber(str.slice(8, 10)), _crNumber(str.slice(11, 13)), _crNumber(str.slice(14, 16))) : void 0;
  return (0, _formatDate.safeFormatMls)(_mls, nowMls);
};
exports.crDateAgo = crDateAgo;
//# sourceMappingURL=dateFn.js.map