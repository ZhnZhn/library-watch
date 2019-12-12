"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ChartActions = _interopRequireDefault(require("../../flux/actions/ChartActions"));

var _Type = require("../../constants/Type");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

//import PropTypes from 'prop-types'
var styles = _DialogStyles["default"];
var DIALOG_CAPTION = "Load Watch Item";
var S = {
  ITEM_DESCRIPTION: {
    fontWeight: 'bold',
    color: 'gray',
    paddingTop: '8px',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  LH_2: {
    lineHeight: 2
  },
  LH_1_5: {
    lineHeight: 1.5
  },
  BOLD: {
    fontWeight: 'bold'
  }
};

var LoadItemDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(LoadItemDialog, _Component);

  /*
   static propTypes = {
     isShow  : PropTypes.bool.isRequired,
     data    : PropTypes.object.isRequired,
     store   : PropTypes.object,
     onClose : PropTypes.func.isRequired
   },
   */
  function LoadItemDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handlerLoad = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose;

      _ChartActions["default"].loadStock(_Type.ChartType.WATCH_LIST, _Type.BrowserType.WATCH_LIST, data);

      onClose();
    };

    _this._handlerClose = function () {
      _this.props.onClose();
    };

    _this._renderDate = function (date) {
      return _react["default"].createElement("div", {
        style: (0, _extends2["default"])({}, styles.rowDiv, {}, S.LH_2),
        key: "3"
      }, _react["default"].createElement("span", {
        style: styles.labelSpan
      }, "Date:"), _react["default"].createElement("span", {
        style: S.BOLD
      }, date));
    };

    _this._commandButtons = [_react["default"].createElement(_FlatButton["default"], {
      key: "load",
      isPrimary: true,
      caption: "Load",
      onClick: _this._handlerLoad
    })];
    return _this;
  }

  var _proto = LoadItemDialog.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        data = _this$props2.data,
        caption = data.caption,
        descr = data.descr,
        date = data.date;
    return _react["default"].createElement(_ModalDialog["default"], {
      caption: DIALOG_CAPTION,
      isShow: isShow,
      commandButtons: this._commandButtons,
      onClose: this._handlerClose
    }, _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, {}, S.LH_1_5),
      key: "1"
    }, _react["default"].createElement("span", {
      style: S.ITEM_DESCRIPTION
    }, descr)), _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, styles.rowDiv, {}, S.LH_2),
      key: "2"
    }, _react["default"].createElement("span", {
      style: styles.labelSpan
    }, "Item:"), _react["default"].createElement("span", {
      style: S.BOLD
    }, caption)), date && this._renderDate(date));
  };

  return LoadItemDialog;
}(_react.Component);

var _default = LoadItemDialog;
exports["default"] = _default;
//# sourceMappingURL=LoadItemDialog.js.map