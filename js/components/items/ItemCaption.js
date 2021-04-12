"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  ROOT: 'item-caption',
  BT_CLOSE: 'item-caption__bt-close'
};

var ItemCaption = function ItemCaption(_ref) {
  var style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL.ROOT,
    style: style,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      className: CL.BT_CLOSE,
      onClose: onClose
    })]
  });
};

var _default = ItemCaption;
exports["default"] = _default;
//# sourceMappingURL=ItemCaption.js.map