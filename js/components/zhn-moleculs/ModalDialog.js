"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _DialogCaption = _interopRequireDefault(require("./DialogCaption"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_HIDE_POPUP = {
    opacity: 0,
    transform: 'scaleY(0)'
  },
  S_MODAL_DIALOG = {
    ..._Dialog.S_DIALOG_DIV,
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    zIndex: 10
  };
const ModalDialog = _ref => {
  let {
    isShow,
    isWithButton = true,
    timeout = 450,
    style,
    caption,
    commandButtons,
    onClose,
    children
  } = _ref;
  const _rerenderComp = (0, _useRerender.default)(),
    _hKeyDown = (0, _useKeyEscape.default)(onClose),
    _refWasClosing = (0, _uiApi.useRef)(),
    _hClickDialog = (0, _uiApi.useCallback)(event => {
      event.stopPropagation();
    }, []);
  (0, _uiApi.useEffect)(() => {
    if ((0, _uiApi.getRefValue)(_refWasClosing)) {
      setTimeout(_rerenderComp, timeout);
    }
  });
  let _className, _style;
  if ((0, _uiApi.getRefValue)(_refWasClosing)) {
    _style = _Dialog.S_HIDE;
    (0, _uiApi.setRefValue)(_refWasClosing, false);
  } else {
    [_className, _style] = isShow ? [_Dialog.CL_SHOW_POPUP, _Dialog.S_SHOW] : [_Dialog.CL_HIDE_POPUP, S_HIDE_POPUP];
    if (!isShow) {
      (0, _uiApi.setRefValue)(_refWasClosing, true);
    }
  }
  return /*#__PURE__*/ /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/(0, _jsxRuntime.jsxs)("div", {
    role: "dialog",
    tabIndex: "-1",
    "aria-label": caption,
    "aria-hidden": !isShow,
    className: _className,
    style: {
      ...S_MODAL_DIALOG,
      ...style,
      ..._style
    },
    onClick: _hClickDialog,
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCaption.default, {
      caption: caption,
      onClose: onClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children
    }), isWithButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Dialog.S_COMMAND_DIV,
      children: [commandButtons, /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        caption: "Close",
        title: "Click to close modal dialog",
        timeout: 0,
        onClick: onClose
      }, "close")]
    })]
  });
};
var _default = exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map