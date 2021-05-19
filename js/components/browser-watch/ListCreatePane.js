"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _RowInputText = _interopRequireDefault(require("./RowInputText"));

var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S = {
  COMMAND_DIV: {
    cursor: 'default',
    "float": 'right',
    marginTop: 8,
    marginBottom: 10,
    marginRight: 4
  }
};

var ListCreatePane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ListCreatePane, _Component);

  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    actionFailed : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnNotSelect : PropTypes.func,
    msgOnIsEmptyName : PropTypes.func,
    onCreate : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  function ListCreatePane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        var isUpdateGroup = true;

        if (data.forActionType === forActionType) {
          _this._handlerClear();

          isUpdateGroup = false;
        }

        _this.setState({
          groupOptions: store.getWatchGroups(),
          isUpdateGroup: isUpdateGroup
        });
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages,
          isUpdateGroup: false
        });
      }
    };

    _this._handlerSelectGroup = function (item) {
      if (item && item.caption) {
        _this.captionGroup = item.caption;
      } else {
        _this.captionGroup = null;
      }
    };

    _this._handlerClear = function () {
      _this.inputText.setValue('');

      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: [],
          isUpdateGroup: false
        });
      }
    };

    _this._handlerCreate = function () {
      var captionList = _this.inputText.getValue();

      if (_this.captionGroup && captionList) {
        _this.props.onCreate({
          captionGroup: _this.captionGroup,
          captionList: captionList
        });
      } else {
        var _this$props2 = _this.props,
            msgOnNotSelect = _this$props2.msgOnNotSelect,
            msgOnIsEmptyName = _this$props2.msgOnIsEmptyName,
            msg = [];

        if (!_this.captionGroup) {
          msg.push(msgOnNotSelect('In Group'));
        }

        if (!captionList) {
          msg.push(msgOnIsEmptyName('List'));
        }

        _this.setState({
          validationMessages: msg,
          isUpdateGroup: false
        });
      }
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    var _store = props.store;
    _this.captionGroup = null;
    _this.state = {
      groupOptions: _store.getWatchGroups(),
      isUpdateGroup: false,
      validationMessages: []
    };
    return _this;
  }

  var _proto = ListCreatePane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var onClose = this.props.onClose,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
        caption: "In Group",
        options: groupOptions //isUpdateOptions={isUpdateGroup}
        ,
        onSelect: this._handlerSelectGroup
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText["default"], {
        ref: this._refInputText,
        caption: "List"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages["default"], {
        validationMessages: validationMessages
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S.COMMAND_DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          isPrimary: true,
          caption: "Create",
          timeout: 0,
          onClick: this._handlerCreate
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

  return ListCreatePane;
}(_react.Component);

var _default = ListCreatePane;
exports["default"] = _default;
//# sourceMappingURL=ListCreatePane.js.map