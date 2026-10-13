"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

const TOKEN_USER_SETTINGS = "User Settings",
  S_MODAL = {
    position: 'static',
    width: 340,
    maxHeight: 460,
    margin: '70px auto 0px'
  },
  S_DIV_BT = {
    margin: '26px 0 4px 0'
  },
  S_TABS = {
    marginLeft: 24,
    textAlign: 'left'
  },
  S_CARD_ROOT = {
    position: 'relative',
    maxHeight: 370
  },
  S_CARD_BUTTONS = {
    gap: 4
  },
  S_INPUT_WIDTH = {
    width: 315,
    marginLeft: 8
  };
const SettingsDialog = (0, _memoFn.memoIsShow)(props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog.default, {
    isWithButton: true,
    style: S_MODAL,
    caption: TOKEN_USER_SETTINGS,
    isShow: props.isShow,
    onClose: props.onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardUiTheme.default, {
      style: S_CARD_ROOT,
      onClose: props.onClose
    })
  });
});

/*
SettingsDialog.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.func
}
*/
var _default = exports.default = SettingsDialog;
//# sourceMappingURL=SettingsDialog.js.map