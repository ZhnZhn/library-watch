'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var DatesFragment = function (_Component) {
  (0, _inherits3.default)(DatesFragment, _Component);

  function DatesFragment() {
    (0, _classCallCheck3.default)(this, DatesFragment);
    return (0, _possibleConstructorReturn3.default)(this, (DatesFragment.__proto__ || Object.getPrototypeOf(DatesFragment)).apply(this, arguments));
  }

  (0, _createClass3.default)(DatesFragment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          initFromDate = _props.initFromDate,
          initToDate = _props.initToDate,
          onTestDate = _props.onTestDate;

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
              return _this2.fromDate = c;
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
              return _this2.toDate = c;
            },
            initValue: initToDate,
            errorMsg: ERROR_FORMAT,
            onTest: onTestDate
          })
        )
      );
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      return {
        fromDate: this.fromDate.getValue(),
        toDate: this.toDate.getValue()
      };
    }
  }, {
    key: 'setValues',
    value: function setValues(fromDate, toDate) {
      this.fromDate.setValue(fromDate);
      this.toDate.setValue(toDate);
    }
  }, {
    key: 'getValidation',
    value: function getValidation() {
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
        return { isValid: false, datesMsg: datesMsg };
      }
      return { isValid: true };
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.fromDate.focusInput();
    }
  }, {
    key: 'focusNotValidInput',
    value: function focusNotValidInput() {
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
  }]);
  return DatesFragment;
}(_react.Component);

DatesFragment.defaultProps = {
  msgOnNotValidFormat: function msgOnNotValidFormat(item) {
    return item + ' is not in valid format';
  }
};
process.env.NODE_ENV !== "production" ? DatesFragment.propTypes = {
  initFromDate: _react.PropTypes.string,
  initToDate: _react.PropTypes.string,
  onTestDate: _react.PropTypes.func,
  msgOnNotValidFormat: _react.PropTypes.func
} : void 0;
exports.default = DatesFragment;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DatesFragment.js.map