'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _DateUtils = require('../../../js/utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('should formatTo convert date in millisecond to DD-MM-YYY', function (t) {
  var fn = _DateUtils2.default.formatTo;

  t.is(fn(0), '01-01-1970');
  t.is(fn(1 * 24 * 60 * 60 * 1000), '02-01-1970');
  t.is(fn(2 * 24 * 60 * 60 * 1000), '03-01-1970');
});

(0, _ava2.default)('should isWeekend return is day (YYYY, MM, DD) weekend', function (t) {
  var fn = _DateUtils2.default.isWeekend;

  t.false(fn('1970', '01', '01')); //Thursday
  t.false(fn('1970', '01', '02')); //Friday
  t.true(fn('1970', '01', '03')); //Saturday
  t.true(fn('1970', '01', '04')); //Sunday
  t.false(fn('1970', '01', '05')); //Monday
  t.false(fn('1970', '01', '06')); //Tuesday
  t.false(fn('1970', '01', '07')); //Wensday
});

(0, _ava2.default)('should toUTCMillis convert YYYY-MM-DD to milliseconds', function (t) {
  var fn = _DateUtils2.default.toUTCMillis;

  t.is(fn('1970-01-01'), 0);
  t.is(fn('1970-01-02'), 1 * 24 * 60 * 60 * 1000);
  t.is(fn('1970-01-03'), 2 * 24 * 60 * 60 * 1000);
});
//# sourceMappingURL=DateUtils.test.js.map