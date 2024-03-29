"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["onClick", "onReg", "children"];

var _fnNoop = function _fnNoop() {};

var MenuAriaItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var onClick = _ref.onClick,
      _ref$onReg = _ref.onReg,
      onReg = _ref$onReg === void 0 ? _fnNoop : _ref$onReg,
      children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _onKeyDown = function _onKeyDown(evt) {
    if (evt.which === 13 || evt.which === 32) {
      onClick();
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({}, rest, {
    ref: ref,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _onKeyDown,
    children: children
  }));
});
var _default = MenuAriaItem;
exports["default"] = _default;
//# sourceMappingURL=MenuAriaItem.js.map