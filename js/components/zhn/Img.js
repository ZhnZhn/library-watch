"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _toLink = _interopRequireDefault(require("./toLink"));
var _jsxRuntime = require("react/jsx-runtime");
const _onError = (src, event) => {
  console.log("Failed to load image with src: " + src);
};
const Img = _ref => {
  let {
    alt,
    className,
    src
  } = _ref;
  const _src = (0, _toLink.default)(src);
  return _src ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    alt: alt,
    className: className,
    src: _src,
    onError: _onError.bind(null, _src)
  }) : null;
};
var _default = exports.default = Img;
//# sourceMappingURL=Img.js.map