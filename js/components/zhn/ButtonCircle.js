"use strict";

exports.__esModule = true;
exports.ButtonCircleCn = exports.ButtonCircle2 = exports.ButtonCircle = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const _fButtonCircle = crBtCn => props => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
  "aria-label": props.ariaLabel,
  type: "button",
  className: crBtCn(props.className),
  style: props.style,
  title: props.title,
  onClick: props.onClick,
  children: props.children ? props.children : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: props.caption ?? ''
  })
});
const CL_BT_CIRCLE = 'zhn-bt-circle';
const CL_BT_CIRCLE_2 = 'zhn-bt-circle2';
const _fCrCn = className1 => className2 => (0, _styleFn.crCn)(className1, className2);
const ButtonCircle = exports.ButtonCircle = _fButtonCircle(_fCrCn(CL_BT_CIRCLE));
const ButtonCircle2 = exports.ButtonCircle2 = _fButtonCircle(_fCrCn(CL_BT_CIRCLE_2));
const ButtonCircleCn = exports.ButtonCircleCn = _fButtonCircle(className => className);
//# sourceMappingURL=ButtonCircle.js.map