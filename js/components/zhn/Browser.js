"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
var _ContainerStyles = require("../styles/ContainerStyles");
var _jsxRuntime = require("react/jsx-runtime");
const Browser = _ref => {
  let {
    isShow,
    style,
    onKeyDown,
    children
  } = _ref;
  const [_style, _className] = isShow ? [_CL.S_BLOCK, _CL.CL_SHOW_POPUP] : [_CL.S_NONE];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _className,
    style: {
      ..._ContainerStyles.S_BROWSER,
      ...style,
      ..._style
    },
    role: "presentation",
    onKeyDown: onKeyDown,
    children: children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map