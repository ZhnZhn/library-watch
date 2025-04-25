"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _styleFn = require("../styleFn");
var _SvgMore = _interopRequireDefault(require("./SvgMore"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _CaptionRow = require("./CaptionRow.Style");
var _jsxRuntime = require("react/jsx-runtime");
const SL_CAPTION = {
  paddingLeft: 0
};
const ContainerCaption = _ref => {
  let {
    style,
    moreStyle,
    caption = '',
    onMore,
    onClose,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow.CL_CAPTION,
    style: style,
    children: [(0, _isTypeFn.isFn)(onMore) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
      style: moreStyle,
      onClick: onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow.CL_NOT_SELECTED,
      style: (0, _styleFn.crStyle2)(_CaptionRow.S_CAPTION, (0, _isTypeFn.isFn)(onMore) && SL_CAPTION),
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: _CaptionRow.S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = exports.default = ContainerCaption;
//# sourceMappingURL=ContainerCaption.js.map