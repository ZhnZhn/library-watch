"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _ContainerStyles = require("../styles/ContainerStyles");
var _jsxRuntime = require("react/jsx-runtime");
const Browser = _ref => {
  let {
    isShow,
    style,
    onKeyDown,
    children
  } = _ref;
  const [_style, _className] = (0, _styleFn.crShowPopupStyle)(isShow);
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