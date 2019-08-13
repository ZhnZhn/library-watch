'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgMore = require('./SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _CaptionRow = require('./CaptionRow.Style');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
//import PropTypes from 'prop-types';

var ContainerCaption = function ContainerCaption(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      children = _ref.children,
      onMore = _ref.onMore,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { className: _CaptionRow2.default.CL_CAPTION, style: style },
    _isFn(onMore) && _react2.default.createElement(_SvgMore2.default, {
      onClick: onMore
    }),
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
ContainerCaption.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onMore: PropTypes.func,
  onClose: PropTypes.func
}
*/
ContainerCaption.defaultProps = {
  caption: ''
};

exports.default = ContainerCaption;
//# sourceMappingURL=ContainerCaption.js.map