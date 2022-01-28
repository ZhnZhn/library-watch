"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var _CaptionRow = require("./CaptionRow.Style");

var _jsxRuntime = require("react/jsx-runtime");

var SL_CAPTION = {
  paddingLeft: 0
},
    _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var ContainerCaption = function ContainerCaption(_ref) {
  var style = _ref.style,
      moreStyle = _ref.moreStyle,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      onMore = _ref.onMore,
      onClose = _ref.onClose,
      children = _ref.children;

  var _captionStyle = _isFn(onMore) ? (0, _extends2["default"])({}, _CaptionRow.S_CAPTION, SL_CAPTION) : _CaptionRow.S_CAPTION;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow.CL_CAPTION,
    style: style,
    children: [_isFn(onMore) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
      style: moreStyle,
      onClick: onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow.CL_NOT_SELECTED,
      style: _captionStyle,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: _CaptionRow.S_SVG_CLOSE,
      onClose: onClose
    })]
  });
};

var _default = ContainerCaption;
exports["default"] = _default;
//# sourceMappingURL=ContainerCaption.js.map