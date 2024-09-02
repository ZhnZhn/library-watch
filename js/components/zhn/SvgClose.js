"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _Svg = _interopRequireDefault(require("./svg/Svg100"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_SVG_CLOSE = "svg-close",
  S_SVG = {
    padding: 3,
    stroke: 'inherit'
  };
const SvgClose = _ref => {
  let {
    className,
    style,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: "-1",
    className: (0, _styleFn.crCn)(CL_SVG_CLOSE, className),
    style: style,
    onClick: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
      style: S_SVG,
      strokeWidth: "2",
      strokeLinecap: "round",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 0,0 L 12,12"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 12,0 L 0,12"
      })]
    })
  });
};
var _default = exports.default = SvgClose;
//# sourceMappingURL=SvgClose.js.map