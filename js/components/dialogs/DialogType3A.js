'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _WithValidation = require('./WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _DatesFragment = require('./DatesFragment');

var _DatesFragment2 = _interopRequireDefault(_DatesFragment);

var _ValidationMessagesFragment = require('./ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _initFromDate = _DateUtils2.default.getFromDate(1),
    _initToDate = _DateUtils2.default.getToDate(),
    _onTestDate = _DateUtils2.default.isValidDate;

var DialogType3A = _react2.default.createClass(_extends({}, _WithValidation2.default, {

  displayName: 'DialogType3A',

  getInitialState: function getInitialState() {
    this.stock = null;

    return {
      validationMessages: []
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }
    return true;
  },
  _handlerLoad: function _handlerLoad() {
    this._handlerLoadWithValidation(this._createValidationMessages(), this._createLoadOption);
  },
  _createValidationMessages: function _createValidationMessages() {
    var msg = [];

    var _datesFragment$getVal = this.datesFragment.getValidation();

    var isValid = _datesFragment$getVal.isValid;
    var datesMsg = _datesFragment$getVal.datesMsg;

    if (!isValid) {
      msg = msg.concat(datesMsg);
    }

    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _createLoadOption: function _createLoadOption() {
    var repo = this.inputRepo.getValue();

    var _datesFragment$getVal2 = this.datesFragment.getValues();

    var fromDate = _datesFragment$getVal2.fromDate;
    var toDate = _datesFragment$getVal2.toDate;
    var requestType = this.props.requestType;


    return {
      repo: repo, requestType: requestType,
      fromDate: fromDate, toDate: toDate
    };
  },
  _handlerClose: function _handlerClose() {
    this._handlerCloseWithValidation(this._createValidationMessages);
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var caption = _props.caption;
    var isShow = _props.isShow;
    var onShow = _props.onShow;
    var oneTitle = _props.oneTitle;
    var onePlaceholder = _props.onePlaceholder;
    var _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];
    var validationMessages = this.state.validationMessages;


    return _react2.default.createElement(
      _Dialog2.default,
      {
        caption: caption,
        isShow: isShow,
        commandButtons: _commandButtons,
        onShowChart: onShow,
        onClose: this._handlerClose
      },
      _react2.default.createElement(_RowInputText2.default, {
        ref: function ref(c) {
          return _this.inputRepo = c;
        },
        caption: oneTitle,
        placeholder: onePlaceholder
      }),
      _react2.default.createElement(_DatesFragment2.default, {
        ref: function ref(c) {
          return _this.datesFragment = c;
        },
        initFromDate: _initFromDate,
        initToDate: _initToDate,
        onTestDate: _onTestDate
      }),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = DialogType3A;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DialogType3A.js.map