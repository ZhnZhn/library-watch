"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fUseKey = _interopRequireDefault(require("./fUseKey"));
const _isKeyEnter = event => event.keyCode === 13 || event.key === 'Enter',
  useKeyEnter = (0, _fUseKey.default)(_isKeyEnter);
var _default = exports.default = useKeyEnter;
//# sourceMappingURL=useKeyEnter.js.map