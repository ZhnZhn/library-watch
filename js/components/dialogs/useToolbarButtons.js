"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
const _crToolbarBt = (caption, title, onClick) => onClick ? {
  caption,
  title,
  onClick
} : null;
const useToolbarButtons = (toggleIsLabels, toggleIsDates) => (0, _useRefInit.default)(() => [_crToolbarBt('L', "Click to toggle row's labels", toggleIsLabels), _crToolbarBt('D', 'Click to toggle date input', toggleIsDates)].filter(Boolean))[0];
var _default = exports.default = useToolbarButtons;
//# sourceMappingURL=useToolbarButtons.js.map