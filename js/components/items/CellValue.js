"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const S_CELL = {
    display: 'inline-block',
    marginLeft: 8
  },
  S_CAPTION = {
    fontWeight: 600
  },
  S_VALUE = {
    textAlign: 'center'
  };
const CellValue = _ref => {
  let {
    caption = '',
    value = 'N/A'
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_CELL,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_CAPTION,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_VALUE,
      children: value
    })]
  });
};
var _default = exports.default = CellValue;
//# sourceMappingURL=CellValue.js.map