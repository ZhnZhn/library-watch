"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

//import PropTypes from "prop-types";
var STYLE = {
  ROOT: {
    position: 'relative',
    display: 'inline-block',
    backgroundColor: '#E1E1CB',
    width: '250px'
  },
  INPUT: {
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
  HR: {
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none',
    margin: 0,
    marginLeft: '10px',
    marginBottom: '5px',
    width: '230px'
  },
  HR_VALID: {
    borderColor: '#1B75BB'
  },
  HR_NOT_VALID: {
    borderColor: '#F44336'
  },
  ERR_MSG: {
    color: '#F44336',
    paddingLeft: '10px',
    paddingBottom: '5px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
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
        _hrStyle = isValid ? STYLE.HR_VALID : STYLE.HR_NOT_VALID;

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: STYLE.ROOT
    }, /*#__PURE__*/_react["default"].createElement("input", {
      ref: function ref(c) {
        return _this2.inputComp = c;
      },
      type: "text",
      name: "date",
      autoComplete: "new-date",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      style: STYLE.INPUT,
      placeholder: "YYYY-MM-DD",
      value: value,
      onChange: this._handleChangeValue,
      onBlur: this._handleBlurValue
    }), /*#__PURE__*/_react["default"].createElement("hr", {
      style: (0, _extends2["default"])({}, STYLE.HR, _hrStyle)
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: STYLE.ERR_MSG
    }, errorInput));
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