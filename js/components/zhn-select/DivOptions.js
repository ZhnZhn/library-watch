"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _OptionsFooter = _interopRequireDefault(require("./OptionsFooter"));
var _jsxRuntime = require("react/jsx-runtime");
const S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
const DivOptions = _ref => {
  let {
    refOptionsElement,
    refIndexElement,
    optionsStyle,
    width,
    isShowOption,
    indexActiveOption,
    nFiltered,
    nAll,
    onStepUp,
    onStepDown,
    onClear,
    children
  } = _ref;
  const _widthStyle = (0, _crStyleWidth.default)(width, isShowOption ? S_BLOCK : S_NONE);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_OPTIONS,
    style: _widthStyle,
    "data-scrollable": true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: refOptionsElement,
      className: _CL.CL_OPTIONS_DIV,
      style: {
        ...optionsStyle,
        ..._widthStyle
      },
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsFooter.default, {
      refIndexElement: refIndexElement,
      indexActiveOption: indexActiveOption,
      nAll: nAll,
      nFiltered: nFiltered,
      onStepUp: onStepUp,
      onStepDown: onStepDown,
      onClear: onClear
    })]
  });
};
var _default = exports.default = DivOptions;
//# sourceMappingURL=DivOptions.js.map