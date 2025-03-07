"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _Toolbar = _interopRequireDefault(require("./widgets/Toolbar"));
var _ValidationMessages = _interopRequireDefault(require("./rows/ValidationMessages"));
var _jsxRuntime = require("react/jsx-runtime");
const Dialog = _ref => {
  let {
    isShow,
    isToolbar,
    caption,
    menuModel,
    commandButtons,
    toolbarButtons,
    validationMessages,
    children,
    onShow,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DraggableDialog.default, {
    isShow: isShow,
    caption: caption,
    menuModel: menuModel,
    commandButtons: commandButtons,
    onShowChart: onShow,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar.default, {
      isShow: isToolbar,
      buttons: toolbarButtons
    }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    })]
  });
};
var _default = exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map