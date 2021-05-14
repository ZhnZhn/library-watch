"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ButtonDownUp = _interopRequireDefault(require("./ButtonDownUp.Style"));

var _SpinnerLoading = _interopRequireDefault(require("./SpinnerLoading"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var _crStateComp = function _crStateComp(isUp, isLoading) {
  var _spinner = null;

  if (isLoading) {
    _spinner = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SpinnerLoading["default"], {
      style: _ButtonDownUp["default"].SPINNER
    });
  }

  var _circleStyle = isLoading ? _ButtonDownUp["default"].CIRCLE_LOADING : isUp ? _ButtonDownUp["default"].CIRCLE_UP : _ButtonDownUp["default"].CIRCLE_DOWN;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [_spinner, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, _ButtonDownUp["default"].CIRCLE, _circleStyle)
    })]
  });
};

var ButtonDownUp = function ButtonDownUp(_ref) {
  var style = _ref.style,
      isUp = _ref.isUp,
      isLoading = _ref.isLoading,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      onClick = _ref.onClick;

  var _style = isUp ? _ButtonDownUp["default"].ROOT_UP : _ButtonDownUp["default"].ROOT_DOWN;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    title: title,
    style: (0, _extends2["default"])({}, _ButtonDownUp["default"].ROOT, style, _style),
    onClick: onClick,
    children: [_crStateComp(isUp, isLoading), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: _ButtonDownUp["default"].ITEM,
      children: caption
    })]
  });
};
/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  isLoading: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/


var _default = ButtonDownUp;
exports["default"] = _default;
//# sourceMappingURL=ButtonDownUp.js.map