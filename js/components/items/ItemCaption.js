"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_ITEM_CAPTION = 'item-caption',
  CL_BT_CLOSE = `${CL_ITEM_CAPTION}__bt-close`;
const ItemCaption = _ref => {
  let {
    style,
    children,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_ITEM_CAPTION,
    style: style,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      className: CL_BT_CLOSE,
      onClose: onClose
    })]
  });
};
var _default = exports.default = ItemCaption;
//# sourceMappingURL=ItemCaption.js.map