"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _WithValidation = _interopRequireDefault(require("../dialogs/WithValidation"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

//import PropTypes from 'prop-types'
var styles = _DialogStyles["default"];
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
var AddToWatchDialog = (0, _createReactClass["default"])((0, _extends2["default"])({}, _WithValidation["default"], {
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
    this._commandButtons = [_react["default"].createElement(_FlatButton["default"], {
      key: "add",
      caption: "Add",
      title: "Click to add to watch list",
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
        this.setState({
          validationMessages: []
        });
      }

      this.props.onClose();
    } else if (actionType === actionFailed && data.forActionType === forActionType) {
      this.setState({
        validationMessages: data.messages
      });
    }
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.isShow !== this.props.isShow) {
      var groups = nextProps.store.getWatchGroups();

      if (groups !== this.state.groupOptions) {
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({
          groupOptions: groups,
          listOptions: []
        });
      } else if (this.groupCaption) {
        var lists = nextProps.store.getWatchListsByGroup(this.groupCaption);

        if (lists !== this.state.listOptions) {
          this.listCaption = null;
          this.setState({
            listOptions: lists
          });
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
        this.setState({
          listOptions: group.lists
        });
      } else {
        this.setState({
          listOptions: []
        });
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

      _WatchActions["default"].addItem({
        caption: caption,
        groupCaption: groupCaption,
        listCaption: listCaption,
        config: config
      });
    } else {
      this._updateValidationMessages(validationMessages);
    }
  },
  _getValidationMessages: function _getValidationMessages() {
    var msg = [];

    if (!this.groupCaption) {
      msg.push(_Msg["default"].NOT_SELECTED('Group'));
    }

    if (!this.listCaption) {
      msg.push(_Msg["default"].NOT_SELECTED('List'));
    }

    msg.isValid = msg.length === 0 ? true : false;
    return msg;
  },
  _handlerClose: function _handlerClose() {
    if (this.state.validationMessages.length > 0) {
      this.setState({
        validationMessages: []
      });
    }

    this.props.onClose();
  },
  render: function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        data = _this$props.data,
        caption = data.caption,
        _data$config = data.config,
        config = _data$config === void 0 ? {} : _data$config,
        descr = config.descr,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        listOptions = _this$state.listOptions,
        validationMessages = _this$state.validationMessages;
    return _react["default"].createElement(_ModalDialog["default"], {
      caption: "Add To Watch List",
      isShow: isShow,
      commandButtons: this._commandButtons,
      onClose: this._handlerClose
    }, _react["default"].createElement("div", {
      style: styles.rowDiv,
      key: "1"
    }, _react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Group:"), _react["default"].createElement(_InputSelect["default"], {
      width: "250",
      options: groupOptions,
      onSelect: this._handlerSelectGroup
    })), _react["default"].createElement("div", {
      style: styles.rowDiv,
      key: "2"
    }, _react["default"].createElement("span", {
      style: styles.labelSpan
    }, "List:"), _react["default"].createElement(_InputSelect["default"], {
      width: "250",
      options: listOptions,
      onSelect: this._handlerSelectList
    })), _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, {}, S.LH),
      key: "3"
    }, _react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Item:"), _react["default"].createElement("span", {
      style: S.BOLD
    }, caption)), _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, {}, S.LH),
      key: "4"
    }, _react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Descr:"), _react["default"].createElement("span", {
      style: S.DESCR
    }, descr)), _react["default"].createElement(_ValidationMessagesFragment["default"], {
      key: "5",
      validationMessages: validationMessages
    }));
  }
}));
var _default = AddToWatchDialog;
exports["default"] = _default;
//# sourceMappingURL=AddToWatchDialog.js.map