'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crCaption = function _crCaption(caption) {
  return caption && caption.indexOf(':') === -1 ? caption + ':' : '';
};

var Caption = function Caption(_ref) {
  var is = _ref.is,
      style = _ref.style,
      caption = _ref.caption;

  if (!is) {
    return null;
  }
  return _react2.default.createElement(
    'span',
    { style: style },
    _crCaption(caption)
  );
};

exports.default = Caption;
//# sourceMappingURL=Caption.js.map