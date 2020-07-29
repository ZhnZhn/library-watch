"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

//import PropTypes from 'prop-types'
var CL = "svg-close";
var STYLE = {
  COLOR: "#ed5813",
  SVG: {
    padding: 3
  }
};

var SvgClose = function SvgClose(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      style = _ref.style,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("button", {
    tabIndex: "-1",
    className: CL + " " + className,
    style: style,
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    width: "100%",
    height: "100%",
    style: STYLE.SVG,
    stroke: STYLE.COLOR,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 0,0 L 12,12"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M 12,0 L 0,12"
  })));
};
/*
SvgClose.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/


var _default = SvgClose;
exports["default"] = _default;
//# sourceMappingURL=SvgClose.js.map