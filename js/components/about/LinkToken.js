"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _jsxRuntime = require("react/jsx-runtime");
const CL_SOURCE_LINK = "source-link",
  S_WRAPPER = {
    display: 'inline-block',
    padding: '0 8px'
  };
const LinkToken = _ref => {
  let {
    color,
    href,
    title,
    caption,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_WRAPPER,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
      className: CL_SOURCE_LINK,
      style: {
        color
      },
      href: href,
      title: title,
      children: caption || children
    })
  });
};
var _default = exports.default = LinkToken;
//# sourceMappingURL=LinkToken.js.map