"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CaptionToken = _interopRequireDefault(require("./CaptionToken"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _CaptionRow = require("./CaptionRow.Style");
var _jsxRuntime = require("react/jsx-runtime");
const CaptionRow = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: _CaptionRow.CL_CAPTION,
  style: props.style,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionToken.default, {
    caption: props.caption
  }), props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
    style: _CaptionRow.S_SVG_CLOSE,
    onClose: props.onClose
  })]
});
var _default = exports.default = CaptionRow;
//# sourceMappingURL=CaptionRow.js.map