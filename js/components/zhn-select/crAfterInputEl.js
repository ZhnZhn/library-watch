"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle2"));
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_ARROW_SHOW = {
  borderColor: '#1b75bb transparent transparent'
};
const crAfterInputEl = (props, state, refArrowCell, hToggleOptions) => {
  const {
      isLoading,
      isLoadingFailed,
      placeholder,
      optionName = '',
      onLoadOption
    } = props,
    {
      isShowOption,
      optionNames
    } = state;
  return !isLoading && !isLoadingFailed ? [placeholder || "Select " + optionName + "...", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell.default, {
    refEl: refArrowCell,
    arrowStyle: isShowOption ? S_ARROW_SHOW : void 0,
    onClick: hToggleOptions
  })] : isLoading ? ["Loading " + optionNames + "...", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _CL.CL_SPINNER,
    "data-loader": "circle"
  })] : isLoadingFailed ? ["Loading " + optionNames + " Failed", /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
    className: _CL.CL_SPINNER_FAILED,
    "data-loader": "circle-failed",
    onClick: onLoadOption
  })] : [];
};
var _default = exports.default = crAfterInputEl;
//# sourceMappingURL=crAfterInputEl.js.map