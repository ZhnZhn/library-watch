"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  CELL: {
    display: 'inline-block',
    marginLeft: 8
  },
  CAPTION: {
    fontWeight: 600
  },
  VALUE: {
    textAlign: 'center'
  }
};

var CellValue = function CellValue(_ref) {
  var _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'N/A' : _ref$value;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.CELL,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.CAPTION,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S.VALUE,
      children: value
    })]
  });
};

var _default = CellValue;
exports["default"] = _default;
//# sourceMappingURL=CellValue.js.map