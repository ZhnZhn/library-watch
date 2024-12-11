"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _dateFn = require("../../../utils/dateFn");
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _InputDate = _interopRequireDefault(require("../../zhn/InputDate"));
var _Row = _interopRequireDefault(require("./Row"));
var _Caption = _interopRequireDefault(require("./Caption"));
var _jsxRuntime = require("react/jsx-runtime");
const INITIAL_FROM_DATE = (0, _dateFn.getFromDate)(1),
  INITIAL_TO_DATE = (0, _dateFn.getToDate)(),
  ERROR_FORMAT = "YYYY-MM-DD format must be",
  FROM_DATE = "From Date",
  TO_DATE = "To Date",
  ERROR_FROM_NEAR_TO = "From Date is near that To Date",
  DF_MSG_ON_NOT_VALID_FORMAT = item => `${item} is not in valid format`,
  _getTrimRefInputValue = ref => ((0, _uiApi.getRefInputValue)(ref) || "").trim();
const RowInputDatePeriod = _ref => {
  let {
    refEl,
    isShow,
    isShowLabels = true,
    msgOnNotValidFormat = DF_MSG_ON_NOT_VALID_FORMAT,
    initialFromDate = INITIAL_FROM_DATE,
    initialToDate = INITIAL_TO_DATE,
    onTestDate = _dateFn.isYmd
  } = _ref;
  const _refFromDate = (0, _uiApi.useRef)(),
    _refToDate = (0, _uiApi.useRef)();
  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    getValues: () => ({
      fromDate: (0, _uiApi.getRefInputValue)(_refFromDate),
      toDate: (0, _uiApi.getRefInputValue)(_refToDate)
    }),
    setValues: (fromDate, toDate) => {
      (0, _uiApi.setRefInputValue)(_refFromDate, fromDate);
      (0, _uiApi.setRefInputValue)(_refToDate, toDate);
    },
    getValidation: () => {
      const datesMsg = [];
      if (!(0, _uiApi.isRefInputValid)(_refFromDate)) {
        datesMsg.push(msgOnNotValidFormat(FROM_DATE));
      }
      if (!(0, _uiApi.isRefInputValid)(_refToDate)) {
        datesMsg.push(msgOnNotValidFormat(TO_DATE));
      }
      if (_getTrimRefInputValue(_refFromDate) > _getTrimRefInputValue(_refToDate)) {
        datesMsg.push(ERROR_FROM_NEAR_TO);
      }
      return datesMsg.length > 0 ? {
        isValid: false,
        datesMsg
      } : {
        isValid: true
      };
    },
    focusInput: () => {
      (0, _uiApi.focusRefInput)(_refFromDate);
    },
    focusNotValidInput: () => {
      if (!(0, _uiApi.isRefInputValid)(_refFromDate)) {
        (0, _uiApi.focusRefInput)(_refFromDate);
        return true;
      }
      if (!(0, _uiApi.isRefInputValid)(_refToDate)) {
        (0, _uiApi.focusRefInput)(_refToDate);
        return true;
      }
      return false;
    }
  }), [msgOnNotValidFormat]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
    isShow: isShow,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption.default, {
        is: isShowLabels,
        caption: "From Date"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate.default, {
        refEl: _refFromDate,
        initialValue: initialFromDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption.default, {
        is: isShowLabels,
        caption: "To Date"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate.default, {
        refEl: _refToDate,
        initialValue: initialToDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    })]
  });
};
var _default = exports.default = RowInputDatePeriod;
//# sourceMappingURL=RowInputDatePeriod.js.map