'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _DateUtils = require('../../../js/utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = _DateUtils2.default.isWeekend;

(0, _ava2.default)('should return is day (YYYY, MM, DD) weekend', function (t) {
  t.false(fn('1970', '01', '01')); //Thursday
  t.false(fn('1970', '01', '02')); //Friday
  t.true(fn('1970', '01', '03')); //Saturday
  t.true(fn('1970', '01', '04')); //Sunday
  t.false(fn('1970', '01', '05')); //Monday
  t.false(fn('1970', '01', '06')); //Tuesday
  t.false(fn('1970', '01', '07')); //Wensday
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\__tests__\isWeekend.test.js.map