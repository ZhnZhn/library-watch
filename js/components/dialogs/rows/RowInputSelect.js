"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputSelect = _interopRequireDefault(require("../../zhn-select/InputSelect"));
var _Row = _interopRequireDefault(require("./Row"));
var _Caption = _interopRequireDefault(require("./Caption"));
var _jsxRuntime = require("react/jsx-runtime");
const RowInputSelect = _ref => {
  let {
    isShowLabel,
    caption,
    placeholder,
    options,
    onSelect
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption.default, {
      is: isShowLabel,
      caption: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
      width: "250",
      placeholder: placeholder,
      options: options,
      onSelect: onSelect
    })]
  });
};
var _default = exports.default = RowInputSelect;
//# sourceMappingURL=RowInputSelect.js.map