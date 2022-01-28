"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var _CaptionRow = require("./CaptionRow.Style");

var _jsxRuntime = require("react/jsx-runtime");

var CaptionRow = function CaptionRow(_ref) {
  var style = _ref.style,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      onClose = _ref.onClose,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow.CL_CAPTION,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow.CL_NOT_SELECTED,
      style: _CaptionRow.S_CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: _CaptionRow.S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};

var _default = CaptionRow;
exports["default"] = _default;
//# sourceMappingURL=CaptionRow.js.map