"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
const SvgIcon = ({
  color = 'currentColor',
  size = '24',
  children,
  ...restProps
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.default, {
  w: size,
  width: size,
  height: size,
  fill: "none",
  stroke: color,
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...restProps,
  children: children
});
var _default = exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map