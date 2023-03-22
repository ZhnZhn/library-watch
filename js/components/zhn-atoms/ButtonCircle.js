"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("react/jsx-runtime");
var CL_BT_CIRCLE = 'zhn-bt-circle';
var ButtonCircle = function ButtonCircle(_ref) {
  var isWithoutDefault = _ref.isWithoutDefault,
    className = _ref.className,
    style = _ref.style,
    _ref$caption = _ref.caption,
    caption = _ref$caption === void 0 ? '' : _ref$caption,
    title = _ref.title,
    onClick = _ref.onClick;
  var _className = (0, _crCn["default"])([!isWithoutDefault, CL_BT_CIRCLE], className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: _className,
    style: style,
    title: title,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: caption
    })
  });
};
var _default = ButtonCircle;
exports["default"] = _default;
//# sourceMappingURL=ButtonCircle.js.map