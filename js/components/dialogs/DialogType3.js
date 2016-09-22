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

var _sortOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Relevance", value: "relevance" }];

var _initFromDate = _DateUtils2.default.getFromDate(1),
    _initToDate = _DateUtils2.default.getToDate(),
    _onTestDate = _DateUtils2.default.isValidDate;

var DialogType3 = _react2.default.createClass(_extends({}, _WithValidation2.default, {

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
    var intitle = this.inputTwo.getValue();

    var _datesFragment$getVal2 = this.datesFragment.getValues();

    var fromDate = _datesFragment$getVal2.fromDate;
    var toDate = _datesFragment$getVal2.toDate;
    var _fromDate = _DateUtils2.default.toUTCMillis(fromDate) / 1000;
    var _toDate = _DateUtils2.default.toUTCMillis(toDate) / 1000;
    var requestType = this.props.requestType;
    var value = this.sortByItem.value;


    return {
      repo: repo, requestType: requestType, intitle: intitle,
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

    var _props = this.props;
    var caption = _props.caption;
    var isShow = _props.isShow;
    var onShow = _props.onShow;
    var oneTitle = _props.oneTitle;
    var onePlaceholder = _props.onePlaceholder;
    var twoTitle = _props.twoTitle;
    var twoPlaceholder = _props.twoPlaceholder;
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
      _react2.default.createElement(_RowInputText2.default, {
        ref: function ref(c) {
          return _this.inputTwo = c;
        },
        caption: twoTitle,
        placeholder: twoPlaceholder
      }),
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: 'Sort By:',
        placeholder: 'Default: Activity',
        options: _sortOptions,
        onSelect: this._handlerSelectSortBy
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

exports.default = DialogType3;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DialogType3.js.map