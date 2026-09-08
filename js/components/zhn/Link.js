"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _toLink = _interopRequireDefault(require("./toLink"));
var _jsxRuntime = require("react/jsx-runtime");
const Link = props => {
  const _href = (0, _toLink.default)(props.href);
  return _href ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    target: "_blank",
    rel: "noopener",
    className: props.className,
    style: props.style,
    href: props.href,
    title: props.title,
    children: props.children
  }) : null;
};
var _default = exports.default = Link;
//# sourceMappingURL=Link.js.map