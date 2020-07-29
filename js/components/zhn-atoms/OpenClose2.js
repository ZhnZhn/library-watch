"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

//import PropTypes from 'prop-types'
var CL = {
  ROW_CAPTION: 'zhn-oc not-selected',
  SHOW_POPUP: 'show-popup'
};
var STYLE = {
  ROOT: {
    backgroundColor: '#4d4d4d',
    lineHeight: 2
  },
  SVG: {
    display: 'inline-block',
    width: 16,
    height: 16
  },
  CAPTION: {
    color: '#1b2836',
    paddingLeft: 4,
    verticalAlign: 'top',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer'
  },
  INLINE: {
    display: 'inline-block'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};
var FILL_OPEN = 'yellow',
    FILL_CLOSE = '#4D4D4D',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose2 = function OpenClose2(_ref) {
  var _ref$isClose = _ref.isClose,
      isClose = _ref$isClose === void 0 ? true : _ref$isClose,
      style = _ref.style,
      styleNotSelected = _ref.styleNotSelected,
      styleCaptionRow = _ref.styleCaptionRow,
      styleCaption = _ref.styleCaption,
      caption = _ref.caption,
      _ref$fillOpen = _ref.fillOpen,
      fillOpen = _ref$fillOpen === void 0 ? FILL_OPEN : _ref$fillOpen,
      _ref$fillClose = _ref.fillClose,
      fillClose = _ref$fillClose === void 0 ? FILL_CLOSE : _ref$fillClose,
      isDraggable = _ref.isDraggable,
      option = _ref.option,
      onDragStart = _ref.onDragStart,
      onDragEnter = _ref.onDragEnter,
      onDragOver = _ref.onDragOver,
      onDragLeave = _ref.onDragLeave,
      onDrop = _ref.onDrop,
      children = _ref.children;

  var _useState = (0, _react.useState)(!isClose),
      isOpen = _useState[0],
      setIsOpen = _useState[1],
      _hToggle = (0, _react.useCallback)(function () {
    setIsOpen(function (is) {
      return !is;
    });
  }, []),
      _hKeyDown = (0, _react.useCallback)(function (event) {
    if ((0, _isKeyEnter["default"])(event)) {
      _hToggle();
    }
  }, []),
      _dragOption = isDraggable ? {
    draggable: true,
    onDragStart: onDragStart.bind(null, option),
    onDrop: onDrop.bind(null, option),
    onDragEnter: onDragEnter,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave
  } : void 0;

  var _pathV, _fillV, _styleCollapse, _classShow, _styleNotSelected;

  if (isOpen) {
    _pathV = PATH_OPEN;
    _fillV = fillOpen;
    _styleCollapse = STYLE.BLOCK;
    _classShow = CL.SHOW_POPUP;
    _styleNotSelected = null;
  } else {
    _pathV = PATH_CLOSE;
    _fillV = fillClose;
    _styleCollapse = STYLE.NONE;
    _classShow = null;
    _styleNotSelected = styleNotSelected;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, STYLE.ROOT, style)
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: CL.ROW_CAPTION,
    style: (0, _extends2["default"])({}, styleCaptionRow, _styleNotSelected),
    onClick: _hToggle,
    tabIndex: "0",
    role: "menuitem",
    onKeyDown: _hKeyDown
  }, _dragOption), /*#__PURE__*/_react["default"].createElement("div", {
    style: STYLE.SVG
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "0 0 16 16",
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: STYLE.INLINE
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: _pathV,
    fill: _fillV,
    strokeWidth: "1",
    stroke: fillOpen
  }))), /*#__PURE__*/_react["default"].createElement("span", {
    style: (0, _extends2["default"])({}, STYLE.CAPTION, styleCaption)
  }, caption)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _classShow,
    style: _styleCollapse
  }, children));
};
/*
OpenClose2.propTypes = {
  isClose: PropTypes.bool,

  style: PropTypes.object,
  styleNotSelected: PropTypes.object,
  styleCpationRow: PropTypes.object,
  styleCaption: PropTypes.object,

  caption: PropTypes.string,
  fillOpen: PropTypes.string,
  fillClose: PropTypes.string,

  isDraggable: PropTypes.bool,
  option: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,

  children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
  ])
}
*/


var _default = OpenClose2;
exports["default"] = _default;
//# sourceMappingURL=OpenClose2.js.map