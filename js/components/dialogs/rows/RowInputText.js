"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _InputText = _interopRequireDefault(require("../../zhn-atoms/InputText"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ROW_DIV = {
  margin: 5
},
    S_LABEL_SPAN = {
  color: '#1b75bb',
  display: 'inline-block',
  width: 100,
  paddingRight: 5,
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold'
},
    S_ROOT = {
  lineHeight: 2
},
    S_CAPTION = {
  width: 120
},
    S_INPUT_TEXT = {
  width: 250,
  height: 30,
  paddingLeft: 10,
  marginLeft: 0,
  marginRight: 0
};
var RowInputText = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$isShowLabel = _ref.isShowLabel,
      isShowLabel = _ref$isShowLabel === void 0 ? true : _ref$isShowLabel,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      placeholder = _ref.placeholder,
      onEnter = _ref.onEnter;

  var _placeholder = isShowLabel ? placeholder : placeholder || caption;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, S_ROW_DIV, S_ROOT),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
      is: isShowLabel,
      style: (0, _extends2["default"])({}, S_LABEL_SPAN, S_CAPTION),
      caption: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText["default"], {
      ref: ref,
      style: S_INPUT_TEXT,
      placeholder: _placeholder,
      onEnter: onEnter
    })]
  });
});
var _default = RowInputText;
exports["default"] = _default;
//# sourceMappingURL=RowInputText.js.map