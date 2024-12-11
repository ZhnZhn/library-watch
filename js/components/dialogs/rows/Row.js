"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_ROW_DIV = {
  display: 'flex',
  alignItems: 'center',
  margin: 5
};
const Row = _ref => {
  let {
    style,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      ...S_ROW_DIV,
      ...style
    },
    children: children
  });
};
var _default = exports.default = Row;
//# sourceMappingURL=Row.js.map