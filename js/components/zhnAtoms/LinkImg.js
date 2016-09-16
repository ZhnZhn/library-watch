"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkImg = function LinkImg(props) {
  var href = props.href;
  var imgClass = props.imgClass;
  var imgSrc = props.imgSrc;
  var onError = props.onError;
  var _onError = onError ? onError : _handlerError;

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
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\LinkImg.js.map