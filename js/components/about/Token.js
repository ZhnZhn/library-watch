"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Token = _ref => {
  let {
    isFirstBlank,
    color,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    style: {
      color,
      fontWeight: 'bold'
    },
    children: [isFirstBlank ? ' ' : null, children]
  });
};
var _default = exports.default = Token;
//# sourceMappingURL=Token.js.map