'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputSelect = require('../zhnAtoms/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = _react2.default.PropTypes;

var styles = _DialogStyles2.default;
var Styles = {
  CAPTION: {
    width: '120px'
  }
};

var RowInputSelect = _react2.default.createClass({
  displayName: 'RowInputSelect',
  propTypes: {
    caption: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    onSelect: PropTypes.func
  },
  render: function render() {
    var _props = this.props,
        caption = _props.caption,
        placeholder = _props.placeholder,
        options = _props.options,
        onSelect = _props.onSelect;

    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, styles.rowDiv) },
      _react2.default.createElement(
        'span',
        { style: Object.assign({}, styles.labelSpan, Styles.CAPTION) },
        caption
      ),
      _react2.default.createElement(_InputSelect2.default, {
        width: '250',
        placeholder: placeholder,
        options: options,
        onSelect: onSelect
      })
    );
  }
});

exports.default = RowInputSelect;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\RowInputSelect.js.map