"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var _CaptionRow = _interopRequireDefault(require("./CaptionRow.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types';
var S = {
  CAPTION: {
    paddingLeft: 0
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var ContainerCaption = function ContainerCaption(_ref) {
  var style = _ref.style,
      moreStyle = _ref.moreStyle,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      children = _ref.children,
      onMore = _ref.onMore,
      onClose = _ref.onClose;

  var _captionStyle = _isFn(onMore) ? (0, _extends2["default"])({}, _CaptionRow["default"].CAPTION, S.CAPTION) : _CaptionRow["default"].CAPTION;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CaptionRow["default"].CL_CAPTION,
    style: style,
    children: [_isFn(onMore) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
      style: moreStyle,
      onClick: onMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CaptionRow["default"].CL_NOT_SELECTED,
      style: _captionStyle,
      children: caption
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
      style: _CaptionRow["default"].SVG_CLOSE,
      onClose: onClose
    })]
  });
};
/*
ContainerCaption.propTypes = {
  caption: PropTypes.string,
  styleRoot: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onMore: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = ContainerCaption;
exports["default"] = _default;
//# sourceMappingURL=ContainerCaption.js.map