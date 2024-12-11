"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const SvgLogo = _ref => {
  let {
    w,
    h = w,
    children,
    ...restProps
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    ...restProps,
    "aria-hidden": "true",
    viewBox: `0 0 ${w} ${h}`,
    xmlns: "http://www.w3.org/2000/svg",
    children: children
  });
};
var _default = exports.default = SvgLogo;
//# sourceMappingURL=SvgLogo.js.map