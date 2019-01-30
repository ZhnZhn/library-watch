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

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  COMMAND_DIV: {
    cursor: 'default',
    float: 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};
//import PropTypes from 'prop-types'

var GroupAddPane = function (_Component) {
  (0, _inherits3.default)(GroupAddPane, _Component);

  function GroupAddPane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GroupAddPane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GroupAddPane.__proto__ || Object.getPrototypeOf(GroupAddPane)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      validationMessages: []
    }, _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType;

      if (actionType === actionCompleted && data.forActionType === forActionType) {
        _this._handlerClear();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({ validationMessages: data.messages });
      }
    }, _this._handlerClear = function () {
      _this.inputText.setValue('');
      if (_this.state.validationMessages.length > 0) {
        _this.setState({ validationMessages: [] });
      }
    }, _this._handlerCreate = function () {
      var caption = _this.inputText.getValue();
      if (caption) {
        _this.props.onCreate({ caption: caption });
      } else {
        _this.inputText.setValue('');
        _this.setState({ validationMessages: [_this.props.msgOnIsEmptyName('Group')] });
      }
    }, _this._refInputText = function (c) {
      return _this.inputText = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnIsEmptyName : PropTypes.func,
    onCreate : PropTypes.func,
    onClose : PropTypes.func
  },
  */


  (0, _createClass3.default)(GroupAddPane, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var onClose = this.props.onClose,
          validationMessages = this.state.validationMessages;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RowInputText2.default, {
          ref: this._refInputText,
          caption: 'Group'
        }),
        _react2.default.createElement(_ValidationMessagesFragment2.default, {
          validationMessages: validationMessages
        }),
        _react2.default.createElement(
          'div',
          { style: S.COMMAND_DIV },
          _react2.default.createElement(_FlatButton2.default, {
            isPrimary: true,
            caption: 'Create',
            timeout: 0,
            onClick: this._handlerCreate
          }),
          _react2.default.createElement(_FlatButton2.default, {
            caption: 'Clear',
            timeout: 0,
            onClick: this._handlerClear
          }),
          _react2.default.createElement(_FlatButton2.default, {
            caption: 'Close',
            timeout: 0,
            onClick: onClose
          })
        )
      );
    }
  }]);
  return GroupAddPane;
}(_react.Component);

exports.default = GroupAddPane;
//# sourceMappingURL=GroupAddPane.js.map