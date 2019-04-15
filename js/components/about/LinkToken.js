"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    "span",
    { style: S.WRAPPER },
    _react2.default.createElement(
      "a",
      {
        className: CL,
        style: { color: color },
        target: "_blank",
        href: href,
        title: title
      },
      children
    )
  );
};

exports.default = LinkToken;
//# sourceMappingURL=LinkToken.js.map