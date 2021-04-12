"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL = {
  ROOT: 'zhn-bt-circle',
  NOT: 'not-selected'
};

var ButtonCircle = function ButtonCircle(props) {
  var isWithoutDefault = props.isWithoutDefault,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      style = props.style,
      _props$caption = props.caption,
      caption = _props$caption === void 0 ? '' : _props$caption,
      title = props.title,
      onClick = props.onClick,
      _className = isWithoutDefault ? className + " " + CL.NOT : CL.ROOT + " " + className + " " + CL.NOT;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: _className,
    style: style,
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: caption
    })
  });
};
/*
ButtonCircle.propTypes = {
  caption : PropTypes.string,
  title : PropTypes.string,
  className : PropTypes.string,
  style : PropTypes.object,
  isWithoutDefault : PropTypes.bool,
  onClick : PropTypes.func
}
*/


var _default = ButtonCircle;
exports["default"] = _default;
//# sourceMappingURL=ButtonCircle.js.map