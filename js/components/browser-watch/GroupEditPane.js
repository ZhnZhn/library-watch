"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _RowInputText = _interopRequireDefault(require("./RowInputText"));

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

var GroupEditPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GroupEditPane, _Component);

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

    _this._handlerSelectGroup = function (item) {
      if (item && item.caption) {
        _this.captionFrom = item.caption;
      } else {
        _this.captionFrom = null;
      }
    };

    _this._handlerClear = function () {
      _this.inputText.setValue('');

      if (_this.state.validationMessages.length > 0) {
        _this.setState({
          validationMessages: []
        });
      }
    };

    _this._handlerRename = function () {
      var captionTo = _this.inputText.getValue();

      if (captionTo && _this.captionFrom) {
        _this.props.onRename({
          captionFrom: _this.captionFrom,
          captionTo: captionTo
        });
      } else {
        var msg = [];

        if (!_this.captionFrom) {
          msg.push(_this.props.msgOnNotSelect('Group From'));
        }

        if (!captionTo) {
          msg.push(_this.props.msgOnIsEmptyName('Group To'));
        }

        _this.setState({
          validationMessages: msg
        });
      }
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    var _store = props.store;
    _this.captionFrom = null;
    _this.state = {
      groupOptions: _store.getWatchGroups(),
      validationMessages: []
    };
    return _this;
  }

  var _proto = GroupEditPane.prototype;

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
    return _react["default"].createElement("div", null, _react["default"].createElement(_RowInputSelect["default"], {
      caption: "Group From",
      options: groupOptions,
      onSelect: this._handlerSelectGroup
    }), _react["default"].createElement(_RowInputText["default"], {
      ref: this._refInputText,
      caption: "Group To"
    }), _react["default"].createElement(_ValidationMessagesFragment["default"], {
      validationMessages: validationMessages
    }), _react["default"].createElement("div", {
      style: S.COMMAND_DIV
    }, _react["default"].createElement(_FlatButton["default"], {
      isPrimary: true,
      caption: "Rename",
      timeout: 0,
      onClick: this._handlerRename
    }), _react["default"].createElement(_FlatButton["default"], {
      caption: "Clear",
      timeout: 0,
      onClick: this._handlerClear
    }), _react["default"].createElement(_FlatButton["default"], {
      caption: "Close",
      timeout: 0,
      onClick: onClose
    })));
  };

  return GroupEditPane;
}(_react.Component);

var _default = GroupEditPane;
exports["default"] = _default;
//# sourceMappingURL=GroupEditPane.js.map