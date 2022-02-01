"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ButtonCircle = _interopRequireDefault(require("../zhn-atoms/ButtonCircle2"));

var _CL = _interopRequireDefault(require("./CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S_BT_CIRCLE = {
  backgroundColor: '#949ab4'
};
var OptionsFooter = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var indexActiveOption = _ref.indexActiveOption,
      nFiltered = _ref.nFiltered,
      nAll = _ref.nAll,
      onStepDown = _ref.onStepDown,
      onStepUp = _ref.onStepUp,
      onClear = _ref.onClear;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL["default"].FOOTER + " " + _CL["default"].NOT_SELECTED,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: _CL["default"].FOOTER_INDEX,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        ref: ref,
        children: indexActiveOption
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [": ", nFiltered, ": ", nAll]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: _CL["default"].FOOTER_BTS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
        className: _CL["default"].FOOTER_MARGIN,
        style: S_BT_CIRCLE,
        caption: "Dn",
        onClick: onStepDown
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
        className: _CL["default"].FOOTER_MARGIN,
        style: S_BT_CIRCLE,
        caption: "Up",
        onClick: onStepUp
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
        style: S_BT_CIRCLE,
        caption: "CL",
        onClick: onClear
      })]
    })]
  });
});
var _default = OptionsFooter;
exports["default"] = _default;
//# sourceMappingURL=OptionsFooter.js.map