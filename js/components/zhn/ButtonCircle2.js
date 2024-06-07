"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';
const ButtonCircle2 = _ref => {
  let {
    className,
    style,
    caption = '',
    onClick,
    ...restProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: (0, _crCn.default)(CL_BT_CIRCLE_2, className),
    style: style,
    onClick: onClick,
    ...restProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: caption
    })
  });
};
var _default = exports.default = ButtonCircle2;
//# sourceMappingURL=ButtonCircle2.js.map