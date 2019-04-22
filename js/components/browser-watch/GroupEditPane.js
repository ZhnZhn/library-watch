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

var _class, _temp, _initialiseProps;
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _ValidationMessagesFragment = require('../zhn-moleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

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

var GroupEditPane = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(GroupEditPane, _Component);

  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnIsEmptyName : PropTypes.func,
    msgOnNotSelect : PropTypes.func,
    onRename : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  function GroupEditPane(props) {
    (0, _classCallCheck3.default)(this, GroupEditPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GroupEditPane.__proto__ || Object.getPrototypeOf(GroupEditPane)).call(this, props));

    _initialiseProps.call(_this);

    var store = props.store;

    _this.captionFrom = null;
    _this.state = {
      groupOptions: store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(GroupEditPane, [{
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
          _state = this.state,
          groupOptions = _state.groupOptions,
          validationMessages = _state.validationMessages;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_RowInputSelect2.default, {
          caption: 'Group From',
          options: groupOptions,
          onSelect: this._handlerSelectGroup
        }),
        _react2.default.createElement(_RowInputText2.default, {
          ref: this._refInputText,
          caption: 'Group To'
        }),
        _react2.default.createElement(_ValidationMessagesFragment2.default, {
          validationMessages: validationMessages
        }),
        _react2.default.createElement(
          'div',
          { style: S.COMMAND_DIV },
          _react2.default.createElement(_FlatButton2.default, {
            isPrimary: true,
            caption: 'Rename',
            timeout: 0,
            onClick: this._handlerRename
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
  return GroupEditPane;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._onStore = function (actionType, data) {
    var _props = _this2.props,
        actionCompleted = _props.actionCompleted,
        actionFailed = _props.actionFailed,
        forActionType = _props.forActionType,
        store = _props.store;

    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _this2._handlerClear();
      }
      _this2.setState({ groupOptions: store.getWatchGroups() });
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      _this2.setState({ validationMessages: data.messages });
    }
  };

  this._handlerSelectGroup = function (item) {
    if (item && item.caption) {
      _this2.captionFrom = item.caption;
    } else {
      _this2.captionFrom = null;
    }
  };

  this._handlerClear = function () {
    _this2.inputText.setValue('');
    if (_this2.state.validationMessages.length > 0) {
      _this2.setState({ validationMessages: [] });
    }
  };

  this._handlerRename = function () {
    var captionTo = _this2.inputText.getValue();
    if (captionTo && _this2.captionFrom) {
      _this2.props.onRename({ captionFrom: _this2.captionFrom, captionTo: captionTo });
    } else {
      var msg = [];
      if (!_this2.captionFrom) {
        msg.push(_this2.props.msgOnNotSelect('Group From'));
      }
      if (!captionTo) {
        msg.push(_this2.props.msgOnIsEmptyName('Group To'));
      }
      _this2.setState({ validationMessages: msg });
    }
  };

  this._refInputText = function (c) {
    return _this2.inputText = c;
  };
}, _temp);
exports.default = GroupEditPane;
//# sourceMappingURL=GroupEditPane.js.map