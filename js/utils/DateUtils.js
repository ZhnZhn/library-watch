"use strict";

exports.__esModule = true;
exports.toUTCSecond = exports.toUTCMillis = exports.isYmd = exports.isWeekend = exports.getToDate = exports.getFromDate = exports.formatToYYYYMMDD = exports.formatTo = void 0;
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
var getFromDate = function getFromDate(yearMinus) {
  var dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear();
  var monthTo = dateNow.getUTCMonth() + 1;
  if (monthTo < 10) {
    monthTo = "0" + monthTo;
  }
  var dayTo = dateNow.getUTCDate();
  if (dayTo < 10) {
    dayTo = "0" + dayTo;
  }
  return yearTo - yearMinus + "-" + monthTo + "-" + dayTo;
};
exports.getFromDate = getFromDate;
var getToDate = function getToDate() {
  var dateNow = new Date(),
    yearTo = dateNow.getUTCFullYear();
  var monthTo = dateNow.getUTCMonth() + 1;
  if (monthTo < 10) {
    monthTo = "0" + monthTo;
  }
  var dayTo = dateNow.getUTCDate();
  if (dayTo < 10) {
    dayTo = "0" + dayTo;
  }
  return yearTo + "-" + monthTo + "-" + dayTo;
};
exports.getToDate = getToDate;
var formatTo = function formatTo(millisUTC) {
  var d = new Date(millisUTC);
  return ("0" + d.getUTCDate()).slice(-2) + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + d.getUTCFullYear();
};
exports.formatTo = formatTo;
var formatToYYYYMMDD = function formatToYYYYMMDD(millisUTC) {
  var d = new Date(millisUTC);
  return d.getUTCFullYear() + ("0" + (d.getUTCMonth() + 1)).slice(-2) + ("0" + d.getUTCDate()).slice(-2);
};
exports.formatToYYYYMMDD = formatToYYYYMMDD;
var toUTCMillis = function toUTCMillis(strDate) {
  var arr = strDate.split('-');
  return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
};
exports.toUTCMillis = toUTCMillis;
var toUTCSecond = function toUTCSecond(strDate) {
  return toUTCMillis(strDate) / 1000;
};

/* 1970-01-01 */
exports.toUTCSecond = toUTCSecond;
var isWeekend = function isWeekend(year, month, day) {
  var date = new Date(Date.UTC(parseInt(year + '', 10), parseInt(month + '', 10) - 1, parseInt(day + '', 10))),
    weekday = date.getUTCDay();
  return weekday === 0 || weekday === 6;
};
exports.isWeekend = isWeekend;
//# sourceMappingURL=DateUtils.js.map