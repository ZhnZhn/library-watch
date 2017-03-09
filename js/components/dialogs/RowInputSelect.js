'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhn-select/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
var STYLE = {
  CAPTION: {
    width: '120px'
  }
};

var RowInputSelect = function RowInputSelect(_ref) {
  var caption = _ref.caption,
      placeholder = _ref.placeholder,
      options = _ref.options,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(
    'div',
    { style: Object.assign({}, styles.rowDiv) },
    _react2.default.createElement(
      'span',
      { style: Object.assign({}, styles.labelSpan, STYLE.CAPTION) },
      caption
    ),
    _react2.default.createElement(_InputSelect2.default, {
      width: '250',
      placeholder: placeholder,
      options: options,
      onSelect: onSelect
    })
  );
};

process.env.NODE_ENV !== "production" ? RowInputSelect.propTypes = {
  caption: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  options: _react.PropTypes.array,
  onSelect: _react.PropTypes.func
} : void 0;

exports.default = RowInputSelect;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\RowInputSelect.js.map