"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useDialog2 = _interopRequireDefault(require("./useDialog"));
var _useSelectItem2 = _interopRequireDefault(require("./useSelectItem"));
var _useDialogButtons2 = _interopRequireDefault(require("./useDialogButtons"));
var _getRefItemValue = _interopRequireDefault(require("./getRefItemValue"));
var _memoIsShow = _interopRequireDefault(require("./memoIsShow"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _DialogCell = _interopRequireDefault(require("./DialogCell"));
var _helperFns = require("./helperFns");
var _jsxRuntime = require("react/jsx-runtime");
var _SORT_OPTIONS = [{
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
var _createValidationMessages = function _createValidationMessages(isValid, datesMsg) {
  var msg = [];
  if (!isValid) {
    msg.push(datesMsg);
  }
  msg.isValid = msg.length === 0;
  return msg;
};
var DialogType3 = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
    caption = _ref.caption,
    oneTitle = _ref.oneTitle,
    onePlaceholder = _ref.onePlaceholder,
    twoTitle = _ref.twoTitle,
    twoPlaceholder = _ref.twoPlaceholder,
    requestType = _ref.requestType,
    onShow = _ref.onShow,
    onLoad = _ref.onLoad,
    onClose = _ref.onClose;
  var _useToggle = (0, _useToggle2["default"])(),
    isShowDate = _useToggle[0],
    toggleIsShowDate = _useToggle[1],
    _useDialog = (0, _useDialog2["default"])(toggleIsShowDate),
    MENU_MODEL = _useDialog[0],
    TOOLBAR_BUTTONS = _useDialog[1],
    isToolbar = _useDialog[2],
    isShowLabels = _useDialog[3],
    _refInputOne = (0, _uiApi.useRef)(),
    _refInputTwo = (0, _uiApi.useRef)(),
    _refInputDates = (0, _uiApi.useRef)(),
    _useSelectItem = (0, _useSelectItem2["default"])(),
    _refSortBy = _useSelectItem[0],
    _hSelectSortBy = _useSelectItem[1],
    _useDialogButtons = (0, _useDialogButtons2["default"])(function (setValidationMessages, clearValidationMessages) {
      var repo = (0, _uiApi.getRefValue)(_refInputOne).getValue(),
        intitle = (0, _uiApi.getRefValue)(_refInputTwo).getValue(),
        _dateInst = (0, _uiApi.getRefValue)(_refInputDates),
        _dateInst$getValidati = _dateInst.getValidation(),
        isValid = _dateInst$getValidati.isValid,
        datesMsg = _dateInst$getValidati.datesMsg,
        _dateInst$getValues = _dateInst.getValues(),
        fromDate = _dateInst$getValues.fromDate,
        toDate = _dateInst$getValues.toDate,
        _validationMessage = _createValidationMessages(isValid, datesMsg);
      if (_validationMessage.isValid) {
        onLoad({
          repo: repo,
          requestType: requestType,
          intitle: intitle,
          sort: (0, _getRefItemValue["default"])(_refSortBy),
          fromdate: (0, _helperFns.ymdToUTCSecond)(fromDate),
          todate: (0, _helperFns.ymdToUTCSecond)(toDate)
        });
      } else {
        setValidationMessages(_validationMessage);
      }
    }, onClose),
    validationMessages = _useDialogButtons[0],
    COMMAND_BUTTONS = _useDialogButtons[1],
    hClose = _useDialogButtons[2],
    hLoad = _useDialogButtons[3];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog["default"], {
    isShow: isShow,
    isToolbar: isToolbar,
    caption: caption,
    menuModel: MENU_MODEL,
    toolbarButtons: TOOLBAR_BUTTONS,
    commandButtons: COMMAND_BUTTONS,
    validationMessages: validationMessages,
    onShow: onShow,
    onClose: hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].RowInputText, {
      ref: _refInputOne,
      isShowLabel: isShowLabels,
      caption: oneTitle,
      placeholder: onePlaceholder,
      onEnter: hLoad
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].RowInputText, {
      ref: _refInputTwo,
      isShowLabel: isShowLabels,
      caption: twoTitle,
      placeholder: twoPlaceholder
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].RowInputSelect, {
      isShowLabel: isShowLabels,
      caption: "Sort By",
      placeholder: "Default: Activity",
      options: _SORT_OPTIONS,
      onSelect: _hSelectSortBy
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell["default"].RowInputDatePeriod, {
      ref: _refInputDates,
      isShow: isShowDate,
      isShowLabels: isShowLabels
    })]
  });
});
var _default = DialogType3;
exports["default"] = _default;
//# sourceMappingURL=DialogType3.js.map