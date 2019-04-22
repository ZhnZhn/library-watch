"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var CL = "svg-close";

var STYLE = {
  COLOR: "#ed5813",
  SVG: {
    padding: '3px'
  }
};

var SvgClose = function SvgClose(_ref) {
  var className = _ref.className,
      style = _ref.style,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    "div",
    {
      className: CL + " " + className,
      style: style,
      onClick: onClose
    },
    _react2.default.createElement(
      "svg",
      {
        preserveAspectRatio: "none", xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12", width: "100%", height: "100%",
        style: STYLE.SVG,
        stroke: STYLE.COLOR,
        strokeWidth: "2",
        strokeLinecap: "round"
      },
      _react2.default.createElement("path", { d: "M 0,0 L 12,12" }),
      _react2.default.createElement("path", { d: "M 12,0 L 0,12" })
    )
  );
};
/*
SvgClose.propTypes = {
  style: PropTypes.object,
  onClose: PropTypes.func
}
*/
SvgClose.defaultProps = {
  className: ''
};

exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map