'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var InputText = function (_Component) {
  _inherits(InputText, _Component);

  function InputText(props) {
    _classCallCheck(this, InputText);

    var _this = _possibleConstructorReturn(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this));

    _this._handlerInputChange = function (event) {
      _this.setState({ value: event.target.value });
    };

    _this._handlerInputKeyDown = function (event) {
      if (event.keyCode === 27) {
        _this.setState({ value: '' });
      }
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  _createClass(InputText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props && typeof nextProps.initValue !== "undefined") {
        this.setState({ value: nextProps.initValue });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? '' : _props$placeholder,
          value = this.state.value;

      return _react2.default.createElement('input', {
        type: 'text',
        autoCorrect: 'off',
        autoCapitalize: 'off',
        spellCheck: false,
        style: Object.assign({}, styles.inputText, style),
        value: value,
        placeholder: placeholder,
        onChange: this._handlerInputChange,
        onKeyDown: this._handlerInputKeyDown
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value.trim();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return InputText;
}(_react.Component);

InputText.defaultProps = {
  initValue: ''
};
process.env.NODE_ENV !== "production" ? InputText.propTypes = {
  initValue: _react.PropTypes.string,
  style: _react.PropTypes.object
} : void 0;
exports.default = InputText;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\InputText.js.map