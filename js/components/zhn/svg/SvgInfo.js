"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("./Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
const SvgInfo = _ref => {
  let {
    color = 'currentColor',
    size = '24',
    children,
    ...restProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
    w: size,
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...restProps,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "8"
    })]
  });
};
var _default = exports.default = SvgInfo;
//# sourceMappingURL=SvgInfo.js.map