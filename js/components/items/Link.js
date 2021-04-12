"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _CL = _interopRequireDefault(require("../styles/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var _toLink = function _toLink(href) {
  var protocol = (href || '').split('://')[0];
  return protocol === 'https' ? href : void 0;
};

var Link = function Link(_ref) {
  var style = _ref.style,
      href = _ref.href,
      caption = _ref.caption;

  var _href = _toLink(href);

  return _href ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    target: "_blank",
    className: _CL["default"].SOURCE_LINK,
    style: style,
    href: href,
    children: caption
  }) : null;
};

var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Link.js.map