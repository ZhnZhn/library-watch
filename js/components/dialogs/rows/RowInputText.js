"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _InputText = _interopRequireDefault(require("../../zhn/InputText"));
var _Row = _interopRequireDefault(require("./Row"));
var _Caption = _interopRequireDefault(require("./Caption"));
var _jsxRuntime = require("react/jsx-runtime");
const S_INPUT_TEXT = {
  width: 240,
  height: 38,
  paddingLeft: 5
};
const RowInputText = _ref => {
  let {
    refEl,
    isShowLabel,
    caption,
    placeholder,
    onEnter
  } = _ref;
  const labelId = (0, _uiApi.useId)(),
    _placeholder = isShowLabel ? placeholder : placeholder || caption;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption.default, {
      is: isShowLabel,
      caption: caption,
      labelId: labelId
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText.default, {
      refEl: refEl,
      style: S_INPUT_TEXT,
      placeholder: _placeholder,
      labelId: labelId,
      onEnter: onEnter
    })]
  });
};
var _default = exports.default = RowInputText;
//# sourceMappingURL=RowInputText.js.map