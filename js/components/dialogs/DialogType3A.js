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
  _handlerDefault: function _handlerDefault() {
    this.datesFragment.setValues(_initFromDate, _initToDate);
  },
  _handlerClear: function _handlerClear() {
    this.inputRepo.setValue('');
    this.setState({ validationMessages: [] });
  },
  _handlerLoad: function _handlerLoad() {
    this._handlerLoadWithValidation(this._createValidationMessages(), this._createLoadOption);
  },
  _createValidationMessages: function _createValidationMessages() {
    var msg = [];

    var repo = this.inputRepo.getValue();
    if (!repo) {
      msg = msg.concat(this.props.oneTitle + ' is required');
    }

    var _datesFragment$getVal = this.datesFragment.getValidation(),
        isValid = _datesFragment$getVal.isValid,
        datesMsg = _datesFragment$getVal.datesMsg;

    if (!isValid) {
      msg = msg.concat(datesMsg);
    }

    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _createLoadOption: function _createLoadOption() {
    var repo = this.inputRepo.getValue(),
        _datesFragment$getVal2 = this.datesFragment.getValues(),
        fromDate = _datesFragment$getVal2.fromDate,
        toDate = _datesFragment$getVal2.toDate,
        requestType = this.props.requestType;


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

    var _props = this.props,
        caption = _props.caption,
        isShow = _props.isShow,
        onShow = _props.onShow,
        oneTitle = _props.oneTitle,
        onePlaceholder = _props.onePlaceholder,
        _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Default',
      onClick: this._handlerDefault
    }), _react2.default.createElement(_ToolBarButton2.default, {
      key: 'b',
      type: 'TypeC',
      caption: 'Clear',
      onClick: this._handlerClear
    }), _react2.default.createElement(_ToolBarButton2.default, {
      key: 'c',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })],
        validationMessages = this.state.validationMessages;


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
//# sourceMappingURL=DialogType3A.js.map