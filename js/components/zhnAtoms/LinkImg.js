"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var LinkImg = function LinkImg(_ref) {
  var href = _ref.href,
      imgClass = _ref.imgClass,
      imgSrc = _ref.imgSrc,
      onError = _ref.onError;
  return _react2.default.createElement(
    "a",
    { href: href },
    _react2.default.createElement("img", {
      className: imgClass,
      src: imgSrc,
      onError: onError.bind(null, imgSrc)
    })
  );
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

exports.default = LinkImg;
//# sourceMappingURL=LinkImg.js.map