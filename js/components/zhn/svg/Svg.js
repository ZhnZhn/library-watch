"use strict";

exports.__esModule = true;
exports.SvgArrowRight = exports.SvgArrowLeft = exports.SvgArrowDown = exports.Svg100 = exports.Svg = void 0;
var _styleFn = require("../../styleFn");
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
const SvgArrowDown = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(Svg, {
  w: "20",
  focusable: "false",
  style: props.style,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 3,6 L 10,12.5 M 10,12.5 L 17,6"
  })
});
exports.SvgArrowDown = SvgArrowDown;
const S_ARROW = {
    stroke: 'currentColor',
    strokeWidth: 2.5
  },
  S_ARROW_RIGHT = (0, _styleFn.crTransformRotateStyle)(270),
  S_ARROW_LEFT = (0, _styleFn.crTransformRotateStyle)(90);
const _fSvgArrow = arrowStyle => ({
  style
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgArrowDown, {
  style: {
    ...S_ARROW,
    ...arrowStyle,
    ...style
  }
});
const SvgArrowRight = exports.SvgArrowRight = _fSvgArrow(S_ARROW_RIGHT);
const SvgArrowLeft = exports.SvgArrowLeft = _fSvgArrow(S_ARROW_LEFT);
//# sourceMappingURL=Svg.js.map