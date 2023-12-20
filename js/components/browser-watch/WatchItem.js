"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));
var _jsxRuntime = require("react/jsx-runtime");
const S_ITEM_DIV = {
    position: 'relative',
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: 1.4
  },
  S_ITEM_SPAN = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: 250,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  S_SVG_CLOSE = {
    position: 'absolute',
    right: 0
  },
  S_DATE_SPAN = {
    float: 'right'
  };
const VersionDateRow = _ref => {
  let {
    version,
    date
  } = _ref;
  return version ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: version
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_DATE_SPAN,
      children: (date || '').split(' ')[0]
    })]
  }) : null;
};
const WatchItem = _ref2 => {
  let {
    item,
    className,
    isModeEdit,
    option,
    onClick,
    onClose,
    onDragStart,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop
  } = _ref2;
  const {
      repo,
      version,
      date
    } = item,
    _onClick = (0, _uiApi.bindTo)(onClick, item),
    _onKeyDown = (0, _useKeyEnter.default)(_onClick),
    _ddItemHandlers = isModeEdit ? {
      onDragStart: (0, _uiApi.bindTo)(onDragStart, option),
      onDrop: (0, _uiApi.bindTo)(onDrop, option),
      onDragOver,
      onDragEnter,
      onDragLeave
    } : void 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "menuitem",
    tabIndex: "0",
    className: className,
    style: S_ITEM_DIV,
    onClick: _onClick,
    onKeyDown: _onKeyDown,
    draggable: isModeEdit,
    ..._ddItemHandlers,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S_ITEM_SPAN,
        children: repo
      }), isModeEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
        style: S_SVG_CLOSE,
        onClose: (0, _uiApi.bindTo)(onClose, option)
      }) : null]
    }), version ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VersionDateRow, {
      version: version,
      date: date
    }) : null]
  });
};
var _default = exports.default = WatchItem;
//# sourceMappingURL=WatchItem.js.map