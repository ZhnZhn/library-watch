'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WithValidation = require('../dialogs/WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Msg = require('../../constants/Msg');

var _Msg2 = _interopRequireDefault(_Msg);

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _ZhSelect = require('../zhnAtoms/ZhSelect');

var _ZhSelect2 = _interopRequireDefault(_ZhSelect);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

var actionCompleted = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType = _WatchActions.WatchActionTypes.ADD_ITEM;

var AddToWatchDialog = _react2.default.createClass(_extends({}, _WithValidation2.default, {

  displayName: 'AddToWatchDialog',
  propTypes: {
    isShow: _react2.default.PropTypes.bool.isRequired,
    data: _react2.default.PropTypes.object.isRequired,
    store: _react2.default.PropTypes.object,
    onClose: _react2.default.PropTypes.func.isRequired
  },
  getInitialState: function getInitialState() {
    var store = this.props.store;

    this.groupCaption = null;
    this.listCaption = null;
    return {
      groupOptions: store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componetWillUnmount: function componetWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    if (actionType === actionCompleted && data.forActionType === forActionType) {
      if (this.state.validationMessages.length > 0) {
        this.setState({ validationMessages: [] });
      }
      this.props.onClose();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      this.setState({ validationMessages: data.messages });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.isShow !== this.props.isShow) {
      var groups = nextProps.store.getWatchGroups();
      if (groups !== this.state.groupOptions) {
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({ groupOptions: groups, listOptions: [] });
      } else if (this.groupCaption) {
        var lists = nextProps.store.getWatchListsByGroup(this.groupCaption);
        if (lists !== this.state.listOptions) {
          this.listCaption = null;
          this.setState({ listOptions: lists });
        }
      }
    }
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },
  _handlerSelectGroup: function _handlerSelectGroup(group) {
    if (group && group.caption) {
      //const {store} = this.props;
      this.groupCaption = group.caption;
      if (group.lists) {
        this.setState({ listOptions: group.lists });
      } else {
        this.setState({ listOptions: [] });
      }
    } else {
      this.groupCaption = null;
    }
  },
  _handlerSelectList: function _handlerSelectList(list) {
    if (list && list.caption) {
      this.listCaption = list.caption;
    } else {
      this.listCaption = null;
    }
  },
  _handlerAdd: function _handlerAdd() {
    var validationMessages = this._getValidationMessages();
    if (validationMessages.isValid) {
      //onClose
      var data = this.props.data;
      var caption = data.caption;
      var config = data.config;
      var groupCaption = this.groupCaption;
      var listCaption = this.listCaption;


      _WatchActions2.default.addItem({ caption: caption, groupCaption: groupCaption, listCaption: listCaption, config: config });
    } else {
      this._updateValidationMessages(validationMessages);
    }
  },
  _getValidationMessages: function _getValidationMessages() {
    var msg = [];
    if (!this.groupCaption) {
      msg.push(_Msg2.default.NOT_SELECTED('Group'));
    }
    if (!this.listCaption) {
      msg.push(_Msg2.default.NOT_SELECTED('List'));
    }
    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _handlerClose: function _handlerClose() {
    if (this.state.validationMessages.length > 0) {
      this.setState({ validationMessages: [] });
    }
    this.props.onClose();
  },
  render: function render() {
    //onClose
    var _props = this.props;
    var isShow = _props.isShow;
    var data = _props.data;
    var caption = data.caption;
    var _data$config = data.config;
    var config = _data$config === undefined ? {} : _data$config;
    var descr = config.descr;
    var _state = this.state;
    var groupOptions = _state.groupOptions;
    var listOptions = _state.listOptions;
    var validationMessages = _state.validationMessages;
    var commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Add',
      onClick: this._handlerAdd
    })];
    return _react2.default.createElement(
      _ModalDialog2.default,
      {
        caption: 'Add To Watch List',
        isShow: isShow,
        commandButtons: commandButtons,
        onClose: this._handlerClose
      },
      _react2.default.createElement(
        'div',
        { style: styles.rowDiv, key: '1' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Group:'
        ),
        _react2.default.createElement(_ZhSelect2.default, {
          width: '250',
          options: groupOptions,
          onSelect: this._handlerSelectGroup
        })
      ),
      _react2.default.createElement(
        'div',
        { style: styles.rowDiv, key: '2' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'List:'
        ),
        _react2.default.createElement(_ZhSelect2.default, {
          width: '250',
          onSelect: this._handlerSelectList,
          options: listOptions
        })
      ),
      _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.rowDiv, { lineHeight: 2 }), key: '3' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Item:'
        ),
        _react2.default.createElement(
          'span',
          { style: { fontWeight: 'bold' } },
          caption
        )
      ),
      _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.rowDiv, { lineHeight: 2 }), key: '4' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Descr:'
        ),
        _react2.default.createElement(
          'span',
          { style: { fontWeight: 'bold', color: 'gray' } },
          descr
        )
      ),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        key: '5',
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = AddToWatchDialog;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-watch\AddToWatchDialog.js.map