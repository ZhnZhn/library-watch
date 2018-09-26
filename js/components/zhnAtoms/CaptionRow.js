'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionRow = require('./CaptionRow.Style');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _SvgClose = require('./SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types';

var CL = "not-selected";

var CaptionRow = function CaptionRow(_ref) {
  var caption = _ref.caption,
      children = _ref.children,
      styleRoot = _ref.styleRoot,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, _CaptionRow2.default.ROOT, styleRoot) },
    _react2.default.createElement(
      'span',
      {
        className: CL,
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
CaptionRow.defaultProps = {
  caption: ''
};

exports.default = CaptionRow;
//# sourceMappingURL=CaptionRow.js.map