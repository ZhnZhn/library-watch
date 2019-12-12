"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL = "github-link";
var S = {
  WRAPPER: {
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
  return _react["default"].createElement("span", {
    style: S.WRAPPER
  }, _react["default"].createElement("a", {
    className: CL,
    style: {
      color: color
    },
    target: "_blank",
    href: href,
    title: title
  }, caption || children));
};

var _default = LinkToken;
exports["default"] = _default;
//# sourceMappingURL=LinkToken.js.map