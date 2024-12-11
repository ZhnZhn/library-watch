"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoFn = require("../hoc/memoFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useDialog = _interopRequireDefault(require("./useDialog"));
var _useDialogButtons = _interopRequireDefault(require("./useDialogButtons"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _jsxRuntime = require("react/jsx-runtime");
const _crValidationMessages = (repo, isValid, datesMsg, oneTitle) => {
  const msg = [];
  if (!repo) {
    msg.push(`${oneTitle} is required`);
  }
  if (!isValid) {
    msg.push(datesMsg);
  }
  msg.isValid = msg.length === 0;
  return msg;
};
const DialogType3A = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    caption,
    requestType,
    oneTitle,
    onePlaceholder,
    onLoad,
    onShow,
    onClose
  } = _ref;
  const [isShowDate, toggleIsShowDate] = (0, _useToggle.default)(),
    [MENU_MODEL, TOOLBAR_BUTTONS, isToolbar, isShowLabels] = (0, _useDialog.default)(toggleIsShowDate),
    _refInputOne = (0, _uiApi.useRef)(),
    _refInputDates = (0, _uiApi.useRef)(),
    [validationMessages, COMMAND_BUTTONS, hClose, hLoad] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const repo = (0, _uiApi.getRefValue)(_refInputOne).getValue(),
        _datesInst = (0, _uiApi.getRefValue)(_refInputDates),
        {
          isValid,
          datesMsg
        } = _datesInst.getValidation(),
        {
          fromDate,
          toDate
        } = _datesInst.getValues(),
        _validationMessage = _crValidationMessages(repo, isValid, datesMsg, oneTitle);
      if (_validationMessage.isValid) {
        onLoad({
          repo,
          requestType,
          fromDate,
          toDate
        });
        clearValidationMessages();
      } else {
        setValidationMessages(_validationMessage);
      }
    }, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.default, {
    isShow: isShow,
    isToolbar: isToolbar,
    caption: caption,
    menuModel: MENU_MODEL,
    toolbarButtons: TOOLBAR_BUTTONS,
    commandButtons: COMMAND_BUTTONS,
    validationMessages: validationMessages,
    onShow: onShow,
    onClose: hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputText, {
      refEl: _refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputDatePeriod, {
      refEl: _refInputDates,
      isShow: isShowDate,
      isShowLabels: isShowLabels
    })]
  });
});
var _default = exports.default = DialogType3A;
//# sourceMappingURL=DialogType3A.js.map