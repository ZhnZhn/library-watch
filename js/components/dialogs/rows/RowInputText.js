"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _InputText = _interopRequireDefault(require("../../zhn-atoms/InputText"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROW_DIV: {
    margin: 5
  },
  LABEL_SPAN: {
    color: '#1b75bb',
    display: 'inline-block',
    width: 100,
    paddingRight: 5,
    textAlign: 'right',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  ROOT: {
    lineHeight: 2
  },
  CAPTION: {
    width: 120
  },
  INPUT_TEXT: {
    width: 250,
    height: 30,
    paddingLeft: 10,
    marginLeft: 0,
    marginRight: 0
  }
};

var RowInputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowInputText, _Component);

  function RowInputText() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refInput = function (c) {
      return _this.inputText = c;
    };

    return _this;
  }

  var _proto = RowInputText.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isShowLabel = _this$props.isShowLabel,
        caption = _this$props.caption,
        placeholder = _this$props.placeholder,
        onEnter = _this$props.onEnter,
        _placeholder = isShowLabel ? placeholder : placeholder || caption;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: (0, _extends2["default"])({}, S.ROW_DIV, S.ROOT),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
        is: isShowLabel,
        style: (0, _extends2["default"])({}, S.LABEL_SPAN, S.CAPTION),
        caption: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText["default"], {
        ref: this._refInput,
        style: S.INPUT_TEXT,
        placeholder: _placeholder,
        onEnter: onEnter
      })]
    });
  };

  _proto.getValue = function getValue() {
    return this.inputText.getValue().trim();
  };

  _proto.setValue = function setValue(value) {
    this.inputText.setValue(value);
  };

  return RowInputText;
}(_react.Component);

RowInputText.defaultProps = {
  isShowLabel: true,
  caption: ''
};
var _default = RowInputText;
exports["default"] = _default;
//# sourceMappingURL=RowInputText.js.map