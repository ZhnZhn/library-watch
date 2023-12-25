"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _has = require("../has");
var _fUseKey = _interopRequireDefault(require("./fUseKey"));
const _isKeyEscape = evt => evt.keyCode === 27 || evt.key === 'Escape',
  FN_VOID = void 0,
  useKeyEscape = _has.HAS_KEYBOARD_FOCUS ? (0, _fUseKey.default)(_isKeyEscape) : FN_VOID;
var _default = exports.default = useKeyEscape;
//# sourceMappingURL=useKeyEscape.js.map