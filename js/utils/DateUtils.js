"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var DateUtils = {
  isValidDate: function isValidDate(str) {
    // STRING FORMAT yyyy-mm-dd
    if (!str) {
      return false;
    }

    if (str.trim().length !== 10) {
      return false;
    } // m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'


    var m = str.match(/(\d{4})-(\d{2})-(\d{2})/); // STR IS NOT FIT m IS NOT OBJECT

    if (m === null || typeof m !== 'object') {
      return false;
    } // CHECK m TYPE


    if (typeof m !== 'object' && m !== null && m.size !== 3) {
      return false;
    }

    var thisYear = new Date().getFullYear();
    var minYear = 1999; // YEAR CHECK

    if (m[1].length < 4 || m[1] < minYear || m[1] > thisYear) {
      return false;
    } // MONTH CHECK


    if (m[2].length < 2 || m[2] < 1 || m[2] > 12) {
      return false;
    } // DAY CHECK


    if (m[3].length < 2 || m[3] < 1 || m[3] > 31) {
      return false;
    }

    return true;
  },
  isValidDateOrEmpty: function isValidDateOrEmpty(str) {
    if (str === '') {
      return true;
    } else {
      return DateUtils.isValidDate(str);
    }
  },
  getFromDate: function getFromDate(yearMinus) {
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
  },
  getToDate: function getToDate() {
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
  },
  formatTo: function formatTo(millisUTC) {
    var d = new Date(millisUTC);
    return ("0" + d.getUTCDate()).slice(-2) + "-" + ("0" + (d.getUTCMonth() + 1)).slice(-2) + "-" + d.getUTCFullYear();
  },
  formatToYYYYMMDD: function formatToYYYYMMDD(millisUTC) {
    var d = new Date(millisUTC);
    return d.getUTCFullYear() + ("0" + (d.getUTCMonth() + 1)).slice(-2) + ("0" + d.getUTCDate()).slice(-2);
  },
  toUTCMillis: function toUTCMillis(strDate) {
    var arr = strDate.split('-');
    return Date.UTC(arr[0], parseInt(arr[1], 10) - 1, arr[2]);
  },
  toUTCSecond: function toUTCSecond(strDate) {
    return DateUtils.toUTCMillis(strDate) / 1000;
  },

  /* 1970-01-01 */
  isWeekend: function isWeekend(year, month, day) {
    var date = new Date(Date.UTC(parseInt(year + '', 10), parseInt(month + '', 10) - 1, parseInt(day + '', 10))),
        weekday = date.getUTCDay();

    if (weekday === 0 || weekday === 6) {
      return true;
    } else {
      return false;
    }
  }
};
var _default = DateUtils;
exports["default"] = _default;
//# sourceMappingURL=DateUtils.js.map