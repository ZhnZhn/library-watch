"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fUseKey = require("../hooks/fUseKey");
var _BtSvgX = _interopRequireDefault(require("../zhn/BtSvgX"));
var _jsxRuntime = require("react/jsx-runtime");
const S_ITEM_DIV = {
    position: 'relative',
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 14,
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
const VersionDateRow = ({
  version,
  date
}) => version ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    children: version
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S_DATE_SPAN,
    children: (date || '').split(' ')[0]
  })]
}) : null;
const WatchItem = ({
  isModeEdit,
  item,
  className,
  onClick,
  onClose,
  dndItemHandlers
}) => {
  const {
      repo,
      version,
      date
    } = item,
    _onKeyDown = (0, _fUseKey.useKeyEnter)(onClick);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "menuitem",
    tabIndex: "0",
    className: className,
    style: S_ITEM_DIV,
    onClick: onClick,
    onKeyDown: _onKeyDown,
    ...dndItemHandlers,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        style: S_ITEM_SPAN,
        children: repo
      }), isModeEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtSvgX.default, {
        ariaLabel: "Remove item",
        style: S_SVG_CLOSE,
        onClose: onClose
      }) : null]
    }), version ? /*#__PURE__*/(0, _jsxRuntime.jsx)(VersionDateRow, {
      version: version,
      date: date
    }) : null]
  });
};
var _default = exports.default = WatchItem;
//# sourceMappingURL=WatchItem.js.map