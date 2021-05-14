"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL = "source-link";
var S = {
  WRAPPER: {
    display: 'inline-block',
    paddingLeft: 8,
    paddingRight: 8
  }
};

var LinkToken = function LinkToken(_ref) {
  var color = _ref.color,
      href = _ref.href,
      caption = _ref.caption,
      title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S.WRAPPER,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: CL,
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