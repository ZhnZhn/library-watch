"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _InputDate = _interopRequireDefault(require("../../zhn-atoms/InputDate"));

var _DialogStyles = _interopRequireDefault(require("../../styles/DialogStyles"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _jsxRuntime = require("react/jsx-runtime");

var ERROR_FORMAT = "YYYY-MM-DD format must be",
    FROM_DATE = "From Date",
    TO_DATE = "To Date",
    ERROR_FROM_NEAR_TO = "From Date is near that To Date";

var Dates = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Dates, _Component);

  function Dates() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refFromDate = function (c) {
      return _this.fromDate = c;
    };

    _this._refToDate = function (c) {
      return _this.toDate = c;
    };

    return _this;
  }

  var _proto = Dates.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isShowLabels = _this$props.isShowLabels,
        initFromDate = _this$props.initFromDate,
        initToDate = _this$props.initToDate,
        onTestDate = _this$props.onTestDate;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: _DialogStyles["default"].rowDiv,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
          is: isShowLabels,
          style: _DialogStyles["default"].labelSpan,
          caption: "From Date"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate["default"], {
          ref: this._refFromDate,
          initValue: initFromDate,
          errorMsg: ERROR_FORMAT,
          onTest: onTestDate
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: _DialogStyles["default"].rowDiv,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Caption["default"], {
          is: isShowLabels,
          style: _DialogStyles["default"].labelSpan,
          caption: "To Date"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputDate["default"], {
          ref: this._refToDate,
          initValue: initToDate,
          errorMsg: ERROR_FORMAT,
          onTest: onTestDate
        })]
      })]
    });
  };

  _proto.getValues = function getValues() {
    return {
      fromDate: this.fromDate.getValue(),
      toDate: this.toDate.getValue()
    };
  };

  _proto.setValues = function setValues(fromDate, toDate) {
    this.fromDate.setValue(fromDate);
    this.toDate.setValue(toDate);
  };

  _proto.getValidation = function getValidation() {
    var msgOnNotValidFormat = this.props.msgOnNotValidFormat,
        datesMsg = [];

    if (!this.fromDate.isValid()) {
      datesMsg.push(msgOnNotValidFormat(FROM_DATE));
    }

    if (!this.toDate.isValid()) {
      datesMsg.push(msgOnNotValidFormat(TO_DATE));
    }

    if (this.fromDate.getValue().trim() > this.toDate.getValue().trim()) {
      datesMsg.push(ERROR_FROM_NEAR_TO);
    }

    if (datesMsg.length > 0) {
      return {
        isValid: false,
        datesMsg: datesMsg
      };
    }

    return {
      isValid: true
    };
  };

  _proto.focusInput = function focusInput() {
    this.fromDate.focusInput();
  };

  _proto.focusNotValidInput = function focusNotValidInput() {
    if (!this.fromDate.isValid()) {
      this.fromDate.focusInput();
      return true;
    }

    if (!this.toDate.isValid()) {
      this.toDate.focusInput();
      return true;
    }

    return false;
  };

  return Dates;
}(_react.Component);

Dates.defaultProps = {
  isShowLabels: true,
  msgOnNotValidFormat: function msgOnNotValidFormat(item) {
    return item + " is not in valid format";
  }
};
var _default = Dates;
exports["default"] = _default;
//# sourceMappingURL=Dates.js.map