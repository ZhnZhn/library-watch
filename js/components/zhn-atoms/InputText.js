"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _has = _interopRequireDefault(require("../has"));
var _jsxRuntime = require("react/jsx-runtime");
var HAS_TOUCH = _has["default"].HAS_TOUCH,
  CL_FIELD = 'm-field',
  CL_INPUT = CL_FIELD + "__input",
  CL_BT_CLEAR = CL_FIELD + "__bt-clear";
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT_CLEAR,
    tabIndex: "-1",
    onClick: onClick,
    children: isValue ? 'x' : ''
  });
};
var FN_NOOP = function FN_NOOP() {};
var InputText = (0, _uiApi.forwardRef)(function (_ref4, ref) {
  var style = _ref4.style,
    initValue = _ref4.initValue,
    placeholder = _ref4.placeholder,
    _ref4$maxLength = _ref4.maxLength,
    maxLength = _ref4$maxLength === void 0 ? 50 : _ref4$maxLength,
    _ref4$onEnter = _ref4.onEnter,
    onEnter = _ref4$onEnter === void 0 ? FN_NOOP : _ref4$onEnter;
  var _refInput = (0, _uiApi.useRef)(),
    _useState = (0, _uiApi.useState)(function () {
      return initValue || '';
    }),
    value = _useState[0],
    _setValue = _useState[1],
    _hChange = (0, _uiApi.useCallback)(function (event) {
      _setValue(event.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(function (event) {
      if (_isKeyClean(event)) {
        _setValue('');
      } else if (_isKeyEnter(event)) {
        onEnter(event.target.value);
      }
    }, [onEnter]),
    _hClean = (0, _uiApi.useCallback)(function () {
      _setValue('');
      (0, _uiApi.focusRefElement)(_refInput);
    }, []);
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValue: function getValue() {
        var _inputEl = (0, _uiApi.getRefValue)(_refInput);
        return _inputEl ? _inputEl.value.trim() : void 0;
      },
      setValue: function setValue(value) {
        return _setValue(value);
      },
      focus: function focus() {
        (0, _uiApi.focusRefElement)(_refInput);
      }
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL_FIELD,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: _refInput,
      type: "text",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      className: CL_INPUT,
      style: style,
      value: value,
      placeholder: placeholder,
      maxLength: maxLength,
      onChange: _hChange,
      onKeyDown: _hKeyDown
    }), HAS_TOUCH && /*#__PURE__*/(0, _jsxRuntime.jsx)(BtClear, {
      isValue: Boolean(value),
      onClick: _hClean
    })]
  });
});
var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map