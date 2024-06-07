"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Link = _interopRequireDefault(require("./Link"));
var _Img = _interopRequireDefault(require("./Img"));
var _jsxRuntime = require("react/jsx-runtime");
const LinkImg = _ref => {
  let {
    alt,
    href,
    imgClass,
    imgSrc
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
    href: href,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Img.default, {
      alt: alt,
      className: imgClass,
      src: imgSrc
    })
  });
};
var _default = exports.default = LinkImg;
//# sourceMappingURL=LinkImg.js.map