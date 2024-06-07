"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _CL = require("../styles/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_ROOT = {
    color: 'silver',
    stroke: 'silver',
    backgroundColor: '#232f3b',
    padding: 5,
    textAlign: 'center',
    fontSize: 18
  },
  S_SVG = {
    position: 'absolute',
    top: 6,
    right: 0
  };
const DialogCaption = _ref => {
  let {
    caption,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_NOT_SELECTED,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
      style: S_SVG,
      onClose: onClose
    })]
  });
};
var _default = exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map