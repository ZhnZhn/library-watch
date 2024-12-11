"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogCell = _interopRequireDefault(require("../dialogs/DialogCell"));
var _jsxRuntime = require("react/jsx-runtime");
const RowText = _ref => {
  let {
    style,
    caption,
    isCaption = true,
    textStyle,
    text
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogCell.default.Row, {
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Caption, {
      is: isCaption,
      caption: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: textStyle,
      children: text
    })]
  });
};
var _default = exports.default = RowText;
//# sourceMappingURL=RowText.js.map