"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var _CaptionRow = _interopRequireDefault(require("./CaptionRow.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types';
var CaptionRow = function CaptionRow(_ref) {
  var _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      children = _ref.children,
      styleRoot = _ref.styleRoot,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow["default"].CL_CAPTION,
    style: styleRoot,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow["default"].CL_NOT_SELECTED,
      style: _CaptionRow["default"].CAPTION,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: _CaptionRow["default"].SVG_CLOSE,
      onClose: onClose
    })]
  });
};
/*
CaptionRow.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClose: PropTypes.func
}
*/


var _default = CaptionRow;
exports["default"] = _default;
//# sourceMappingURL=CaptionRow.js.map