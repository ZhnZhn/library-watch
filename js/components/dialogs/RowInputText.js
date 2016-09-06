'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../zhnAtoms/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = {
  ROW_DIV: {
    margin: '5px'
  },
  LABEL_SPAN: {
    color: '#1B75BB',
    display: 'inline-block',
    //verticalAlign: 'top',
    textAlign: 'right',
    width: '100px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  },

  ROOT: {
    lineHeight: 2
  },
  CAPTION: {
    width: '120px'
  },
  INPUT_TEXT: {
    width: '250px',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: '10px',
    height: '30px'
  }
};

var RowInputText = _react2.default.createClass({
  displayName: 'RowInputText',
  propTypes: {
    caption: _react2.default.PropTypes.string
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var caption = _props.caption;
    var placeholder = _props.placeholder;

    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, Styles.ROW_DIV, Styles.ROOT) },
      _react2.default.createElement(
        'span',
        { style: Object.assign({}, Styles.LABEL_SPAN, Styles.CAPTION) },
        caption
      ),
      _react2.default.createElement(_InputText2.default, {
        ref: function ref(c) {
          return _this.inputText = c;
        },
        style: Styles.INPUT_TEXT,
        placeholder: placeholder
      })
    );
  },
  getValue: function getValue() {
    return this.inputText.getValue().trim();
  },
  setValue: function setValue(value) {
    this.inputText.setValue(value);
  }
});

exports.default = RowInputText;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\dialogs\RowInputText.js.map