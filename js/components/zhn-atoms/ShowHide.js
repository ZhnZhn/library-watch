"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

//import PropTypes from "prop-types";
var SHOW_POPUP = "show-popup",
    STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  }
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;

  var _style = isShow ? STYLE.SHOW : STYLE.HIDE,
      _className = isShow ? className + " " + SHOW_POPUP : null;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _className,
    style: (0, _extends2["default"])({}, style, _style)
  }, children);
};
/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
*/


var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map