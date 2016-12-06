'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WithValidation = require('./WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _ValidationMessagesFragment = require('./ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType1 = _react2.default.createClass(_extends({}, _WithValidation2.default, {

  displayName: 'DialogType1',

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
  _handlerClear: function _handlerClear() {
    this.inputRepo.setValue('');
    this.setState({ validationMessages: [] });
  },
  _handlerLoad: function _handlerLoad() {
    this._handlerLoadWithValidation(this._createValidationMessages(), this._createLoadOption);
  },
  _createValidationMessages: function _createValidationMessages() {
    var msg = [];

    var value = this.inputRepo.getValue();
    if (!value) {
      msg = msg.concat(this.props.oneTitle + ' is required');
    }

    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _createLoadOption: function _createLoadOption() {
    var requestType = this.props.requestType;

    return {
      repo: this.inputRepo.getValue(),
      requestType: requestType
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
        validationMessages = this.state.validationMessages,
        _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Clear',
      onClick: this._handlerClear
    }), _react2.default.createElement(_ToolBarButton2.default, {
      key: 'b',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];


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
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = DialogType1;
//# sourceMappingURL=DialogType1.js.map