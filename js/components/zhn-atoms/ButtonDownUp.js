"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SpinnerLoading = _interopRequireDefault(require("./SpinnerLoading"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  height: 36,
  border: '1px solid',
  borderRadius: 10,
  cursor: 'pointer'
},
    S_ROOT_UP = {
  color: '#a487d4',
  borderColor: '#a487d4',
  borderWidth: 2,
  fontWeight: 'bold'
},
    S_ROOT_DOWN = {
  color: 'gray',
  borderColor: 'gray',
  borderWidth: 1,
  fontWeight: 'normal'
},
    S_ITEM = {
  display: 'inline-block',
  padding: '0 8px 0 5px'
},
    S_CIRCLE = {
  display: 'inline-block',
  marginLeft: 8,
  backgroundColor: 'gray',
  width: 12,
  height: 12,
  border: '1px solid gray',
  borderRadius: '50%'
},
    S_CIRCLE_LOADING = {
  backgroundColor: 'transparent',
  border: 'none'
},
    S_CIRCLE_UP = {
  backgroundColor: '#a487d4',
  borderColor: '#a487d4'
},
    S_CIRCLE_DOWN = {
  backgroundColor: 'gray',
  borderColor: 'gray'
},
    S_SPINNER = {
  top: 5,
  left: 2
};

var _crStateEl = function _crStateEl(isUp, isLoading) {
  var _spinner = null;

  if (isLoading) {
    _spinner = /*#__PURE__*/(0, _jsxRuntime.jsx)(_SpinnerLoading["default"], {
      style: S_SPINNER
    });
  }

  var _circleStyle = isLoading ? S_CIRCLE_LOADING : isUp ? S_CIRCLE_UP : S_CIRCLE_DOWN;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [_spinner, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S_CIRCLE, _circleStyle)
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

  var _style = isUp ? S_ROOT_UP : S_ROOT_DOWN;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    title: title,
    style: (0, _extends2["default"])({}, S_ROOT, style, _style),
    onClick: onClick,
    children: [_crStateEl(isUp, isLoading), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM,
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