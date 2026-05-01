"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _SvgMore = _interopRequireDefault(require("./SvgMore"));
var _CaptionToken = _interopRequireDefault(require("./CaptionToken"));
var _SvgClose = _interopRequireDefault(require("./SvgClose"));
var _CaptionRow = require("./CaptionRow.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION_TOKEN = {
  paddingLeft: 0
};
const ContainerCaption = props => {
  const _isOnMore = (0, _isTypeFn.isFn)(props.onMore);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow.CL_CAPTION,
    style: props.style,
    children: [_isOnMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
      style: props.moreStyle,
      onClick: props.onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionToken.default, {
      style: _isOnMore ? S_CAPTION_TOKEN : void 0,
      caption: props.caption
    }), props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: _CaptionRow.S_SVG_CLOSE,
      onClose: props.onClose
    })]
  });
};
var _default = exports.default = ContainerCaption;
//# sourceMappingURL=ContainerCaption.js.map