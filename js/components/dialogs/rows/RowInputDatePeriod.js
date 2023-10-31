"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _ShowHide = _interopRequireDefault(require("../../zhn-atoms/ShowHide"));
var _InputDate = _interopRequireDefault(require("../../zhn-atoms/InputDate"));
var _Row = _interopRequireDefault(require("./Row"));
var _Caption = _interopRequireDefault(require("./Caption"));
var _dateFn = require("../../../utils/dateFn");
var _jsxRuntime = require("react/jsx-runtime");
const INITIAL_FROM_DATE = (0, _dateFn.getFromDate)(1),
  INITIAL_TO_DATE = (0, _dateFn.getToDate)(),
  ERROR_FORMAT = "YYYY-MM-DD format must be",
  FROM_DATE = "From Date",
  TO_DATE = "To Date",
  ERROR_FROM_NEAR_TO = "From Date is near that To Date",
  DF_MSG_ON_NOT_VALID_FORMAT = item => `${item} is not in valid format`,
  FN_NOOP = () => {},
  DF_DATE_COMP = {
    isValid: () => false,
    getValue: FN_NOOP,
    setValue: FN_NOOP,
    focus: FN_NOOP
  },
  _getRefValue = ref => ref.current || DF_DATE_COMP;
const RowInputDatePeriod = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    isShow,
    isShowLabels = true,
    msgOnNotValidFormat = DF_MSG_ON_NOT_VALID_FORMAT,
    initialFromDate = INITIAL_FROM_DATE,
    initialToDate = INITIAL_TO_DATE,
    onTestDate = _dateFn.isYmd
  } = _ref;
  const _refFromDate = (0, _uiApi.useRef)(),
    _refToDate = (0, _uiApi.useRef)();
  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getValues: () => ({
      fromDate: (0, _uiApi.getRefInputValue)(_refFromDate),
      toDate: (0, _uiApi.getRefInputValue)(_refToDate)
    }),
    setValues: (fromDate, toDate) => {
      (0, _uiApi.setRefInputValue)(_refFromDate, fromDate);
      (0, _uiApi.setRefInputValue)(_refToDate, toDate);
    },
    getValidation: () => {
      const datesMsg = [],
        _fromDate = _getRefValue(_refFromDate),
        _toDate = _getRefValue(_refToDate);
      if (!_fromDate.isValid()) {
        datesMsg.push(msgOnNotValidFormat(FROM_DATE));
      }
      if (!_toDate.isValid()) {
        datesMsg.push(msgOnNotValidFormat(TO_DATE));
      }
      if (_fromDate.getValue().trim() > _toDate.getValue().trim()) {
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
      _getRefValue(_refFromDate).focus();
    },
    focusNotValidInput: () => {
      const _fromDate = _getRefValue(_refFromDate),
        _toDate = _getRefValue(_refToDate);
      if (!_fromDate.isValid()) {
        _fromDate.focus();
        return true;
      }
      if (!_toDate.isValid()) {
        _toDate.focus();
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
        ref: _refFromDate,
        initialValue: initialFromDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption.default, {
        is: isShowLabels,
        caption: "To Date"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate.default, {
        ref: _refToDate,
        initialValue: initialToDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    })]
  });
});
var _default = exports.default = RowInputDatePeriod;
//# sourceMappingURL=RowInputDatePeriod.js.map