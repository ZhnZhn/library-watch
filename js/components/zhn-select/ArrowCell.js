"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _Svg = require("../zhn/svg/Svg");
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_SVG_OPEN = (0, _styleFn.crColorStyle)(_CL.COLOR_OPTIONS_OPEN),
  S_SVG_CLOSE = (0, _styleFn.crColorStyle)(_CL.COLOR_OPTIONS_CLOSE);
const ArrowCell = ({
  isShowOption,
  onClick
}) => /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
  "aria-label": "Toggle suggestions",
  type: "button",
  className: _CL.CL_BT_ARROW,
  tabIndex: "-1",
  onClick: onClick,
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg.Svg, {
    w: "20",
    focusable: "false",
    style: isShowOption ? S_SVG_OPEN : S_SVG_CLOSE,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M 3,6 L 10,12.5 M 10,12.5 L 17,6"
    })
  })
});
var _default = exports.default = ArrowCell;
//# sourceMappingURL=ArrowCell.js.map