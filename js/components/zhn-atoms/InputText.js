"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("../has"));

//import PropTypes from "prop-types";
var CL = {
  FIELD: 'm-field',
  INPUT: 'm-field__input',
  BT_CLEAR: 'm-field__bt-clear'
};
var HAS_TOUCH = _has["default"].HAS_TOUCH;

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
  return _react["default"].createElement("button", {
    "class": CL.BT_CLEAR,
    tabIndex: "-1",
    onClick: onClick
  }, isValue ? 'x' : '');
};

var InputText =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputText, _Component);

  /*
  static propTypes = {
    isUpdateInitValue: PropTypes.bool,
    initValue: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object
    onEnter: PropTypes.func
  }
  */
  function InputText(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._hChange = function (event) {
      _this.setState({
        value: event.target.value
      });
    };

    _this._hKeyDown = function (event) {
      if (_isKeyClean(event)) {
        _this.setState({
          value: ''
        });
      } else if (_isKeyEnter(event)) {
        _this.props.onEnter(event.target.value);
      }
    };

    _this._hClean = function () {
      _this.setState({
        value: ''
      });

      _this.focus();
    };

    _this._refInput = function (element) {
      return _this._inputElement = element;
    };

    _this.state = {
      value: props.initValue
    };
    return _this;
  }

  InputText.getDerivedStateFromProps = function getDerivedStateFromProps(_ref4) {
    var isUpdateInitValue = _ref4.isUpdateInitValue,
        initValue = _ref4.initValue;
    return isUpdateInitValue && typeof initValue === "string" ? {
      value: initValue
    } : void 0;
  };

  var _proto = InputText.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        placeholder = _this$props.placeholder,
        maxLength = _this$props.maxLength,
        value = this.state.value;
    return _react["default"].createElement("div", {
      "class": CL.FIELD
    }, _react["default"].createElement("input", {
      ref: this._refInput,
      type: "text",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      "class": CL.INPUT,
      style: style,
      value: value,
      placeholder: placeholder,
      maxLength: maxLength,
      onChange: this._hChange,
      onKeyDown: this._hKeyDown
    }), HAS_TOUCH && _react["default"].createElement(BtClear, {
      isValue: Boolean(value),
      onClick: this._hClean
    }));
  };

  _proto.getValue = function getValue() {
    return this.state.value.trim();
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  _proto.focus = function focus() {
    if (this._inputElement) {
      this._inputElement.focus();
    }
  };

  return InputText;
}(_react.Component);

InputText.defaultProps = {
  isUpdateInitValue: false,
  initValue: '',
  placeholder: '',
  maxLength: 50,
  onEnter: function onEnter() {}
};
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map