"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgMore = _interopRequireDefault(require("./SvgMore"));

var _SvgClose = _interopRequireDefault(require("./SvgClose"));

var _CaptionRow = _interopRequireDefault(require("./CaptionRow.Style"));

//import PropTypes from 'prop-types';
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var ContainerCaption = function ContainerCaption(_ref) {
  var style = _ref.style,
      caption = _ref.caption,
      children = _ref.children,
      onMore = _ref.onMore,
      onClose = _ref.onClose;
  return _react["default"].createElement("div", {
    className: _CaptionRow["default"].CL_CAPTION,
    style: style
  }, _isFn(onMore) && _react["default"].createElement(_SvgMore["default"], {
    onClick: onMore
  }), _react["default"].createElement("span", {
    className: _CaptionRow["default"].CL_NOT_SELECTED,
    style: _CaptionRow["default"].SPAN
  }, caption), children, _react["default"].createElement(_SvgClose["default"], {
    style: _CaptionRow["default"].SVG_CLOSE,
    onClose: onClose
  }));
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


ContainerCaption.defaultProps = {
  caption: ''
};
var _default = ContainerCaption;
exports["default"] = _default;
//# sourceMappingURL=ContainerCaption.js.map