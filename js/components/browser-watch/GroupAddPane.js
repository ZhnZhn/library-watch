"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RowInputText = _interopRequireDefault(require("./RowInputText"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _ValidationMessagesFragment = _interopRequireDefault(require("../zhn-moleculs/ValidationMessagesFragment"));

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

var GroupAddPane =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GroupAddPane, _Component);

  function GroupAddPane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      validationMessages: []
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          actionCompleted = _this$props.actionCompleted,
          actionFailed = _this$props.actionFailed,
          forActionType = _this$props.forActionType;

      if (actionType === actionCompleted && data.forActionType === forActionType) {
        _this._handlerClear();
      } else if (actionType === actionFailed && data.forActionType === forActionType) {
        _this.setState({
          validationMessages: data.messages
        });
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

    _this._handlerCreate = function () {
      var caption = _this.inputText.getValue();

      if (caption) {
        _this.props.onCreate({
          caption: caption
        });
      } else {
        _this.inputText.setValue('');

        _this.setState({
          validationMessages: [_this.props.msgOnIsEmptyName('Group')]
        });
      }
    };

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    return _this;
  }

  var _proto = GroupAddPane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var onClose = this.props.onClose,
        validationMessages = this.state.validationMessages;
    return _react["default"].createElement("div", null, _react["default"].createElement(_RowInputText["default"], {
      ref: this._refInputText,
      caption: "Group"
    }), _react["default"].createElement(_ValidationMessagesFragment["default"], {
      validationMessages: validationMessages
    }), _react["default"].createElement("div", {
      style: S.COMMAND_DIV
    }, _react["default"].createElement(_FlatButton["default"], {
      isPrimary: true,
      caption: "Create",
      timeout: 0,
      onClick: this._handlerCreate
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

  return GroupAddPane;
}(_react.Component);

var _default = GroupAddPane;
exports["default"] = _default;
//# sourceMappingURL=GroupAddPane.js.map