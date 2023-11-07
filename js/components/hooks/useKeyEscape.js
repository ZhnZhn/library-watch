"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fUseKey = _interopRequireDefault(require("./fUseKey"));
const _isKeyEscape = evt => evt.keyCode === 27 || evt.key === 'Escape',
  useKeyEscape = (0, _fUseKey.default)(_isKeyEscape);
var _default = exports.default = useKeyEscape;
//# sourceMappingURL=useKeyEscape.js.map