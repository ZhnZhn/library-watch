"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../../uiApi");
var _ShowHide = _interopRequireDefault(require("../../zhn-atoms/ShowHide"));
var _InputDate = _interopRequireDefault(require("../../zhn-atoms/InputDate"));
var _Row = _interopRequireDefault(require("./Row"));
var _Caption = _interopRequireDefault(require("./Caption"));
var _dateFn = require("../../../utils/dateFn");
var _jsxRuntime = require("react/jsx-runtime");
var INITIAL_FROM_DATE = (0, _dateFn.getFromDate)(1),
  INITIAL_TO_DATE = (0, _dateFn.getToDate)(),
  ERROR_FORMAT = "YYYY-MM-DD format must be",
  FROM_DATE = "From Date",
  TO_DATE = "To Date",
  ERROR_FROM_NEAR_TO = "From Date is near that To Date",
  DF_MSG_ON_NOT_VALID_FORMAT = function DF_MSG_ON_NOT_VALID_FORMAT(item) {
    return item + " is not in valid format";
  },
  FN_NOOP = function FN_NOOP() {},
  DF_DATE_COMP = {
    isValid: function isValid() {
      return false;
    },
    getValue: FN_NOOP,
    setValue: FN_NOOP,
    focus: FN_NOOP
  },
  _getRefValue = function _getRefValue(ref) {
    return ref.current || DF_DATE_COMP;
  };
var RowInputDatePeriod = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var isShow = _ref.isShow,
    _ref$isShowLabels = _ref.isShowLabels,
    isShowLabels = _ref$isShowLabels === void 0 ? true : _ref$isShowLabels,
    _ref$msgOnNotValidFor = _ref.msgOnNotValidFormat,
    msgOnNotValidFormat = _ref$msgOnNotValidFor === void 0 ? DF_MSG_ON_NOT_VALID_FORMAT : _ref$msgOnNotValidFor,
    _ref$initialFromDate = _ref.initialFromDate,
    initialFromDate = _ref$initialFromDate === void 0 ? INITIAL_FROM_DATE : _ref$initialFromDate,
    _ref$initialToDate = _ref.initialToDate,
    initialToDate = _ref$initialToDate === void 0 ? INITIAL_TO_DATE : _ref$initialToDate,
    _ref$onTestDate = _ref.onTestDate,
    onTestDate = _ref$onTestDate === void 0 ? _dateFn.isYmd : _ref$onTestDate;
  var _refFromDate = (0, _uiApi.useRef)(),
    _refToDate = (0, _uiApi.useRef)();
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      getValues: function getValues() {
        return {
          fromDate: _getRefValue(_refFromDate).getValue(),
          toDate: _getRefValue(_refToDate).getValue()
        };
      },
      setValues: function setValues(fromDate, toDate) {
        _getRefValue(_refFromDate).setValue(fromDate);
        _getRefValue(_refToDate).setValue(toDate);
      },
      getValidation: function getValidation() {
        var datesMsg = [],
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
          datesMsg: datesMsg
        } : {
          isValid: true
        };
      },
      focusInput: function focusInput() {
        _getRefValue(_refFromDate).focus();
      },
      focusNotValidInput: function focusNotValidInput() {
        var _fromDate = _getRefValue(_refFromDate),
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
    };
  }, [msgOnNotValidFormat]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide["default"], {
    isShow: isShow,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row["default"], {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
        is: isShowLabels,
        caption: "From Date"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate["default"], {
        ref: _refFromDate,
        initialValue: initialFromDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row["default"], {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
        is: isShowLabels,
        caption: "To Date"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate["default"], {
        ref: _refToDate,
        initialValue: initialToDate,
        errorMsg: ERROR_FORMAT,
        onTest: onTestDate
      })]
    })]
  });
});
var _default = RowInputDatePeriod;
exports["default"] = _default;
//# sourceMappingURL=RowInputDatePeriod.js.map