"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  width: 250,
  backgroundColor: '#e1e1cb'
},
    S_INPUT = {
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
  color: 'green',
  width: '100%',
  height: 30,
  paddingLeft: 10,
  fontSize: '16px',
  fontWeight: 'bold'
},
    S_HR = {
  borderWidth: 'medium medium 1px',
  borderStyle: 'none none solid',
  borderColor: 'red',
  borderImage: 'none',
  width: 230,
  margin: '0 0 5px 10px'
},
    S_HR_VALID = {
  borderColor: '#1b75bb'
},
    S_HR_NOT_VALID = {
  borderColor: '#f44336'
},
    S_ERR_MSG = {
  color: '#f44336',
  padding: '0 0 5px 10px',
  fontSize: '12px',
  fontWeight: 'bold'
};

var InputDate = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputDate, _Component);

  /*
  static propTypes = {
    initValue: PropTypes.string,
    errorMsg: PropTypes.string,
    onTest: PropTypes.func
  }
  */
  function InputDate(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this.setValue = function (value) {
      if (!_this.props.onTest(value)) {
        _this.setState({
          value: value,
          isValid: false
        });
      } else {
        _this.setState({
          value: value,
          isValid: true,
          errorInput: null
        });
      }
    };

    _this._handleChangeValue = function (event) {
      _this.setValue(event.target.value);
    };

    _this._handleBlurValue = function () {
      if (!_this.props.onTest(_this.state.value)) {
        _this.setState({
          isValid: false,
          errorInput: _this.props.errorMsg
        });
      } else {
        _this.setState({
          isValid: true,
          errorInput: null
        });
      }
    };

    _this.state = {
      value: props.initValue,
      errorInput: null,
      isValid: true
    };
    return _this;
  }

  var _proto = InputDate.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        value = _this$state.value,
        isValid = _this$state.isValid,
        errorInput = _this$state.errorInput,
        _hrStyle = isValid ? S_HR_VALID : S_HR_NOT_VALID;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: function ref(c) {
          return _this2.inputComp = c;
        },
        type: "text",
        name: "date",
        autoComplete: "new-date",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: false,
        style: S_INPUT,
        placeholder: "YYYY-MM-DD",
        value: value,
        onChange: this._handleChangeValue,
        onBlur: this._handleBlurValue
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        style: (0, _extends2["default"])({}, S_HR, _hrStyle)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S_ERR_MSG,
        children: errorInput
      })]
    });
  };

  _proto.getValue = function getValue() {
    return this.state.value;
  };

  _proto.isValid = function isValid() {
    return this.state.isValid;
  };

  _proto.focusInput = function focusInput() {
    this.inputComp.focus();
  };

  return InputDate;
}(_react.Component);

InputDate.defaultProps = {
  initValue: '',
  onTest: function onTest() {}
};
var _default = InputDate;
exports["default"] = _default;
//# sourceMappingURL=InputDate.js.map