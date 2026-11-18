"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _BtSvgX = _interopRequireDefault(require("../zhn/BtSvgX"));
var _styleFn = require("../styleFn");
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("react/jsx-runtime");
const CL_EL_BG = (0, _styleFn.crCnElBg)();
const DialogCaption = props => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  className: CL_EL_BG,
  style: {
    ..._Dialog.S_CAPTION_DIV,
    ...props.style
  },
  children: [props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: _styleFn.CL_NOT_SELECTED,
    children: props.caption
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtSvgX.default, {
    ariaLabel: "Close dialog",
    style: _Dialog.S_SVG_CLOSE,
    onClose: props.onClose
  })]
});
var _default = exports.default = DialogCaption;
//# sourceMappingURL=DialogCaption.js.map