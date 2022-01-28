"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL_SOURCE_LINK = "source-link",
    S_WRAPPER = {
  display: 'inline-block',
  padding: '0 8px'
};

var LinkToken = function LinkToken(_ref) {
  var color = _ref.color,
      href = _ref.href,
      title = _ref.title,
      caption = _ref.caption,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_WRAPPER,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: CL_SOURCE_LINK,
      style: {
        color: color
      },
      target: "_blank",
      href: href,
      title: title,
      children: caption || children
    })
  });
};

var _default = LinkToken;
exports["default"] = _default;
//# sourceMappingURL=LinkToken.js.map