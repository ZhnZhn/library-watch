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

var _class, _temp2;

//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputDate = require('../zhnAtoms/InputDate');

var _InputDate2 = _interopRequireDefault(_InputDate);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_FORMAT = "YYYY-MM-DD format must be",
    FROM_DATE = "From Date",
    TO_DATE = "To Date",
    ERROR_FROM_NEAR_TO = "From Date is near that To Date";

var DatesFragment = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(DatesFragment, _Component);

  function DatesFragment() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DatesFragment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DatesFragment.__proto__ || Object.getPrototypeOf(DatesFragment)).call.apply(_ref, [this].concat(args))), _this), _this._refFromDate = function (c) {
      return _this.fromDate = c;
    }, _this._refToDate = function (c) {
      return _this.toDate = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    initFromDate: PropTypes.string,
    initToDate: PropTypes.string,
    onTestDate: PropTypes.func,
    msgOnNotValidFormat: PropTypes.func
  }
  */


  (0, _createClass3.default)(DatesFragment, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          initFromDate = _props.initFromDate,
          initToDate = _props.initToDate,
          onTestDate = _props.onTestDate;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: _DialogStyles2.default.rowDiv },
          _react2.default.createElement(
            'span',
            { style: _DialogStyles2.default.labelSpan },
            'From Date:'
          ),
          _react2.default.createElement(_InputDate2.default, {
            ref: this._refFromDate,
            initValue: initFromDate,
            errorMsg: ERROR_FORMAT,
            onTest: onTestDate
          })
        ),
        _react2.default.createElement(
          'div',
          { style: _DialogStyles2.default.rowDiv },
          _react2.default.createElement(
            'span',
            { style: _DialogStyles2.default.labelSpan },
            'To Date:'
          ),
          _react2.default.createElement(_InputDate2.default, {
            ref: this._refToDate,
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
}(_react.Component), _class.defaultProps = {
  msgOnNotValidFormat: function msgOnNotValidFormat(item) {
    return item + ' is not in valid format';
  }
}, _temp2);
exports.default = DatesFragment;
//# sourceMappingURL=DatesFragment.js.map