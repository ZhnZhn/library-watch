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

var CLASS_NOT_SELECTED = "not-selected";

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
        className: CLASS_NOT_SELECTED,
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

process.env.NODE_ENV !== "production" ? CaptionRow.propTypes = {
  caption: _react.PropTypes.string,
  styleRoot: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  onClose: _react.PropTypes.func
} : void 0;
CaptionRow.defaultProps = {
  caption: '',
  onClose: function onClose() {}
};

exports.default = CaptionRow;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\CaptionRow.js.map