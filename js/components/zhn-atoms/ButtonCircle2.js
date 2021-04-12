"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = 'zhn-bt-circle2';

var ButtonCircle2 = function ButtonCircle2(_ref) {
  var className = _ref.className,
      style = _ref.style,
      caption = _ref.caption,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["className", "style", "caption", "onClick"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    className: CL + " " + className,
    style: style,
    onClick: onClick
  }, rest, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: caption
    })
  }));
};

ButtonCircle2.defaultProp = {
  className: '',
  caption: ''
};
var _default = ButtonCircle2;
exports["default"] = _default;
//# sourceMappingURL=ButtonCircle2.js.map