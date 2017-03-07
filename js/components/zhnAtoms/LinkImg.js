"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

process.env.NODE_ENV !== "production" ? LinkImg.propTypes = {
   href: _react.PropTypes.string,
   imgClass: _react.PropTypes.string,
   imgSrc: _react.PropTypes.string,
   onError: _react.PropTypes.func
} : void 0;
LinkImg.defaultProps = {
   onError: function onError(imgSrc, event) {
      console.log("Failed to load image with src: " + imgSrc);
   }
};

exports.default = LinkImg;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\LinkImg.js.map