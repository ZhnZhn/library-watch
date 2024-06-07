"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("../zhn/svg/Svg100"));
var _useResizeElement = _interopRequireDefault(require("./useResizeElement"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const CL_SVG_RESIZE = "svg-resize",
  S_ROOT_DIV = {
    display: 'inline-block'
  },
  S_BT_DIV = {
    marginLeft: 10
  };
const SvgHrzResize = props => {
  const [leftBtHandlers, rightBtHandlers] = (0, _useResizeElement.default)(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT_DIV,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_SVG_RESIZE,
      style: S_BT_DIV,
      title: "Resize container horizontal left",
      ...leftBtHandlers,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M 1,6 L 11,6",
          strokeWidth: "2",
          strokeLinecap: "round"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M 6,2 L 1,6 6,10",
          strokeWidth: "2",
          strokeLinecap: "round",
          fill: "none"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL_SVG_RESIZE,
      style: S_BT_DIV,
      title: "Resize container horizontal right",
      ...rightBtHandlers,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
        viewBox: "0 0 12 12",
        width: "100%",
        height: "100%",
        preserveAspectRatio: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M 1,6 L 11,6",
          strokeWidth: "2",
          strokeLinecap: "round"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          d: "M 6,2 L 11,6 6,10",
          strokeWidth: "2",
          strokeLinecap: "round",
          fill: "none"
        })]
      })
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