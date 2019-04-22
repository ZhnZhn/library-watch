'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhn-atoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "not-selected";

var S = {
  ROOT: {
    color: 'silver',
    backgroundColor: '#232f3b',
    padding: 5,
    textAlign: 'center',
    fontSize: 18
  },
  SVG: {
    position: 'absolute',
    top: 6,
    right: 0
  }
};

var DialogCaption = function DialogCaption(_ref) {
  var caption = _ref.caption,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    _react2.default.createElement(
      'span',
      { className: CL },
      caption
    ),
    _react2.default.createElement(_SvgClose2.default, {
      style: S.SVG,
      onClose: onClose
    })
  );
};
/*
DialogCaption.propTypes = {
  caption: PropTypes.string,
  onClose: PropTypes.func
}
*/

exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map