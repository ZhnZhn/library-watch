"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _SelectGroupList = _interopRequireDefault(require("./SelectGroupList"));

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

var ListDeletePane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ListDeletePane, _Component);

  /*
  static propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    forActionType : PropTypes.string,
    onRename : PropTypes.func,
    onClose : PropTypes.func
  },
  */
  function ListDeletePane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          forActionType = _this$props.forActionType,
          store = _this$props.store;

      if (actionType === actionCompleted) {
        if (data.forActionType === forActionType) {
          _this._handlerClear();
        }

        _this.setState({
          groupOptions: store.getWatchGroups()
        });
      }
    };

    _this._handlerClear = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handlerDelete = function () {
      var _this$selectGroupList = _this.selectGroupList.getValue(),
          captionGroup = _this$selectGroupList.captionGroup,
          captionList = _this$selectGroupList.captionList;

      if (captionGroup && captionList) {
        _this.props.onDelete({
          captionGroup: captionGroup,
          captionList: captionList
        });
      } else {
        var msgOnNotSelect = _this.props.msgOnNotSelect,
            msg = [];

        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }

        if (!captionList) {
          msg.push(msgOnNotSelect('List'));
        }

        _this.setState({
          validationMessages: msg
        });
      }
    };

    _this._refGroupList = function (c) {
      return _this.selectGroupList = c;
    };

    var _store = props.store;
    _this.state = {
      groupOptions: _store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = ListDeletePane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        store = _this$props2.store,
        onClose = _this$props2.onClose,
        _this$state = this.state,
        groupOptions = _this$state.groupOptions,
        validationMessages = _this$state.validationMessages;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectGroupList["default"], {
        ref: this._refGroupList,
        store: store,
        groupCaption: "In Group",
        groupOptions: groupOptions,
        listCaption: "List"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages["default"], {
        validationMessages: validationMessages
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: S.COMMAND_DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          isPrimary: true,
          caption: "Delete",
          timeout: 0,
          onClick: this._handlerDelete
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

  return ListDeletePane;
}(_react.Component);

var _default = ListDeletePane;
exports["default"] = _default;
//# sourceMappingURL=ListDeletePane.js.map