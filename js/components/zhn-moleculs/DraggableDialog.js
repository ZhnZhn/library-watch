"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _styleFn = require("../styleFn");
var _fUseKey = require("../hooks/fUseKey");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useXYMovable = _interopRequireDefault(require("../hooks/useXYMovable"));
var _useDialogFocus = _interopRequireDefault(require("./useDialogFocus"));
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));
var _SvgClose = _interopRequireDefault(require("../zhn/SvgClose"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("react/jsx-runtime");
const CL_DRAGGABLE_DIALOG = "draggable-dialog",
  CL_NOT_SELECTED = (0, _styleFn.crClNotSelected)(),
  CL_MENU_MORE = 'popup-menu dialog__menu-more',
  S_DRAGGABLE_DIALOG = {
    ..._Dialog.S_DIALOG_DIV,
    position: 'absolute',
    top: 30,
    left: 50,
    zIndex: 10
  },
  S_CAPTION = {
    ..._Dialog.S_CAPTION_DIV,
    cursor: 'move'
  },
  S_BT_MORE = {
    position: 'absolute',
    top: 2,
    left: 0
  },
  S_BT_MORE_SVG = {
    stroke: 'inherit',
    fill: 'inherit'
  },
  FN_NOOP = () => {};
const DraggableDialog = _ref => {
  let {
    refEl,
    menuModel,
    isShow,
    caption,
    children,
    commandButtons,
    onShowChart,
    onClose = FN_NOOP
  } = _ref;
  const [_refRootDiv, _refBtMore] = (0, _useDialogFocus.default)(refEl, isShow),
    [_isMore, _toggleMore] = (0, _useToggle.default)(),
    _hKeyDown = (0, _fUseKey.useKeyEscape)(onClose),
    _className = (0, _styleFn.crCn)(CL_DRAGGABLE_DIALOG, [isShow, _Dialog.CL_SHOW_POPUP]),
    _styleShow = isShow ? _Dialog.S_SHOW : _Dialog.S_HIDE;
  (0, _useXYMovable.default)(_refRootDiv);
  return /*#__PURE__*/ /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/(0, _jsxRuntime.jsxs)("div", {
    ref: _refRootDiv,
    role: "dialog",
    tabIndex: "-1",
    "aria-label": caption,
    "aria-hidden": !isShow,
    className: _className,
    style: {
      ...S_DRAGGABLE_DIALOG,
      ..._styleShow
    },
    onKeyDown: _hKeyDown,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_CAPTION,
      children: [menuModel && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
          isShow: _isMore,
          className: CL_MENU_MORE,
          model: menuModel,
          onClose: _toggleMore
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
          btRef: _refBtMore,
          style: S_BT_MORE,
          svgStyle: S_BT_MORE_SVG,
          onClick: _toggleMore
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL_NOT_SELECTED,
        children: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose.default, {
        style: _Dialog.S_SVG_CLOSE,
        onClose: onClose
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Dialog.S_COMMAND_DIV,
      children: [commandButtons, (0, _isTypeFn.isFn)(onShowChart) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        timeout: 0,
        rootStyle: _Dialog.S_BT_ROOT,
        caption: "Show",
        title: "Show Pane Container",
        onClick: onShowChart
      }, "show"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        timeout: 0,
        rootStyle: _Dialog.S_BT_ROOT,
        caption: "Close",
        title: "Close Draggable Dialog",
        onClick: onClose
      }, "close")]
    })]
  });
};
var _default = exports.default = DraggableDialog;
//# sourceMappingURL=DraggableDialog.js.map