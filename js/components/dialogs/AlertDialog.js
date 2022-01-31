"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _memoIsShow = _interopRequireDefault(require("./memoIsShow"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _jsxRuntime = require("react/jsx-runtime");

var S_CAPTION = {
  color: '#f44336',
  display: 'inline-block',
  width: 400,
  paddingLeft: 10,
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold'
},
    S_ITEM_ID = {
  color: 'rgba(164, 135, 212, 1)',
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
var ELLIPSIS = '...';

var _crItemId = function _crItemId(str) {
  return str ? str.substring(0, 20) + ELLIPSIS : '';
};

var FN_NOOP = function FN_NOOP() {};

var AlertDialog = function AlertDialog(_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? FN_NOOP : _ref$onClose;

  var _ref2 = data || {},
      alertCaption = _ref2.alertCaption,
      alertItemId = _ref2.alertItemId,
      alertDescr = _ref2.alertDescr,
      caption = _ref2.caption,
      itemId = _ref2.itemId,
      descr = _ref2.descr,
      _caption = alertCaption || caption || '',
      _itemId = _crItemId(alertItemId || itemId),
      _descr = alertDescr || descr || '';

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    caption: "Alert",
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _DialogStyles["default"].rowDiv,
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _DialogStyles["default"].rowDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: _descr
      })
    })]
  });
};
/*
AlertDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    alertCaption: PropTypes.string,
    alertItemId: PropTypes.string,
    alertDescr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/


var _default = (0, _memoIsShow["default"])(AlertDialog);

exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map