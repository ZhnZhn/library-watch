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

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _DatesFragment = require('./DatesFragment');

var _DatesFragment2 = _interopRequireDefault(_DatesFragment);

var _ValidationMessagesFragment = require('./ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sortOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Hot Tab", value: "hot" }, { caption: "Hot Week Tab", value: "week" }, { caption: "Hot Month Tab", value: "month" }];

var _initFromDate = _DateUtils2.default.getFromDate(1),
    _initToDate = _DateUtils2.default.getToDate(),
    _onTestDate = _DateUtils2.default.isValidDate;

var DialogType2 = _react2.default.createClass(_extends({}, _WithValidation2.default, {

  displayName: 'DialogType2',

  getInitialState: function getInitialState() {
    this.stock = null;
    this.sortByItem = {};
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
  _handlerSelectSortBy: function _handlerSelectSortBy(item) {
    this.sortByItem = item;
  },
  _handlerDefault: function _handlerDefault() {
    this.datesFragment.setValues(_initFromDate, _initToDate);
    this.setState({ validationMessages: [] });
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
        _fromDate = _DateUtils2.default.toUTCMillis(fromDate) / 1000,
        _toDate = _DateUtils2.default.toUTCMillis(toDate) / 1000,
        requestType = this.props.requestType,
        value = this.sortByItem.value;


    return {
      repo: repo, requestType: requestType,
      sort: value,
      fromdate: _fromDate,
      todate: _toDate
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
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: 'Sort By:',
        placeholder: 'Default: Hot Week Tab',
        options: _sortOptions,
        onSelect: this._handlerSelectSortBy
      }),
      _react2.default.createElement(_DatesFragment2.default, {
        ref: function ref(c) {
          return _this.datesFragment = c;
        },
        initFromDate: _initFromDate,
        initToDate: _initToDate
        //msgOnNotValidFormat={msgOnNotValidFormat}
        , onTestDate: _onTestDate
      }),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = DialogType2;
//# sourceMappingURL=DialogType2.js.map