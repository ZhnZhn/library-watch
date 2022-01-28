"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

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
      className = _ref.className,
      children = _ref.children;

  var _className = (0, _crCn["default"])(className, [isShow, CL_SHOW_POPUP]),
      _style = isShow ? S_SHOW : S_HIDE;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, style, _style),
    children: children
  });
};

var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map