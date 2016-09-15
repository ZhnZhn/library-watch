'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  inputText: {
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none',
    height: '26px',
    paddingLeft: '5px',
    color: 'green',
    width: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#E1E1CB',
    marginLeft: '5px',
    marginRight: '5px',
    display: 'inline'
  }
};

var InputText = _react2.default.createClass({
  displayName: 'InputText',
  propTypes: {
    initValue: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      initValue: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.initValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.initValue });
    }
  },
  _handlerInputChange: function _handlerInputChange(event) {
    this.setState({ value: event.target.value });
  },
  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var _props$placeholder = _props.placeholder;
    var placeholder = _props$placeholder === undefined ? '' : _props$placeholder;
    var value = this.state.value;

    return _react2.default.createElement('input', {
      type: 'text',
      style: Object.assign({}, styles.inputText, style),
      value: value,
      translate: false,
      placeholder: placeholder,
      onChange: this._handlerInputChange
    });
  },
  getValue: function getValue() {
    return this.state.value.trim();
  },
  setValue: function setValue(value) {
    this.setState({ value: value });
  }
});

exports.default = InputText;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\InputText.js.map