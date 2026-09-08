"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _ContainerStyles = require("../styles/ContainerStyles");
var _jsxRuntime = require("react/jsx-runtime");
const Browser = props => {
  const [_style, _className] = (0, _styleFn.crShowPopupStyle)(props.isShow);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    className: _className,
    style: {
      ..._ContainerStyles.S_BROWSER,
      ...props.style,
      ..._style
    },
    onKeyDown: props.onKeyDown,
    children: props.children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map