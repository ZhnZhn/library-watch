"use strict";

exports.__esModule = true;
exports.Svg100 = exports.Svg = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const SVG_LINECAP_PROPS = {
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const _crWidthHeightViewBoxProps = (width, height, viewBox) => ({
  "aria-hidden": "true",
  xlmns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox,
  ...SVG_LINECAP_PROPS
});
const Svg = ({
  w,
  h = w,
  children,
  ...restProps
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
  ..._crWidthHeightViewBoxProps(`${w}px`, `${h}px`, `0 0 ${w} ${h}`),
  ...restProps,
  children: children
});
exports.Svg = Svg;
const Svg100 = ({
  w = 12,
  h = w,
  children,
  ...restProps
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
  ..._crWidthHeightViewBoxProps("100%", "100%", `0 0 ${w} ${h}`),
  ...restProps,
  preserveAspectRatio: "none",
  children: children
});
exports.Svg100 = Svg100;
//# sourceMappingURL=Svg.js.map