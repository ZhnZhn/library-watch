"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DialogCaption = _interopRequireDefault(require("./DialogCaption"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

//import PropTypes from 'prop-types'
var CL = {
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};
var STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  },
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #232F3B',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  COMMAND_DIV: {
    cursor: 'default',
    "float": 'right',
    marginTop: '8px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

var ModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ModalDialog, _Component);

  function ModalDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.wasClosing = false;
    _this.state = {};

    _this._handleClickDialog = function (event) {
      event.stopPropagation();
    };

    _this._renderCommandButton = function (commandButtons, onClose) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: STYLE.COMMAND_DIV
      }, commandButtons, /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
        key: "close",
        caption: "Close",
        title: "Click to close modal dialog",
        timeout: 0,
        onClick: onClose
      }));
    };

    return _this;
  }

  var _proto = ModalDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      if (nextProps.isNotUpdate) {
        return false;
      }
    }

    return true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    if (this.wasClosing) {
      setTimeout(function () {
        _this2.setState({});
      }, this.props.timeout);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        isWithButton = _this$props.isWithButton,
        caption = _this$props.caption,
        style = _this$props.style,
        children = _this$props.children,
        commandButtons = _this$props.commandButtons,
        onClose = _this$props.onClose;

    var _className, _style;

    if (this.wasClosing) {
      _style = STYLE.HIDE;
      this.wasClosing = false;
    } else {
      _className = isShow ? CL.SHOWING : CL.HIDING;
      _style = isShow ? STYLE.SHOW : STYLE.HIDE_POPUP;

      if (!isShow) {
        this.wasClosing = true;
      }
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _className,
      style: (0, _extends2["default"])({}, STYLE.ROOT_DIV, style, _style),
      onClick: this._handleClickDialog
    }, /*#__PURE__*/_react["default"].createElement(_DialogCaption["default"], {
      caption: caption,
      onClose: onClose
    }), /*#__PURE__*/_react["default"].createElement("div", null, children), isWithButton && this._renderCommandButton(commandButtons, onClose));
  };

  return ModalDialog;
}(_react.Component);

ModalDialog.defaultProps = {
  isWithButton: true,
  isNotUpdate: false,
  timeout: 450
};
var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map