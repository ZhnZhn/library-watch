"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
var CLASS = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};
var STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_BACKGROUND: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

var ModalDialogContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ModalDialogContainer, _Component);

  /*
  static propTypes = {
    isShow  : PropTypes.bool,
    timeout : PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    onClose : PropTypes.func
  }
  */
  function ModalDialogContainer(props) {
    var _this;

    _this = _Component.call(this) || this;
    _this.wasClosing = true;
    _this.state = {};
    return _this;
  }

  var _proto = ModalDialogContainer.prototype;

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
        children = _this$props.children,
        onClose = _this$props.onClose;

    var _className, _style;

    if (this.wasClosing) {
      _className = CLASS.INIT;
      _style = STYLE.HIDE;
      this.wasClosing = false;
    } else {
      _className = isShow ? CLASS.SHOWING : CLASS.HIDING;
      _style = isShow ? STYLE.SHOW : STYLE.HIDE_BACKGROUND;

      if (!isShow) {
        this.wasClosing = true;
      }
    }

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _className,
      style: _style,
      onClick: onClose,
      children: children
    });
  };

  return ModalDialogContainer;
}(_react.Component);

ModalDialogContainer.defaultProps = {
  timeout: 450,
  onClose: function onClose() {}
};
var _default = ModalDialogContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalDialogContainer.js.map