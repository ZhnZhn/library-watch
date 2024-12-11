"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _jsxRuntime = require("react/jsx-runtime");
const CL_FIELD = 'm-field',
  CL_INPUT = `${CL_FIELD}__input`,
  CL_BT_CLEAR = `${CL_FIELD}__bt-clear`;
const _isKeyClean = _ref => {
  let {
    keyCode
  } = _ref;
  return keyCode === 27 || keyCode === 46;
};
const _isKeyEnter = _ref2 => {
  let {
    keyCode
  } = _ref2;
  return keyCode === 13;
};
const BtClear = _ref3 => {
  let {
    isValue,
    onClick
  } = _ref3;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BT_CLEAR,
    tabIndex: "-1",
    onClick: onClick,
    children: isValue ? 'x' : ''
  });
};
const FN_NOOP = () => {};
const InputText = _ref4 => {
  let {
    refEl,
    style,
    initValue,
    placeholder,
    maxLength = 50,
    onEnter = FN_NOOP
  } = _ref4;
  const _refInput = (0, _uiApi.useRef)(),
    [value, setValue] = (0, _uiApi.useState)(() => initValue || ''),
    _hChange = (0, _uiApi.useCallback)(event => {
      setValue(event.target.value);
    }, []),
    _hKeyDown = (0, _uiApi.useCallback)(event => {
      if (_isKeyClean(event)) {
        setValue('');
      } else if (_isKeyEnter(event)) {
        onEnter(event.target.value);
      }
    }, [onEnter]),
    _hClean = (0, _uiApi.useCallback)(() => {
      setValue('');
      (0, _uiApi.focusRefElement)(_refInput);
    }, []);
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => {
      const _inputEl = (0, _uiApi.getRefValue)(_refInput);
      return _inputEl ? _inputEl.value.trim() : void 0;
    },
    setValue: value => setValue(value),
    focus: () => {
      (0, _uiApi.focusRefElement)(_refInput);
    }
  }), []);
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
    }), _has.HAS_TOUCH_EVENTS && /*#__PURE__*/(0, _jsxRuntime.jsx)(BtClear, {
      isValue: Boolean(value),
      onClick: _hClean
    })]
  });
};
var _default = exports.default = InputText;
//# sourceMappingURL=InputText.js.map