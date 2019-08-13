'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionRow = require('./CaptionRow.Style');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types';

var CaptionRow = function CaptionRow(_ref) {
  var _ref$caption = _ref.caption,
      caption = _ref$caption === undefined ? '' : _ref$caption,
      children = _ref.children,
      styleRoot = _ref.styleRoot,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: _CaptionRow2.default.CL_CAPTION, style: styleRoot },
    _react2.default.createElement(
      'span',
      {
        className: _CaptionRow2.default.CL_NOT_SELECTED,
        style: _CaptionRow2.default.SPAN
      },
      caption
    ),
    children,
    _react2.default.createElement(_SvgClose2.default, {
      style: _CaptionRow2.default.SVG_CLOSE,
      onClose: onClose
    })
  );
};
/*
CaptionRow.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
}
*/

exports.default = CaptionRow;
//# sourceMappingURL=CaptionRow.js.map