"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _Row = _interopRequireDefault(require("./rows/Row"));
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION = {
    color: '#f44336',
    display: 'inline-block',
    width: 400,
    paddingLeft: 10,
    lineHeight: 2,
    fontSize: '18px',
    fontWeight: 'bold'
  },
  S_ITEM_ID = {
    color: '#a487d4',
    fontWeight: 'bold'
  },
  S_DESCR = {
    color: 'gray',
    width: 400,
    paddingLeft: 10,
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
    fontWeight: 'bold'
  };
const ELLIPSIS = '...';
const _crItemId = str => str ? str.substring(0, 20) + ELLIPSIS : '';
const FN_NOOP = () => {};
const AlertDialog = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    data,
    onClose = FN_NOOP
  } = _ref;
  const {
      alertCaption,
      alertItemId,
      alertDescr,
      caption,
      itemId,
      descr
    } = data || {},
    _caption = alertCaption || caption || '',
    _itemId = _crItemId(alertItemId || itemId),
    _descr = alertDescr || descr || '';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    caption: "Alert",
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        style: S_CAPTION,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: _caption
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: ":"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_ITEM_ID,
          title: _itemId,
          children: _itemId
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: _descr
      })
    })]
  });
});
var _default = exports.default = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map