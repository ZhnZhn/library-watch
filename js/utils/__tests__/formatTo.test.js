'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _DateUtils = require('../../../js/utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = _DateUtils2.default.formatTo;

(0, _ava2.default)('should convert date in millisecond to DD-MM-YYY', function (t) {
  t.is(fn(0), '01-01-1970');
  t.is(fn(1 * 24 * 60 * 60 * 1000), '02-01-1970');
  t.is(fn(2 * 24 * 60 * 60 * 1000), '03-01-1970');
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\__tests__\formatTo.test.js.map