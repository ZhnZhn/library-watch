"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _crCaption = function _crCaption(caption) {
  return caption && caption.indexOf(':') === -1 ? caption + ':' : '';
};

var Caption = function Caption(_ref) {
  var is = _ref.is,
      style = _ref.style,
      caption = _ref.caption;

  if (!is) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: style,
    children: _crCaption(caption)
  });
};

var _default = Caption;
exports["default"] = _default;
//# sourceMappingURL=Caption.js.map