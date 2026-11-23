"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _Svg = require("../zhn/svg/Svg");
var _useResizeElement = _interopRequireDefault(require("./useResizeElement"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const CL_SVG_RESIZE = "svg-resize",
  S_BT_LEFT = {
    marginLeft: 10
  },
  S_BT_RIGHT = {
    ...S_BT_LEFT,
    transform: 'rotate(180deg)'
  },
  _crResizeTitle = leftOrRight => `Resize container horizontal ${leftOrRight}`,
  TITLE_RESIZE_LEFT = _crResizeTitle("left"),
  TITLE_RESIZE_RIGHT = _crResizeTitle("right");
const SvgLongArrowLeft = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.Svg100, {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 1,6 L 11,6"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M 6,2 L 1,6 6,10",
    fill: "none"
  })]
});
const SvgHrzResize = props => {
  const [leftBtHandlers, rightBtHandlers] = (0, _useResizeElement.default)(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _styleFn.S_INLINE_BLOCK,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      "aria-label": TITLE_RESIZE_LEFT,
      title: TITLE_RESIZE_LEFT,
      type: "button",
      className: CL_SVG_RESIZE,
      style: S_BT_LEFT,
      ...leftBtHandlers,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgLongArrowLeft, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      "aria-label": TITLE_RESIZE_RIGHT,
      title: TITLE_RESIZE_RIGHT,
      type: "button",
      className: CL_SVG_RESIZE,
      style: S_BT_RIGHT,
      ...rightBtHandlers,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SvgLongArrowLeft, {})
    })]
  });
};

/*
SvgHrzResize.propTypes = {
  elementRef: PropTypes.ref,
  initWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  onResizeAfter: PropTypes.func
}
*/
var _default = exports.default = SvgHrzResize;
//# sourceMappingURL=SvgHrzResize.js.map