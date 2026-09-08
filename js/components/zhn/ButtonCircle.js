"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_BT_CIRCLE = 'zhn-bt-circle';
const ButtonCircle = props => {
  const _className = (0, _styleFn.crCn)([!props.isWithoutDefault, CL_BT_CIRCLE], props.className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: _className,
    style: props.style,
    title: props.title,
    onClick: props.onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: props.caption ?? ""
    })
  });
};
var _default = exports.default = ButtonCircle;
//# sourceMappingURL=ButtonCircle.js.map