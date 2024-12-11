"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _jsxRuntime = require("react/jsx-runtime");
const useCommandButtons = onLoad => (0, _useRefInit.default)(() => [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
  isPrimary: true,
  caption: "Load",
  onClick: onLoad
}, "load")])[0];
var _default = exports.default = useCommandButtons;
//# sourceMappingURL=useCommandButtons.js.map