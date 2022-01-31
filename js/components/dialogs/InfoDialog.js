"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _memoIsShow = _interopRequireDefault(require("./memoIsShow"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _jsxRuntime = require("react/jsx-runtime");

var S_CAPTION = {
  color: 'rgba(164, 135, 212, 1)',
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

var InfoDialog = function InfoDialog(_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      onClose = _ref.onClose;
  var caption = data.caption,
      descr = data.descr;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    caption: "Information",
    isShow: isShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _DialogStyles["default"].rowDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_CAPTION,
        children: caption
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _DialogStyles["default"].rowDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: S_DESCR,
        children: descr
      })
    })]
  });
};
/*
InfoDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    caption: PropTypes.string,
    descr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/


var _default = (0, _memoIsShow["default"])(InfoDialog);

exports["default"] = _default;
//# sourceMappingURL=InfoDialog.js.map