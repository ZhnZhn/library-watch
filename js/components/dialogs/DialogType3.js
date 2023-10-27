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
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _helperFns = require("./helperFns");
var _jsxRuntime = require("react/jsx-runtime");
const _SORT_OPTIONS = [{
  caption: "Activity, Recent Day",
  value: "activity"
}, {
  caption: "Creation Date",
  value: "creation"
}, {
  caption: "Score",
  value: "votes"
}, {
  caption: "Relevance",
  value: "relevance"
}];
const _createValidationMessages = (isValid, datesMsg) => {
  const msg = [];
  if (!isValid) {
    msg.push(datesMsg);
  }
  msg.isValid = msg.length === 0;
  return msg;
};
const DialogType3 = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    caption,
    oneTitle,
    onePlaceholder,
    twoTitle,
    twoPlaceholder,
    requestType,
    onShow,
    onLoad,
    onClose
  } = _ref;
  const [isShowDate, toggleIsShowDate] = (0, _useToggle.default)(),
    [MENU_MODEL, TOOLBAR_BUTTONS, isToolbar, isShowLabels] = (0, _useDialog.default)(toggleIsShowDate),
    _refInputOne = (0, _uiApi.useRef)(),
    _refInputTwo = (0, _uiApi.useRef)(),
    _refInputDates = (0, _uiApi.useRef)(),
    [_refSortBy, _hSelectSortBy] = (0, _useSelectItem.default)(),
    [validationMessages, COMMAND_BUTTONS, hClose, hLoad] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const repo = (0, _uiApi.getRefValue)(_refInputOne).getValue(),
        intitle = (0, _uiApi.getRefValue)(_refInputTwo).getValue(),
        _dateInst = (0, _uiApi.getRefValue)(_refInputDates),
        {
          isValid,
          datesMsg
        } = _dateInst.getValidation(),
        {
          fromDate,
          toDate
        } = _dateInst.getValues(),
        _validationMessage = _createValidationMessages(isValid, datesMsg);
      if (_validationMessage.isValid) {
        onLoad({
          repo,
          requestType,
          intitle,
          sort: (0, _getRefItemValue.default)(_refSortBy),
          fromdate: (0, _helperFns.ymdToUTCSecond)(fromDate),
          todate: (0, _helperFns.ymdToUTCSecond)(toDate)
        });
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
      ref: _refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputText, {
      ref: _refInputTwo,
      isShowLabel: isShowLabels,
      caption: twoTitle,
      placeholder: twoPlaceholder
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Sort By",
      placeholder: "Default: Activity",
      options: _SORT_OPTIONS,
      onSelect: _hSelectSortBy
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.RowInputDatePeriod, {
      ref: _refInputDates,
      isShow: isShowDate,
      isShowLabels: isShowLabels
    })]
  });
});
var _default = exports.default = DialogType3;
//# sourceMappingURL=DialogType3.js.map