"use strict";

exports.__esModule = true;
exports.ymdToUTCSecond = exports.ymdToMlsUTC = exports.mlsToYmd = exports.mlsToDmy = exports.isYmd = exports.isWeekend = exports.getToDate = exports.getFromDate = void 0;
var _isTypeFn = require("./isTypeFn");
var MIN_YEAR = 1999;
var _notInIntervalStrict = function _notInIntervalStrict(n, min, max) {
  return (0, _isTypeFn.isNaN)(n) || n < min || n > max;
};
var _notInLengthMinMax = function _notInLengthMinMax(str, length, min, max) {
  return (0, _isTypeFn.isStr)(str) && str.length !== length || _notInIntervalStrict(parseInt(str, 10), min, max);
};
var _isYmd = function _isYmd(dateStr, nForecastDate, minYear) {
  if (nForecastDate === void 0) {
    nForecastDate = 0;
  }
  if (minYear === void 0) {
    minYear = MIN_YEAR;
  }
  var _dateStr$split = dateStr.split('-'),
    yStr = _dateStr$split[0],
    mStr = _dateStr$split[1],
    dStr = _dateStr$split[2],
    _nowYear = new Date().getFullYear();
  return !(_notInLengthMinMax(yStr, 4, minYear, _nowYear + nForecastDate) || _notInLengthMinMax(mStr, 2, 1, 12) || _notInLengthMinMax(dStr, 2, 1, 31));
};

//YYYY-MM-DD valid format
var isYmd = function isYmd(str, nForecastDate, minYear) {
  if (!(0, _isTypeFn.isStr)(str)) {
    return false;
  }
  var _str = str.trim();
  if (_str.length !== 10) {
    return false;
  }
  return _isYmd(_str, nForecastDate, minYear);
};
exports.isYmd = isYmd;
var _getYmdUTC = function _getYmdUTC(d, yearFromDate) {
  return d.getUTCFullYear() - yearFromDate + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + d.getUTCDate()).slice(-2);
};
var DF_YEAR_FROM_DATE = 2;
var getFromDate = function getFromDate(yearFromDate) {
  if (yearFromDate === void 0) {
    yearFromDate = DF_YEAR_FROM_DATE;
  }
  var dNow = new Date();
  return _getYmdUTC(dNow, yearFromDate);
};
exports.getFromDate = getFromDate;
var getToDate = function getToDate() {
  return getFromDate(0);
};
exports.getToDate = getToDate;
var mlsToDmy = function mlsToDmy(mlsUTC) {
  if (!((0, _isTypeFn.isNumber)(mlsUTC) && isFinite(mlsUTC))) {
    return '';
  }
  var d = new Date(mlsUTC);
  if (d.toString() === 'Invalid Date') {
    return '';
  }
  return ("0" + d.getUTCDate()).slice(-2) + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + d.getUTCFullYear();
};
exports.mlsToDmy = mlsToDmy;
var mlsToYmd = function mlsToYmd(mlsUTC) {
  var dmy = mlsToDmy(mlsUTC);
  if (dmy === '') {
    return '';
  }
  var _dmy$split = dmy.split('-'),
    d = _dmy$split[0],
    m = _dmy$split[1],
    y = _dmy$split[2];
  return y + "-" + m + "-" + d;
};
exports.mlsToYmd = mlsToYmd;
var ymdToMlsUTC = function ymdToMlsUTC(strDate) {
  if (!(0, _isTypeFn.isStr)(strDate)) {
    return NaN;
  }
  var arr = strDate.split('-');
  return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
};
exports.ymdToMlsUTC = ymdToMlsUTC;
var ymdToUTCSecond = function ymdToUTCSecond(strDate) {
  return ymdToMlsUTC(strDate) / 1000;
};

/* 1970-01-01 */
exports.ymdToUTCSecond = ymdToUTCSecond;
var isWeekend = function isWeekend(year, month, day) {
  var date = new Date(Date.UTC(parseInt(year + '', 10), parseInt(month + '', 10) - 1, parseInt(day + '', 10)));
  if ((0, _isTypeFn.isNaN)(date)) {
    return false;
  }
  var weekday = date.getUTCDay();
  return weekday === 0 || weekday === 6;
};
exports.isWeekend = isWeekend;
//# sourceMappingURL=dateFn.js.map