"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
const SvgIcon = _ref => {
  let {
    color = 'currentColor',
    size = '24',
    children,
    ...restProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.default, {
    w: size,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...restProps,
    children: children
  });
};
var _default = exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map