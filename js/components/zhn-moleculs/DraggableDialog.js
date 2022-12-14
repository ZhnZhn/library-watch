"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useXYMovable = _interopRequireDefault(require("../hooks/useXYMovable"));
var _useDialogFocus2 = _interopRequireDefault(require("./useDialogFocus"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _SvgMore = _interopRequireDefault(require("../zhn-atoms/SvgMore"));
var _SvgClose = _interopRequireDefault(require("../zhn-atoms/SvgClose"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _Dialog = require("./Dialog.Style");
var _jsxRuntime = require("react/jsx-runtime");
var CL_DRAGGABLE_DIALOG = "draggable-dialog",
  CL_NOT_SELECTED = 'not-selected',
  CL_MENU_MORE = 'popup-menu dialog__menu-more',
  S_DRAGGABLE_DIALOG = (0, _extends2["default"])({}, _Dialog.S_DIALOG_DIV, {
    position: 'absolute',
    top: 30,
    left: 50,
    zIndex: 10
  }),
  S_CAPTION = (0, _extends2["default"])({}, _Dialog.S_CAPTION_DIV, {
    cursor: 'move'
  }),
  S_BT_MORE = {
    position: 'absolute',
    top: 2,
    left: 0
  },
  S_BT_MORE_SVG = {
    stroke: 'inherit',
    fill: 'inherit'
  },
  FN_NOOP = function FN_NOOP() {},
  _isFn = function _isFn(fn) {
    return typeof fn === 'function';
  };
var DraggableDialog = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var menuModel = _ref.menuModel,
    isShow = _ref.isShow,
    caption = _ref.caption,
    children = _ref.children,
    commandButtons = _ref.commandButtons,
    onShowChart = _ref.onShowChart,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? FN_NOOP : _ref$onClose;
  var _useDialogFocus = (0, _useDialogFocus2["default"])(ref, isShow),
    _refRootDiv = _useDialogFocus[0],
    _refBtMore = _useDialogFocus[1],
    _useToggle = (0, _useToggle2["default"])(),
    _isMore = _useToggle[0],
    _toggleMore = _useToggle[1],
    _hKeyDown = (0, _useKeyEscape["default"])(onClose),
    _className = (0, _crCn["default"])(CL_DRAGGABLE_DIALOG, [isShow, _Dialog.CL_SHOW_POPUP]),
    _styleShow = isShow ? _Dialog.S_SHOW : _Dialog.S_HIDE;
  (0, _useXYMovable["default"])(_refRootDiv);
  return (
    /*#__PURE__*/
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      role: "dialog",
      tabIndex: "-1",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: (0, _extends2["default"])({}, S_DRAGGABLE_DIALOG, _styleShow),
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S_CAPTION,
        children: [menuModel && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider["default"], {
            isShow: _isMore,
            className: CL_MENU_MORE,
            model: menuModel,
            onClose: _toggleMore
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
            btRef: _refBtMore,
            style: S_BT_MORE,
            svgStyle: S_BT_MORE_SVG,
            onClick: _toggleMore
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: CL_NOT_SELECTED,
          children: caption
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClose["default"], {
          style: _Dialog.S_SVG_CLOSE,
          onClose: onClose
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: _Dialog.S_COMMAND_DIV,
        children: [commandButtons, _isFn(onShowChart) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          timeout: 0,
          rootStyle: _Dialog.S_BT_ROOT,
          caption: "Show",
          title: "Show Pane Container",
          onClick: onShowChart
        }, "show"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          timeout: 0,
          rootStyle: _Dialog.S_BT_ROOT,
          caption: "Close",
          title: "Close Draggable Dialog",
          onClick: onClose
        }, "close")]
      })]
    })
  );
});
var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map