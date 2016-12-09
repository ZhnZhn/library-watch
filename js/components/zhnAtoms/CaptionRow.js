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

var CLASS_NOT_SELECTED = "not-selected";

var CaptionRow = function CaptionRow(_ref) {
   var caption = _ref.caption,
       children = _ref.children,
       styleRoot = _ref.styleRoot,
       onClose = _ref.onClose;
   return _react2.default.createElement(
      'div',
      { style: Object.assign({}, _CaptionRow2.default.captionDiv, styleRoot) },
      _react2.default.createElement(
         'span',
         {
            className: CLASS_NOT_SELECTED,
            style: _CaptionRow2.default.captionSpan
         },
         caption
      ),
      children,
      _react2.default.createElement(_SvgClose2.default, { onClose: onClose })
   );
};

exports.default = CaptionRow;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\CaptionRow.js.map