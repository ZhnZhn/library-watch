"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withValidationLoad = _interopRequireDefault(require("../dialogs/decorators/withValidationLoad"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _class, _temp;

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

var AddToWatchDialog = (0, _withValidationLoad["default"])(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(AddToWatchDialog, _Component);

  /*
  propTypes : {
    isShow  : PropTypes.bool.isRequired,
    data    : PropTypes.object.isRequired,
    store   : PropTypes.object,
    onClose : PropTypes.func.isRequired
  },
  */
  function AddToWatchDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      if (actionType === actionCompleted && data.forActionType === forActionType) {
        if (_this.state.validationMessages.length > 0) {
          _this.setState({
            validationMessages: []
          });
        }

        _this.props.onClose();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
      }
    };

    _this._handlerSelectGroup = function (group) {
      if (group && group.caption) {
        _this.groupCaption = group.caption;

        if (group.lists) {
          _this.setState({
            listOptions: group.lists
          });
        } else {
          _this.setState({
            listOptions: []
          });
        }
      } else {
        _this.groupCaption = null;
      }
    };

    _this._handlerSelectList = function (list) {
      if (list && list.caption) {
        _this.listCaption = list.caption;
      } else {
        _this.listCaption = null;
      }
    };

    _this._handlerAdd = function () {
      var validationMessages = _this._crValidationMessages();

      if (validationMessages.isValid) {
        //onClose
        var data = _this.props.data,
            caption = data.caption,
            config = data.config,
            _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
            groupCaption = _assertThisInitialize.groupCaption,
            listCaption = _assertThisInitialize.listCaption;

        _WatchActions["default"].addItem({
          caption: caption,
          groupCaption: groupCaption,
          listCaption: listCaption,
          config: config
        });
      } else {
        _this._updateValidationMessages(validationMessages);
      }
    };

    _this._crValidationMessages = function () {
      var msg = [];

      if (!_this.groupCaption) {
        msg.push(_Msg["default"].NOT_SELECTED('Group'));
      }

      if (!_this.listCaption) {
        msg.push(_Msg["default"].NOT_SELECTED('List'));
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    _this._handlerClose = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }

      _this.props.onClose();
    };

    var store = props.store;
    _this.groupCaption = null;
    _this.listCaption = null;
    _this._commandButtons = [/*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
      key: "add",
      caption: "Add",
      title: "Click to add to watch list",
      timeout: 0,
      onClick: _this._handlerAdd
    })];
    _this.state = {
      groupOptions: store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    };
    return _this;
  }

  var _proto = AddToWatchDialog.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componetWillUnmount = function componetWillUnmount() {
    this.unsubscribe();
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
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
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
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
    return /*#__PURE__*/_react["default"].createElement(_ModalDialog["default"], {
      caption: "Add To Watch List",
      isShow: isShow,
      commandButtons: this._commandButtons,
      onClose: this._handlerClose
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: styles.rowDiv,
      key: "1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Group:"), /*#__PURE__*/_react["default"].createElement(_InputSelect["default"], {
      width: "250",
      options: groupOptions,
      onSelect: this._handlerSelectGroup
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: styles.rowDiv,
      key: "2"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: styles.labelSpan
    }, "List:"), /*#__PURE__*/_react["default"].createElement(_InputSelect["default"], {
      width: "250",
      options: listOptions,
      onSelect: this._handlerSelectList
    })), /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, S.LH),
      key: "3"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Item:"), /*#__PURE__*/_react["default"].createElement("span", {
      style: S.BOLD
    }, caption)), /*#__PURE__*/_react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, S.LH),
      key: "4"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Descr:"), /*#__PURE__*/_react["default"].createElement("span", {
      style: S.DESCR
    }, descr)), /*#__PURE__*/_react["default"].createElement(_ValidationMessagesFragment["default"], {
      key: "5",
      validationMessages: validationMessages
    }));
  };

  return AddToWatchDialog;
}(_react.Component), _temp)) || _class;

var _default = AddToWatchDialog;
exports["default"] = _default;
//# sourceMappingURL=AddToWatchDialog.js.map