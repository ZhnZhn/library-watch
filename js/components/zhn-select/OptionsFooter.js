"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ButtonCircle = require("../zhn/ButtonCircle");
var _BtSvgX = require("../zhn/BtSvgX");
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT_CIRCLE = {
  backgroundColor: '#e1e1cb',
  height: '32px',
  lineHeight: 'unset',
  padding: '6px',
  stroke: _CL.COLOR_OPTIONS_OPEN
};
const OptionsFooter = ({
  refIndexElement,
  indexActiveOption,
  nFiltered,
  nAll,
  onClear
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: _CL.CL_FOOTER,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: _CL.CL_FOOTER_INDEX,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      ref: refIndexElement,
      children: indexActiveOption
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      children: [": ", nFiltered, ": ", nAll]
    })]
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _CL.CL_FOOTER_BTS,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.ButtonCircle2, {
      ariaLabel: "Clear input and close options",
      style: S_BT_CIRCLE,
      onClick: onClear,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtSvgX.SvgX, {})
    })
  })]
});
var _default = exports.default = OptionsFooter;
//# sourceMappingURL=OptionsFooter.js.map