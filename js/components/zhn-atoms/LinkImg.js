"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var _onError = function _onError(imgSrc, event) {
  console.log("Failed to load image with src: " + imgSrc);
};

var LinkImg = function LinkImg(_ref) {
  var _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? '' : _ref$alt,
      href = _ref.href,
      imgClass = _ref.imgClass,
      imgSrc = _ref.imgSrc,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? _onError : _ref$onError;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    href: href,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: alt,
      className: imgClass,
      src: imgSrc,
      onError: onError.bind(null, imgSrc)
    })
  });
};
/*
LinkImg.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  imgClass: PropTypes.string,
  imgSrc: PropTypes.string,
  onError: PropTypes.func
}
*/


var _default = LinkImg;
exports["default"] = _default;
//# sourceMappingURL=LinkImg.js.map