"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _RowInputText = _interopRequireDefault(require("./RowInputText"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));

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

var GroupAddPane = /*#__PURE__*/function (_Component) {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText["default"], {
        ref: this._refInputText,
        caption: "Group"
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

  return GroupAddPane;
}(_react.Component);

var _default = GroupAddPane;
exports["default"] = _default;
//# sourceMappingURL=GroupAddPane.js.map