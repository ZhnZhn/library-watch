"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _styleFn = require("../styleFn");
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("react/jsx-runtime");
const CL_EL_BG = (0, _styleFn.crCnElBg)();
/*
, S_ROOT = {
  position: 'relative',
  color: 'silver',
  stroke: 'silver',
  padding: 5,
  textAlign: 'center',
  fontSize: 18
}
, S_SVG = {
  position: 'absolute',
  top: 6,
  right: 0
};
*/

const DialogCaption = ({
  caption,
  style,
  onClose,
  children
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: CL_EL_BG,
  style: {
    ..._Dialog.S_CAPTION_DIV,
    ...style
  },
  children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _styleFn.CL_NOT_SELECTED,
    children: caption
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
    style: _Dialog.S_SVG_CLOSE,
    onClose: onClose
  })]
});
var _default = exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map