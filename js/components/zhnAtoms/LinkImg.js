"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkImg = function LinkImg(props) {
  var href = props.href,
      imgClass = props.imgClass,
      imgSrc = props.imgSrc,
      onError = props.onError,
      _onError = onError ? onError : _handlerError;

  var _handlerError = function _handlerError(event) {
    console.log("Failed to load image with src: " + imgSrc);
  };

  return _react2.default.createElement(
    "a",
    { href: href },
    _react2.default.createElement("img", {
      onError: _onError,
      className: imgClass,
      src: imgSrc
    })
  );
};

exports.default = LinkImg;
//# sourceMappingURL=LinkImg.js.map