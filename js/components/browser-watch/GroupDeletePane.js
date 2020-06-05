"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

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

var GroupDeletePane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GroupDeletePane, _Component);

  /*
  statis propTypes = {
    store : PropTypes.object,
    actionCompleted : PropTypes.string,
    forActionType : PropTypes.string,
    msgOnNotSelect : PropTypes.func,
    onDelete : PropTypes.func,
    onClose : PropTypes.func
  }
  */
  function GroupDeletePane(props) {
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

    _this._handlerSelectGroup = function (item) {
      if (item && item.caption) {
        _this.caption = item.caption;
      } else {
        _this.caption = null;
      }
    };

    _this._handlerClear = function () {
      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handlerDeleteGroup = function () {
      if (_this.caption) {
        _this.props.onDelete({
          caption: _this.caption
        });
      } else {
        _this.setState({
          validationMessages: [_this.props.msgOnNotSelect('Group')]
        });
      }
    };

    var _store = props.store;
    _this.caption = null;
    _this.state = {
      groupOptions: _store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = GroupDeletePane.prototype;

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
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_RowInputSelect["default"], {
      caption: "Group",
      options: groupOptions //isUpdateOptions={true}
      ,
      onSelect: this._handlerSelectGroup
    }), /*#__PURE__*/_react["default"].createElement(_ValidationMessagesFragment["default"], {
      validationMessages: validationMessages
    }), /*#__PURE__*/_react["default"].createElement("div", {
      style: S.COMMAND_DIV
    }, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
      isPrimary: true,
      caption: "Delete",
      timeout: 0,
      onClick: this._handlerDeleteGroup
    }), /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })));
  };

  return GroupDeletePane;
}(_react.Component);

var _default = GroupDeletePane;
exports["default"] = _default;
//# sourceMappingURL=GroupDeletePane.js.map