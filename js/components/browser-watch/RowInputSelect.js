'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhn-select/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

var _crRowCaption = require('./crRowCaption');

var _crRowCaption2 = _interopRequireDefault(_crRowCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
//import PropTypes from 'prop-types'

var S = {
  CAPTION: {
    width: '120px'
  }
};

var RowInputSelect = function RowInputSelect(_ref) {
  var caption = _ref.caption,
      options = _ref.options,
      isUpdateOptions = _ref.isUpdateOptions,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(
    'div',
    { style: styles.rowDiv },
    _react2.default.createElement(
      'span',
      { style: (0, _extends3.default)({}, styles.labelSpan, S.CAPTION) },
      (0, _crRowCaption2.default)(caption)
    ),
    _react2.default.createElement(_InputSelect2.default, {
      width: '250',
      options: options,
      isUpdateOptions: isUpdateOptions,
      onSelect: onSelect
    })
  );
};

/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  options : PropTypes.array,
  isUpdateOptions : PropTypes.bool,
  onSelect : PropTypes.func
}
*/

exports.default = RowInputSelect;
//# sourceMappingURL=RowInputSelect.js.map