'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputDate = require('../zhnAtoms/InputDate');

var _InputDate2 = _interopRequireDefault(_InputDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROW_DIV: {
    margin: '5px'
  },

  LABEL_SPAN: {
    color: '#1B75BB',
    display: 'inline-block',
    textAlign: 'right',
    width: '120px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var ERROR_FORMAT = "YYYY-MM-DD format must be",
    FROM_DATE = "From Date",
    TO_DATE = "To Date",
    ERROR_FROM_NEAR_TO = "From Date is near that To Date";

var DatesFragment = _react2.default.createClass({
  displayName: 'DatesFragment',
  getDefaultProps: function getDefaultProps() {
    return {
      msgOnNotValidFormat: function msgOnNotValidFormat(item) {
        return item + ' is not in valid format';
      }
    };
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var initFromDate = _props.initFromDate;
    var initToDate = _props.initToDate;
    var onTestDate = _props.onTestDate;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: STYLE.ROW_DIV },
        _react2.default.createElement(
          'span',
          { style: STYLE.LABEL_SPAN },
          'From Date:'
        ),
        _react2.default.createElement(_InputDate2.default, {
          ref: function ref(c) {
            return _this.fromDate = c;
          },
          initValue: initFromDate,
          errorMsg: ERROR_FORMAT,
          onTest: onTestDate
        })
      ),
      _react2.default.createElement(
        'div',
        { style: STYLE.ROW_DIV },
        _react2.default.createElement(
          'span',
          { style: STYLE.LABEL_SPAN },
          'To Date:'
        ),
        _react2.default.createElement(_InputDate2.default, {
          ref: function ref(c) {
            return _this.toDate = c;
          },
          initValue: initToDate,
          errorMsg: ERROR_FORMAT,
          onTest: onTestDate
        })
      )
    );
  },
  getValues: function getValues() {
    return {
      fromDate: this.fromDate.getValue(),
      toDate: this.toDate.getValue()
    };
  },
  setValues: function setValues(fromDate, toDate) {
    this.fromDate.setValue(fromDate);
    this.toDate.setValue(toDate);
  },
  getValidation: function getValidation() {
    var msgOnNotValidFormat = this.props.msgOnNotValidFormat;
    var datesMsg = [];
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
      return { isValid: false, datesMsg: datesMsg };
    }
    return { isValid: true };
  },
  focusInput: function focusInput() {
    this.fromDate.focusInput();
  },
  focusNotValidInput: function focusNotValidInput() {
    if (!this.fromDate.isValid()) {
      this.fromDate.focusInput();
      return true;
    }
    if (!this.toDate.isValid()) {
      this.toDate.focusInput();
      return true;
    }
    return false;
  }
});

exports.default = DatesFragment;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DatesFragment.js.map