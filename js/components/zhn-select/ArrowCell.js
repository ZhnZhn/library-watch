"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_SVG_OPEN = {
    color: "#1b75bb"
  },
  S_SVG_CLOSE = {
    color: "#858585"
  };
const ArrowCell = _ref => {
  let {
    isShowOption,
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: _CL.CL_BT_ARROW,
    type: "button",
    tabIndex: "-1",
    "aria-label": "Toggle suggestions",
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      style: isShowOption ? S_SVG_OPEN : S_SVG_CLOSE,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M 3,6 L 10,12.5 M 10,12.5 L 17,6"
      })
    })
  });
};
var _default = exports.default = ArrowCell;
//# sourceMappingURL=ArrowCell.js.map