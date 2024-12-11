"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoFn = require("../hoc/memoFn");
var _useDialog = _interopRequireDefault(require("./useDialog"));
var _useDialogButtons = _interopRequireDefault(require("./useDialogButtons"));
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _jsxRuntime = require("react/jsx-runtime");
const _crValidationMessages = (value, oneTitle) => {
  const msg = [];
  if (!value) {
    msg.push(`${oneTitle} is required`);
  }
  msg.isValid = msg.length === 0;
  return msg;
};
const DialogType1 = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    caption,
    oneTitle,
    onePlaceholder,
    requestType,
    onShow,
    onLoad,
    onClose
  } = _ref;
  const [MENU_MODEL, TOOLBAR_BUTTONS, isToolbar, isShowLabels] = (0, _useDialog.default)(),
    _refInputOne = (0, _uiApi.useRef)(),
    [validationMessages, COMMAND_BUTTONS, hClose, hLoad] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const value = (0, _uiApi.getRefValue)(_refInputOne).getValue(),
        _validationMessages = _crValidationMessages(value, oneTitle);
      if (_validationMessages.isValid) {
        onLoad({
          repo: value,
          requestType
        });
        clearValidationMessages();
      } else {
        setValidationMessages(_validationMessages);
      }
    }, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.default, {
    isShow: isShow,
    isToolbar: isToolbar,
    caption: caption,
    menuModel: MENU_MODEL,
    toolbarButtons: TOOLBAR_BUTTONS,
    commandButtons: COMMAND_BUTTONS,
    validationMessages: validationMessages,
    onShow: onShow,
    onClose: hClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputText, {
      refEl: _refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: hLoad
    })
  });
});
var _default = exports.default = DialogType1;
//# sourceMappingURL=DialogType1.js.map