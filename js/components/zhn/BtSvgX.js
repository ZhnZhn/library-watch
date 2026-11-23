"use strict";

exports.__esModule = true;
exports.SvgX = exports.BtSvgX = void 0;
var _styleFn = require("../styleFn");
var _Svg = require("./svg/Svg");
var _jsxRuntime = require("react/jsx-runtime");
const CL_SVG_CLOSE = "svg-close",
  S_SVG = {
    padding: 2
  };
const SvgX = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.Svg100, {
  style: S_SVG,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 0,0 L 12,12"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 12,0 L 0,12"
  })]
});
exports.SvgX = SvgX;
const BtSvgX = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
  "aria-label": props.ariaLabel,
  type: "button",
  tabIndex: "-1",
  className: (0, _styleFn.crCn)(CL_SVG_CLOSE, props.className),
  style: props.style,
  onClick: props.onClose,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgX, {})
});
exports.BtSvgX = BtSvgX;
//# sourceMappingURL=BtSvgX.js.map