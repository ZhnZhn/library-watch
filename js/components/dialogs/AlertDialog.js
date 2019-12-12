"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

var S = {
  CAPTION: {
    display: 'inline-block',
    width: '400px',
    paddingLeft: '10px',
    color: '#F44336',
    fontSize: '18px',
    fontWeight: 'bold',
    lineHeight: 2
  },
  ITEM_ID: {
    color: 'rgba(164, 135, 212,1)',
    fontWeight: 'bold'
  },
  DESCR: {
    color: 'gray',
    width: '400px',
    paddingLeft: '10px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line'
  }
};
var ELLIPSIS = '...';

var _crItemId = function _crItemId(str) {
  return str ? str.substring(0, 20) + ELLIPSIS : '';
};

var AlertDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(AlertDialog, _Component);

  function AlertDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = AlertDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      alertCaption: PropTypes.string,
      alertItemId: PropTypes.string,
      alertDescr: PropTypes.string
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
        _ref = data || {},
        alertCaption = _ref.alertCaption,
        alertItemId = _ref.alertItemId,
        alertDescr = _ref.alertDescr,
        caption = _ref.caption,
        itemId = _ref.itemId,
        descr = _ref.descr,
        _caption = alertCaption || caption || '',
        _itemId = _crItemId(alertItemId || itemId),
        _descr = alertDescr || descr || '';

    return _react["default"].createElement(_ModalDialog["default"], {
      caption: "Alert",
      isShow: isShow,
      onClose: onClose
    }, _react["default"].createElement("div", {
      style: _DialogStyles["default"].rowDiv
    }, _react["default"].createElement("span", {
      style: S.CAPTION
    }, _react["default"].createElement("span", null, _caption), _react["default"].createElement("span", null, ":"), _react["default"].createElement("span", {
      style: S.ITEM_ID,
      title: _itemId
    }, _itemId))), _react["default"].createElement("div", {
      style: _DialogStyles["default"].rowDiv
    }, _react["default"].createElement("p", {
      style: S.DESCR
    }, _descr)));
  };

  return AlertDialog;
}(_react.Component);

AlertDialog.defaultProps = {
  data: {},
  onClose: function onClose() {}
};
var _default = AlertDialog;
exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map