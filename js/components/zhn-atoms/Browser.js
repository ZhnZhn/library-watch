"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ContainerStyles = _interopRequireDefault(require("../styles/ContainerStyles"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CL_OPEN = "show-popup";

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _className = isShow ? CL_OPEN : null,
      _style = isShow ? _ContainerStyles["default"].displayBlock : _ContainerStyles["default"].displayNone;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, _ContainerStyles["default"].browserRootDiv, style, _style),
    children: children
  });
};
/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/


var _default = Browser;
exports["default"] = _default;
//# sourceMappingURL=Browser.js.map