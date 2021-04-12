"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = 'bt-more';

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      btRef = _ref.btRef,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: btRef,
    className: CL,
    style: style,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      style: svgStyle,
      width: "6px",
      height: "22px",
      viewBox: "0 0 6 22",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "4",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "11",
        r: "2"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "3",
        cy: "18",
        r: "2"
      })]
    })
  });
};

var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map