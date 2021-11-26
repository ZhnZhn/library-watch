"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ContainerStyles = require("../styles/ContainerStyles");

var _jsxRuntime = require("react/jsx-runtime");

var CL_OPEN = "show-popup",
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _className = isShow ? CL_OPEN : null,
      _style = isShow ? S_BLOCK : S_NONE;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: (0, _extends2["default"])({}, _ContainerStyles.S_BROWSER, style, _style),
    children: children
  });
};

var _default = Browser;
exports["default"] = _default;
//# sourceMappingURL=Browser.js.map