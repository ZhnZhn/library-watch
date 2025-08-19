"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoFn = require("../hoc/memoFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useDialog = _interopRequireDefault(require("./useDialog"));
var _useSelectItem = _interopRequireDefault(require("./useSelectItem"));
var _useDialogButtons = _interopRequireDefault(require("./useDialogButtons"));
var _getRefItemValue = _interopRequireDefault(require("./getRefItemValue"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _RowInputText = _interopRequireDefault(require("./rows/RowInputText"));
var _RowInputSelect = _interopRequireDefault(require("./rows/RowInputSelect"));
var _RowInputDatePeriod = _interopRequireDefault(require("./rows/RowInputDatePeriod"));
var _getRowSelectProps = require("./getRowSelectProps");
var _helperFns = require("./helperFns");
var _jsxRuntime = require("react/jsx-runtime");
const _createValidationMessages = (isValid, datesMsg) => {
  const msg = [];
  if (!isValid) {
    msg.push(datesMsg);
  }
  msg.isValid = msg.length === 0;
  return msg;
};
const _getDateTuple = _datesInst => {
  if (_datesInst) {
    const {
        isValid,
        datesMsg
      } = _datesInst.getValidation(),
      {
        fromDate,
        toDate
      } = _datesInst.getValues();
    return [isValid, datesMsg, fromDate, toDate];
  }
  return [true, ""];
};
const _ymdToUTCSecond = ymd => ymd ? (0, _helperFns.ymdToUTCSecond)(ymd) : void 0;
const DialogType2 = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    caption,
    requestType,
    oneTitle,
    onePlaceholder,
    isPeriod,
    onShow,
    onLoad,
    onClose
  } = _ref;
  const inputSelectProps = (0, _uiApi.useMemo)(() => (0, _getRowSelectProps.getRowSelectProps)(requestType), [requestType]),
    [isShowDate, toggleIsShowDate] = (0, _useToggle.default)(),
    [MENU_MODEL, isShowLabels] = (0, _useDialog.default)(isPeriod ? toggleIsShowDate : void 0),
    _refInputOne = (0, _uiApi.useRef)(),
    _refInputDates = (0, _uiApi.useRef)(),
    [_refSortBy, _hSelectSortBy] = (0, _useSelectItem.default)(),
    [validationMessages, COMMAND_BUTTONS, hClose, hLoad] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const repo = (0, _uiApi.getRefValue)(_refInputOne).getValue(),
        [isValid, datesMsg, fromDate, toDate] = _getDateTuple((0, _uiApi.getRefValue)(_refInputDates)),
        _validationMessage = _createValidationMessages(isValid, datesMsg);
      if (_validationMessage.isValid) {
        onLoad({
          repo,
          requestType,
          sort: (0, _getRefItemValue.default)(_refSortBy),
          fromdate: _ymdToUTCSecond(fromDate),
          todate: _ymdToUTCSecond(toDate)
        });
        clearValidationMessages();
      } else {
        setValidationMessages(_validationMessage);
      }
    }, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.default, {
    isShow: isShow,
    caption: caption,
    menuModel: MENU_MODEL,
    commandButtons: COMMAND_BUTTONS,
    validationMessages: validationMessages,
    onShow: onShow,
    onClose: hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText.default, {
      refEl: _refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      ...inputSelectProps,
      isShowLabel: isShowLabels,
      onSelect: _hSelectSortBy
    }), isPeriod && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputDatePeriod.default, {
      refEl: _refInputDates,
      isShow: isShowDate,
      isShowLabels: isShowLabels
    })]
  });
});
var _default = exports.default = DialogType2;
//# sourceMappingURL=DialogType2.js.map