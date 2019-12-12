"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var CL = {
  ROOT: 'item-caption',
  BT_CLOSE: 'item-caption__bt-close'
};

var ItemCaption = function ItemCaption(_ref) {
  var style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;
  return _react["default"].createElement("div", {
    className: CL.ROOT,
    style: style
  }, children, _react["default"].createElement(_SvgClose["default"], {
    className: CL.BT_CLOSE,
    onClose: onClose
  }));
};

var _default = ItemCaption;
exports["default"] = _default;
//# sourceMappingURL=ItemCaption.js.map