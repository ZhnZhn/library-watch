'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ROOT: 'item-caption',
  BT_CLOSE: 'item-caption__bt-close'
};

var ItemCaption = function ItemCaption(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: CL.ROOT },
    children,
    _react2.default.createElement(_SvgClose2.default, {
      className: CL.BT_CLOSE,
      onClose: onClose
    })
  );
};

exports.default = ItemCaption;
//# sourceMappingURL=ItemCaption.js.map