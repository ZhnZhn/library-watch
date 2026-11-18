"use strict";

exports.__esModule = true;
exports.default = void 0;
var _BtSvgX = require("../zhn/BtSvgX");
var _jsxRuntime = require("react/jsx-runtime");
const CL_ITEM_CAPTION = 'item-caption',
  CL_BT_CLOSE = `${CL_ITEM_CAPTION}__bt-close`;
const ItemCaption = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: CL_ITEM_CAPTION,
  style: props.style,
  children: [props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtSvgX.BtSvgX, {
    ariaLabel: "Remove item",
    className: CL_BT_CLOSE,
    onClose: props.onClose
  })]
});
var _default = exports.default = ItemCaption;
//# sourceMappingURL=ItemCaption.js.map