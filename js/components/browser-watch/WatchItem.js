"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));

var _jsxRuntime = require("react/jsx-runtime");

var STYLE = {
  ITEM_DIV: {
    position: 'relative',
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    lineHeight: 1.4
  },
  ITEM_SPAN: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: 250,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  SVG_CLOSE: {
    position: 'absolute',
    right: 0
  },
  DATE_SPAN: {
    "float": 'right'
  }
};

var VersionDateRow = function VersionDateRow(props) {
  var version = props.version,
      _props$date = props.date,
      date = _props$date === void 0 ? '' : _props$date;

  if (!version) {
    return;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: version
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: STYLE.DATE_SPAN,
      children: date.split(' ')[0]
    })]
  });
};

var WatchItem = function WatchItem(_ref) {
  var item = _ref.item,
      className = _ref.className,
      isModeEdit = _ref.isModeEdit,
      option = _ref.option,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      onDragStart = _ref.onDragStart,
      onDragEnter = _ref.onDragEnter,
      onDragOver = _ref.onDragOver,
      onDragLeave = _ref.onDragLeave,
      onDrop = _ref.onDrop;

  var repo = item.repo,
      version = item.version,
      date = item.date,
      _compBtClose = isModeEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
    style: STYLE.SVG_CLOSE,
    onClose: onClose.bind(null, option)
  }) : null,
      _compVersionDateRow = version ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VersionDateRow, {
    version: version,
    date: date
  }) : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: className,
    style: STYLE.ITEM_DIV,
    onClick: onClick.bind(null, item),
    draggable: isModeEdit,
    onDragStart: isModeEdit && onDragStart.bind(null, option),
    onDrop: isModeEdit && onDrop.bind(null, option),
    onDragOver: isModeEdit && onDragOver,
    onDragEnter: isModeEdit && onDragEnter,
    onDragLeave: isModeEdit && onDragLeave,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: STYLE.ITEM_SPAN,
        children: repo
      }), _compBtClose]
    }), _compVersionDateRow]
  });
};

var _default = WatchItem;
exports["default"] = _default;
//# sourceMappingURL=WatchItem.js.map