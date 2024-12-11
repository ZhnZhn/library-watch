"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle2"));
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT_CIRCLE = {
  backgroundColor: '#949ab4'
};
const OptionsFooter = _ref => {
  let {
    refIndexElement,
    indexActiveOption,
    nFiltered,
    nAll,
    onStepDown,
    onStepUp,
    onClear
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: `${_CL.CL_FOOTER} ${_CL.CL_NOT_SELECTED}`,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: _CL.CL_FOOTER_INDEX,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        ref: refIndexElement,
        children: indexActiveOption
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [": ", nFiltered, ": ", nAll]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: _CL.CL_FOOTER_BTS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        className: _CL.CL_FOOTER_MARGIN,
        style: S_BT_CIRCLE,
        caption: "Dn",
        onClick: onStepDown
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        className: _CL.CL_FOOTER_MARGIN,
        style: S_BT_CIRCLE,
        caption: "Up",
        onClick: onStepUp
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        style: S_BT_CIRCLE,
        caption: "CL",
        onClick: onClear
      })]
    })]
  });
};
var _default = exports.default = OptionsFooter;
//# sourceMappingURL=OptionsFooter.js.map