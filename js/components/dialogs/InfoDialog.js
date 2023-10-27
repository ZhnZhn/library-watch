"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION = {
    color: '#a487d4',
    width: 400,
    paddingLeft: 10,
    lineHeight: 2,
    fontSize: '18px',
    fontWeight: 'bold'
  },
  S_DESCR = {
    color: 'gray',
    width: 400,
    paddingLeft: 10,
    lineHeight: 1.4,
    whiteSpace: 'pre',
    fontWeight: 'bold'
  };
const InfoDialog = _ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const {
    caption,
    descr
  } = data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    caption: "Information",
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_CAPTION,
        children: caption
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Row, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: descr
      })
    })]
  });
};
var _default = exports.default = (0, _memoFn.memoIsShow)(InfoDialog);
//# sourceMappingURL=InfoDialog.js.map