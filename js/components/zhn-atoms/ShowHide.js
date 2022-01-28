"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SHOW_POPUP = "show-popup",
    S_SHOW = {
  display: 'block'
},
    S_HIDE = {
  display: 'none'
};

var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;

  var _style = isShow ? S_SHOW : S_HIDE,
      _className = isShow ? className + " " + CL_SHOW_POPUP : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, style, _style),
    children: children
  });
};

var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map