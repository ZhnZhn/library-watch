"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "style", "caption", "onClick"];
var CL_BT_CIRCLE_2 = 'zhn-bt-circle2';
var ButtonCircle2 = function ButtonCircle2(_ref) {
  var className = _ref.className,
    style = _ref.style,
    _ref$caption = _ref.caption,
    caption = _ref$caption === void 0 ? '' : _ref$caption,
    onClick = _ref.onClick,
    restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", (0, _extends2["default"])({
    type: "button",
    className: (0, _crCn["default"])(CL_BT_CIRCLE_2, className),
    style: style,
    onClick: onClick
  }, restProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: caption
    })
  }));
};
var _default = ButtonCircle2;
exports["default"] = _default;
//# sourceMappingURL=ButtonCircle2.js.map