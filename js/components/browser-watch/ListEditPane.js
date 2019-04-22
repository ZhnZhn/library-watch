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

var _FragmentSelectGroupList = require('./FragmentSelectGroupList');

var _FragmentSelectGroupList2 = _interopRequireDefault(_FragmentSelectGroupList);

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

var ListEditPane = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ListEditPane, _Component);

  /*
  static propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    forActionType : PropTypes.string,
    onRename : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  function ListEditPane(props) {
    (0, _classCallCheck3.default)(this, ListEditPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ListEditPane.__proto__ || Object.getPrototypeOf(ListEditPane)).call(this, props));

    _initialiseProps.call(_this);

    var store = props.store;

    _this.state = {
      groupOptions: store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    };
    return _this;
  }

  (0, _createClass3.default)(ListEditPane, [{
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
      var _props = this.props,
          store = _props.store,
          onClose = _props.onClose,
          _state = this.state,
          groupOptions = _state.groupOptions,
          validationMessages = _state.validationMessages;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_FragmentSelectGroupList2.default, {
          ref: this._refGroupList,
          store: store,
          groupCaption: 'In Group',
          groupOptions: groupOptions,
          listCaption: 'List From'
        }),
        _react2.default.createElement(_RowInputText2.default, {
          ref: this._refInputText,
          caption: 'List To'
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
  return ListEditPane;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._onStore = function (actionType, data) {
    var _props2 = _this2.props,
        actionCompleted = _props2.actionCompleted,
        actionFailed = _props2.actionFailed,
        forActionType = _props2.forActionType,
        store = _props2.store;

    if (actionType === actionCompleted) {
      if (data.forActionType === forActionType) {
        _this2._handlerClear();
      }
      _this2.setState({ groupOptions: store.getWatchGroups() });
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      _this2.setState({ validationMessages: data.messages });
    }
  };

  this._handlerClear = function (isFullClear) {
    _this2.inputText.setValue('');
    if (_this2.state.validationMessages.length > 0) {
      _this2.setState({ validationMessages: [] });
    }
  };

  this._handlerRename = function () {
    var _selectGroupList$getV = _this2.selectGroupList.getValue(),
        captionGroup = _selectGroupList$getV.captionGroup,
        captionList = _selectGroupList$getV.captionList,
        captionListTo = _this2.inputText.getValue();

    if (captionGroup && captionList && captionListTo) {
      _this2.props.onRename({
        captionGroup: captionGroup,
        captionListFrom: captionList,
        captionListTo: captionListTo
      });
    } else {
      var _props3 = _this2.props,
          msgOnIsEmptyName = _props3.msgOnIsEmptyName,
          msgOnNotSelect = _props3.msgOnNotSelect,
          msg = [];

      if (!captionGroup) {
        msg.push(msgOnNotSelect('Group'));
      }
      if (!captionList) {
        msg.push(msgOnNotSelect('List From'));
      }
      if (!captionListTo) {
        msg.push(msgOnIsEmptyName('List To'));
      }
      _this2.setState({ validationMessages: msg });
    }
  };

  this._refGroupList = function (c) {
    return _this2.selectGroupList = c;
  };

  this._refInputText = function (c) {
    return _this2.inputText = c;
  };
}, _temp);
exports.default = ListEditPane;
//# sourceMappingURL=ListEditPane.js.map