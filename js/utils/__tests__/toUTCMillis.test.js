'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _DateUtils = require('../../../js/utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = _DateUtils2.default.toUTCMillis;

(0, _ava2.default)('should convert YYYY-MM-DD to milliseconds', function (t) {
  t.is(fn('1970-01-01'), 0);
  t.is(fn('1970-01-02'), 1 * 24 * 60 * 60 * 1000);
  t.is(fn('1970-01-03'), 2 * 24 * 60 * 60 * 1000);
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\__tests__\toUTCMillis.test.js.map