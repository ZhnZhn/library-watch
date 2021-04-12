"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var _jsxRuntime = require("react/jsx-runtime");

var styles = _DialogStyles["default"];
var STYLE = {
  CAPTION: {
    width: '400px',
    paddingLeft: '10px',
    color: 'rgba(164, 135, 212,1)',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 2
  },
  DESCR: {
    color: 'gray',
    width: '400px',
    paddingLeft: '10px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre'
  }
};

var InfoDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InfoDialog, _Component);

  function InfoDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = InfoDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      caption: PropTypes.string,
      descr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */
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
        onClose = _this$props.onClose,
        caption = data.caption,
        descr = data.descr;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
      caption: "Information",
      isShow: isShow,
      onClose: onClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: styles.rowDiv,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: STYLE.CAPTION,
          children: caption
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: styles.rowDiv,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: STYLE.DESCR,
          children: descr
        })
      })]
    });
  };

  return InfoDialog;
}(_react.Component);

var _default = InfoDialog;
exports["default"] = _default;
//# sourceMappingURL=InfoDialog.js.map