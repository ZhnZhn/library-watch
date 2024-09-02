"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_BT_CIRCLE = 'zhn-bt-circle';
const ButtonCircle = _ref => {
  let {
    isWithoutDefault,
    className,
    style,
    caption = '',
    title,
    onClick
  } = _ref;
  const _className = (0, _styleFn.crCn)([!isWithoutDefault, CL_BT_CIRCLE], className);
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
var _default = exports.default = ButtonCircle;
//# sourceMappingURL=ButtonCircle.js.map