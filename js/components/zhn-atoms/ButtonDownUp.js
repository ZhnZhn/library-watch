"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ButtonDownUp = _interopRequireDefault(require("./ButtonDownUp.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var ButtonDownUp = function ButtonDownUp(props) {
  var style = props.style,
      isUp = props.isUp,
      _props$caption = props.caption,
      caption = _props$caption === void 0 ? '' : _props$caption,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      onClick = props.onClick,
      _style = isUp ? _ButtonDownUp["default"].ROOT_UP : _ButtonDownUp["default"].ROOT_DOWN,
      _circleStyle = isUp ? _ButtonDownUp["default"].CIRCLE_UP : _ButtonDownUp["default"].CIRCLE_DOWN;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    title: title,
    style: (0, _extends2["default"])({}, _ButtonDownUp["default"].ROOT, style, _style),
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, _ButtonDownUp["default"].CIRCLE, _circleStyle)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: _ButtonDownUp["default"].ITEM,
      children: caption
    })]
  });
};
/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/


var _default = ButtonDownUp;
exports["default"] = _default;
//# sourceMappingURL=ButtonDownUp.js.map