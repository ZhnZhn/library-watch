'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _WithValidation = require('../dialogs/WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _WatchActions = require('../../flux/actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Msg = require('../../constants/Msg');

var _Msg2 = _interopRequireDefault(_Msg);

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _InputSelect = require('../zhn-select/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

//import PropTypes from 'prop-types'

var actionCompleted = _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed = _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType = _WatchActions.WatchActionTypes.ADD_ITEM;

var S = {
  BOLD: {
    fontWeight: 'bold'
  },
  LH: {
    lineHeight: 2
  },
  DESCR: {
    fontWeight: 'bold',
    color: 'gray'
  }
};

var AddToWatchDialog = (0, _createReactClass2.default)((0, _extends3.default)({}, _WithValidation2.default, {

  displayName: 'AddToWatchDialog',
  /*
  propTypes : {
    isShow  : PropTypes.bool.isRequired,
    data    : PropTypes.object.isRequired,
    store   : PropTypes.object,
    onClose : PropTypes.func.isRequired
  },
  */
  getInitialState: function getInitialState() {
    var store = this.props.store;

    this.groupCaption = null;
    this.listCaption = null;
    this._commandButtons = [_react2.default.createElement(_FlatButton2.default, {
      key: 'add',
      caption: 'Add',
      title: 'Click to add to watch list',
      timeout: 0,
      onClick: this._handlerAdd
    })];
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
      var data = this.props.data,
          caption = data.caption,
          config = data.config,
          groupCaption = this.groupCaption,
          listCaption = this.listCaption;


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
    var _props = this.props,
        isShow = _props.isShow,
        data = _props.data,
        caption = data.caption,
        _data$config = data.config,
        config = _data$config === undefined ? {} : _data$config,
        descr = config.descr,
        _state = this.state,
        groupOptions = _state.groupOptions,
        listOptions = _state.listOptions,
        validationMessages = _state.validationMessages;


    return _react2.default.createElement(
      _ModalDialog2.default,
      {
        caption: 'Add To Watch List',
        isShow: isShow,
        commandButtons: this._commandButtons,
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
        _react2.default.createElement(_InputSelect2.default, {
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
        _react2.default.createElement(_InputSelect2.default, {
          width: '250',
          options: listOptions,
          onSelect: this._handlerSelectList
        })
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, styles.rowDiv, S.LH), key: '3' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Item:'
        ),
        _react2.default.createElement(
          'span',
          { style: S.BOLD },
          caption
        )
      ),
      _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, styles.rowDiv, S.LH), key: '4' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Descr:'
        ),
        _react2.default.createElement(
          'span',
          { style: S.DESCR },
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
//# sourceMappingURL=AddToWatchDialog.js.map