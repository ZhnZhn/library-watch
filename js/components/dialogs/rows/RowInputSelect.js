'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../../zhn-select/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _DialogStyles = require('../../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

var _Caption = require('./Caption');

var _Caption2 = _interopRequireDefault(_Caption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  CAPTION: {
    width: '120px'
  }
};
//import PropTypes from "prop-types";

var RowInputSelect = function RowInputSelect(_ref) {
  var isShowLabel = _ref.isShowLabel,
      caption = _ref.caption,
      placeholder = _ref.placeholder,
      options = _ref.options,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(
    'div',
    { style: _DialogStyles2.default.rowDiv },
    _react2.default.createElement(_Caption2.default, {
      is: isShowLabel,
      style: (0, _extends3.default)({}, _DialogStyles2.default.labelSpan, S.CAPTION),
      caption: caption
    }),
    _react2.default.createElement(_InputSelect2.default, {
      width: '250',
      placeholder: placeholder,
      options: options,
      onSelect: onSelect
    })
  );
};

RowInputSelect.defaultProps = {
  isShowLabel: true
};

/*
RowInputSelect.propTypes = {
  caption : PropTypes.string,
  placeholder: PropTypes.string,
  options : PropTypes.array,
  onSelect : PropTypes.func
}
*/

exports.default = RowInputSelect;
//# sourceMappingURL=RowInputSelect.js.map