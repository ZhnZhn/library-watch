"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = "not-selected";
var S = {
  ROOT: {
    color: 'silver',
    backgroundColor: '#232f3b',
    padding: 5,
    textAlign: 'center',
    fontSize: 18
  },
  SVG: {
    position: 'absolute',
    top: 6,
    right: 0
  }
};

var DialogCaption = function DialogCaption(_ref) {
  var caption = _ref.caption,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: S.SVG,
      onClose: onClose
    })]
  });
};
/*
DialogCaption.propTypes = {
  caption: PropTypes.string,
  onClose: PropTypes.func
}
*/


var _default = DialogCaption;
exports["default"] = _default;
//# sourceMappingURL=DialogCaption.js.map