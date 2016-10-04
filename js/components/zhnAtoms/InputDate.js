'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '30px',
    paddingLeft: '10px',
    color: 'green',
    width: '100%',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  inputHr: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '230px'
  },
  errMsg: {
    color: '#F44336',
    paddingLeft: '10px',
    paddingBottom: '5px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
};

var InputDate = _react2.default.createClass({
  displayName: 'InputDate',
  getInitialState: function getInitialState() {
    var initValue = this.props.initValue || '';

    return {
      value: initValue,
      errorInput: null,
      isValid: true
    };
  },
  setValue: function setValue(value) {
    if (!this.props.onTest(value)) {
      this.setState({
        value: value,
        isValid: false
      });
    } else {
      this.setState({
        value: value,
        isValid: true,
        errorInput: null
      });
    }
  },
  _handlerChangeValue: function _handlerChangeValue(event) {
    this.setValue(event.target.value);
  },
  _handlerBlurValue: function _handlerBlurValue() {
    if (!this.props.onTest(this.state.value)) {
      this.setState({
        isValid: false,
        errorInput: this.props.errorMsg
      });
    } else {
      this.setState({
        isValid: true,
        errorInput: null
      });
    }
  },
  render: function render() {
    var _state = this.state;
    var value = _state.value;
    var isValid = _state.isValid;
    var errorInput = _state.errorInput;
    var styleHr = isValid ? { borderColor: '#1B75BB' } : { borderColor: '#F44336' };

    return _react2.default.createElement(
      'div',
      { style: styles.rootDiv },
      _react2.default.createElement('input', {
        ref: 'inputDate',
        type: 'text',
        style: styles.inputText,
        translate: false,
        placeholder: 'YYYY-MM-DD',
        value: value,
        onChange: this._handlerChangeValue,
        onBlur: this._handlerBlurValue
      }),
      _react2.default.createElement('hr', { style: Object.assign({}, styles.inputHr, styleHr) }),
      _react2.default.createElement(
        'div',
        { style: styles.errMsg },
        errorInput
      )
    );
  },
  getValue: function getValue() {
    return this.state.value;
  },
  isValid: function isValid() {
    return this.state.isValid;
  },
  focusInput: function focusInput() {
    this.refs.inputDate.focus();
  }
});

exports.default = InputDate;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\InputDate.js.map