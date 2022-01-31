"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_ROOT = 'item-caption',
    CL_BT_CLOSE = 'item-caption__bt-close';

var ItemCaption = function ItemCaption(_ref) {
  var style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_ROOT,
    style: style,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      className: CL_BT_CLOSE,
      onClose: onClose
    })]
  });
};

var _default = ItemCaption;
exports["default"] = _default;
//# sourceMappingURL=ItemCaption.js.map