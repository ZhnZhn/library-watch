"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var Token = function Token(_ref) {
  var isFirstBlank = _ref.isFirstBlank,
      color = _ref.color,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    style: {
      color: color,
      fontWeight: 'bold'
    },
    children: [isFirstBlank ? ' ' : null, children]
  });
};

var _default = Token;
exports["default"] = _default;
//# sourceMappingURL=Token.js.map