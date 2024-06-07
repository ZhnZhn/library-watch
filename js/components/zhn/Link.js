"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _toLink = _interopRequireDefault(require("./toLink"));
var _jsxRuntime = require("react/jsx-runtime");
const Link = _ref => {
  let {
    className,
    style,
    href,
    title,
    children
  } = _ref;
  const _href = (0, _toLink.default)(href);
  return _href ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    target: "_blank",
    className: className,
    style: style,
    href: href,
    title: title,
    children: children
  }) : null;
};
var _default = exports.default = Link;
//# sourceMappingURL=Link.js.map