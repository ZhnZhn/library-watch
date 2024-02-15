"use strict";

exports.__esModule = true;
exports.default = void 0;
var _has = require("../../has");
var _jsxRuntime = require("react/jsx-runtime");
const crImgToken = (letter, label, codes) => _has.HAS_TOUCH_EVENTS ? letter : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
  role: "img",
  "arial-label": label,
  children: String.fromCharCode(...codes)
});
var _default = exports.default = crImgToken;
//# sourceMappingURL=crImgToken.js.map