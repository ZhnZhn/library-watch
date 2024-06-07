"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("react/jsx-runtime");
const S_ROOT = {
    position: 'relative',
    display: 'inline-block',
    width: 250,
    backgroundColor: '#e1e1cb'
  },
  S_INPUT = {
    color: 'green',
    width: '100%',
    height: 30,
    paddingLeft: 10,
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'transparent none repeat scroll 0 0',
    border: 'medium none',
    outline: 'medium none'
  },
  S_HR = {
    width: 230,
    margin: '0 0 5px 10px',
    borderWidth: 'medium medium 1px',
    borderStyle: 'none none solid',
    borderColor: 'red',
    borderImage: 'none'
  },
  COLOR_VALID = '#1b75bb',
  COLOR_NOT_VALID = '#f44336',
  S_HR_VALID = {
    borderColor: COLOR_VALID
  },
  S_HR_NOT_VALID = {
    borderColor: COLOR_NOT_VALID
  },
  S_ERR_MSG = {
    color: COLOR_NOT_VALID,
    padding: '0 0 5px 10px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  FN_NOOP = () => {};
const InputDate = _ref => {
  let {
    refEl,
    initialValue,
    errorMsg,
    onTest = FN_NOOP
  } = _ref;
  const _refInput = (0, _uiApi.useRef)(),
    [state, setState] = (0, _uiApi.useState)({
      value: initialValue || '',
      isValid: true,
      errMsg: null
    }),
    {
      value,
      isValid,
      errMsg
    } = state,
    _hChangeValue = event => {
      const {
        value
      } = event.target;
      setState(prevState => {
        const [isValid, errMsg] = onTest(value) ? [true, null] : [false, prevState.errMsg];
        return {
          value,
          isValid,
          errMsg
        };
      });
    },
    _hBlurValue = () => {
      const [isValid, errMsg] = onTest(value) ? [true, null] : [false, errorMsg];
      setState({
        value,
        isValid,
        errMsg
      });
    },
    _hrStyle = isValid ? S_HR_VALID : S_HR_NOT_VALID;
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValue: () => value,
    isValid: () => isValid,
    focus: () => (0, _uiApi.focusRefInput)(_refInput)
  }), [isValid, value]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: _refInput,
      type: "text",
      name: "date"
      //autoComplete="new-date"
      ,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      style: S_INPUT,
      placeholder: "YYYY-MM-DD",
      value: value,
      onChange: _hChangeValue,
      onBlur: _hBlurValue
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
      style: {
        ...S_HR,
        ..._hrStyle
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_ERR_MSG,
      children: errMsg
    })]
  });
};
var _default = exports.default = InputDate;
//# sourceMappingURL=InputDate.js.map