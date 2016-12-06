'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
  t.is(_typeof(fn(undefined)), "undefined");
});
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\__tests__\StringUtil.test.js.map