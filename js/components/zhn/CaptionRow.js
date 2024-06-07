"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _CaptionRow = require("./CaptionRow.Style");
var _jsxRuntime = require("react/jsx-runtime");
const CaptionRow = _ref => {
  let {
    style,
    caption = '',
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow.CL_CAPTION,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow.CL_NOT_SELECTED,
      style: _CaptionRow.S_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: _CaptionRow.S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = exports.default = CaptionRow;
//# sourceMappingURL=CaptionRow.js.map