'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

var _StringUtil = require('../../../js/utils/StringUtil');

var _StringUtil2 = _interopRequireDefault(_StringUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('should setFirstToUpperCase', function (t) {
  var fn = _StringUtil2.default.setFirstToUpperCase;

  t.is(fn('abc'), 'Abc');
  t.is(fn('aBC'), 'ABC');
  t.is(fn('Abc'), 'Abc');

  t.is(fn(null), null);
  t.is((0, _typeof3.default)(fn(undefined)), "undefined");
});
//# sourceMappingURL=StringUtil.test.js.map