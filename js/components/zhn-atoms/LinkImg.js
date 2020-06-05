"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

//import PropTypes from "prop-types";
var LinkImg = function LinkImg(_ref) {
  var href = _ref.href,
      imgClass = _ref.imgClass,
      imgSrc = _ref.imgSrc,
      onError = _ref.onError;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: href
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: imgClass,
    src: imgSrc,
    onError: onError.bind(null, imgSrc)
  }));
};
/*
LinkImg.propTypes = {
  href: PropTypes.string,
  imgClass: PropTypes.string,
  imgSrc: PropTypes.string,
  onError: PropTypes.func
}
*/


LinkImg.defaultProps = {
  onError: function onError(imgSrc, event) {
    console.log("Failed to load image with src: " + imgSrc);
  }
};
var _default = LinkImg;
exports["default"] = _default;
//# sourceMappingURL=LinkImg.js.map