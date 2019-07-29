'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL = {
  FIELD: 'm-field',
  INPUT: 'm-field__input',
  BT_CLEAR: 'm-field__bt-clear'
};

var IS_TOUCH = document && 'ontouchstart' in document.documentElement;

var _isKeyClean = function _isKeyClean(_ref) {
  var keyCode = _ref.keyCode;
  return keyCode === 27 || keyCode === 46;
};
var _isKeyEnter = function _isKeyEnter(_ref2) {
  var keyCode = _ref2.keyCode;
  return keyCode === 13;
};

var BtClear = function BtClear(_ref3) {
  var isValue = _ref3.isValue,
      onClick = _ref3.onClick;
  return _react2.default.createElement(
    'button',
    {
      'class': CL.BT_CLEAR,
      tabIndex: '-1',
      onClick: onClick
    },
    isValue ? 'x' : ''
  );
};

var InputText = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputText, _Component);

  function InputText(props) {
    (0, _classCallCheck3.default)(this, InputText);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputText.__proto__ || Object.getPrototypeOf(InputText)).call(this));

    _this._hChange = function (event) {
      _this.setState({ value: event.target.value });
    };

    _this._hKeyDown = function (event) {
      if (_isKeyClean(event)) {
        _this.setState({ value: '' });
      } else if (_isKeyEnter(event)) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._hClean = function () {
      _this.setState({ value: '' });
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }
  /*
  static propTypes = {
    isUpdateInitValue: PropTypes.bool,
    initValue: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object
    onEnter: PropTypes.func
  }
  */


  (0, _createClass3.default)(InputText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          placeholder = _props.placeholder,
          maxLength = _props.maxLength,
          value = this.state.value;

      return _react2.default.createElement(
        'div',
        { 'class': CL.FIELD },
        _react2.default.createElement('input', {
          type: 'text',
          autoCorrect: 'off',
          autoCapitalize: 'off',
          spellCheck: false,
          'class': CL.INPUT,
          style: style,
          value: value,
          placeholder: placeholder,
          maxLength: maxLength,
          onChange: this._hChange,
          onKeyDown: this._hKeyDown
        }),
        IS_TOUCH && _react2.default.createElement(BtClear, {
          isValue: Boolean(value),
          onClick: this._hClean
        })
      );
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
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref4) {
      var isUpdateInitValue = _ref4.isUpdateInitValue,
          initValue = _ref4.initValue;

      return isUpdateInitValue && typeof initValue === "string" ? { value: initValue } : void 0;
    }
  }]);
  return InputText;
}(_react.Component), _class.defaultProps = {
  isUpdateInitValue: false,
  initValue: '',
  placeholder: '',
  maxLength: 50,
  onEnter: function onEnter() {}
}, _temp);
exports.default = InputText;
//# sourceMappingURL=InputText.js.map