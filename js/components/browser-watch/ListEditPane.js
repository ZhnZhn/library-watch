"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _FragmentSelectGroupList = _interopRequireDefault(require("./FragmentSelectGroupList"));

var _RowInputText = _interopRequireDefault(require("./RowInputText"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S = {
  COMMAND_DIV: {
    cursor: 'default',
    "float": 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

var ListEditPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ListEditPane, _Component);

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
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        if (data.forActionType === forActionType) {
          _this._handlerClear();
        }

        _this.setState({
          groupOptions: store.getWatchGroups()
        });
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
      }
    };

    _this._handlerClear = function (isFullClear) {
      _this.inputText.setValue('');

      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handlerRename = function () {
      var _this$selectGroupList = _this.selectGroupList.getValue(),
          captionGroup = _this$selectGroupList.captionGroup,
          captionList = _this$selectGroupList.captionList,
          captionListTo = _this.inputText.getValue();

      if (captionGroup && captionList && captionListTo) {
        _this.props.onRename({
          captionGroup: captionGroup,
          captionListFrom: captionList,
          captionListTo: captionListTo
        });
      } else {
        var _this$props2 = _this.props,
            msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
            msgOnNotSelect = _this$props2.msgOnNotSelect,
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

        _this.setState({
          validationMessages: msg
        });
      }
    };

    _this._refGroupList = function (c) {
      return _this.selectGroupList = c;
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    var _store = props.store;
    _this.state = {
      groupOptions: _store.getWatchGroups(),
      listOptions: [],
      validationMessages: []
    };
    return _this;
  }

  var _proto = ListEditPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        store = _this$props3.store,
        onClose = _this$props3.onClose,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FragmentSelectGroupList["default"], {
        ref: this._refGroupList,
        store: store,
        groupCaption: "In Group",
        groupOptions: groupOptions,
        listCaption: "List From"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText["default"], {
        ref: this._refInputText,
        caption: "List To"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessagesFragment["default"], {
        validationMessages: validationMessages
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S.COMMAND_DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          isPrimary: true,
          caption: "Rename",
          timeout: 0,
          onClick: this._handlerRename
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          caption: "Clear",
          timeout: 0,
          onClick: this._handlerClear
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          caption: "Close",
          timeout: 0,
          onClick: onClose
        })]
      })]
    });
  };

  return ListEditPane;
}(_react.Component);

var _default = ListEditPane;
exports["default"] = _default;
//# sourceMappingURL=ListEditPane.js.map