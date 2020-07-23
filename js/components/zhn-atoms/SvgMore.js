"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = 'bt-more';

var SvgMore = function SvgMore(_ref) {
  var style = _ref.style,
      svgStyle = _ref.svgStyle,
      btRef = _ref.btRef,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: btRef,
    className: CL,
    style: style,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    style: svgStyle,
    width: "6px",
    height: "22px",
    viewBox: "0 0 6 22",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "11",
    r: "2"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "3",
    cy: "18",
    r: "2"
  })));
};

var _default = SvgMore;
exports["default"] = _default;
//# sourceMappingURL=SvgMore.js.map