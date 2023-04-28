"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _OptionsFooter = _interopRequireDefault(require("./OptionsFooter"));
var _jsxRuntime = require("react/jsx-runtime");
var S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
var DivOptions = function DivOptions(_ref) {
  var refOptionsElement = _ref.refOptionsElement,
    refIndexElement = _ref.refIndexElement,
    optionsStyle = _ref.optionsStyle,
    width = _ref.width,
    isShowOption = _ref.isShowOption,
    indexActiveOption = _ref.indexActiveOption,
    nFiltered = _ref.nFiltered,
    nAll = _ref.nAll,
    onStepUp = _ref.onStepUp,
    onStepDown = _ref.onStepDown,
    onClear = _ref.onClear,
    children = _ref.children;
  var _widthStyle = (0, _crStyleWidth["default"])(width, isShowOption ? S_BLOCK : S_NONE);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_OPTIONS,
    style: _widthStyle,
    "data-scrollable": true,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: refOptionsElement,
      className: _CL.CL_OPTIONS_DIV,
      style: (0, _extends2["default"])({}, optionsStyle, _widthStyle),
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsFooter["default"], {
      ref: refIndexElement,
      indexActiveOption: indexActiveOption,
      nAll: nAll,
      nFiltered: nFiltered,
      onStepUp: onStepUp,
      onStepDown: onStepDown,
      onClear: onClear
    })]
  });
};
var _default = DivOptions;
exports["default"] = _default;
//# sourceMappingURL=DivOptions.js.map