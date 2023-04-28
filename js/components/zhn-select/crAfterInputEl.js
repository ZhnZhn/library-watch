"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle2"));
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
var S_ARROW_SHOW = {
  borderColor: '#1b75bb transparent transparent'
};
var crAfterInputEl = function crAfterInputEl(props, state, refArrowCell, hToggleOptions) {
  var isLoading = props.isLoading,
    isLoadingFailed = props.isLoadingFailed,
    placeholder = props.placeholder,
    _props$optionName = props.optionName,
    optionName = _props$optionName === void 0 ? '' : _props$optionName,
    onLoadOption = props.onLoadOption,
    isShowOption = state.isShowOption,
    optionNames = state.optionNames;
  return !isLoading && !isLoadingFailed ? [placeholder || "Select " + optionName + "...", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {
    ref: refArrowCell,
    arrowStyle: isShowOption ? S_ARROW_SHOW : void 0,
    onClick: hToggleOptions
  })] : isLoading ? ["Loading " + optionNames + "...", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _CL.CL_SPINNER,
    "data-loader": "circle"
  })] : isLoadingFailed ? ["Loading " + optionNames + " Failed", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
    className: _CL.CL_SPINNER_FAILED,
    "data-loader": "circle-failed",
    onClick: onLoadOption
  })] : [];
};
var _default = crAfterInputEl;
exports["default"] = _default;
//# sourceMappingURL=crAfterInputEl.js.map