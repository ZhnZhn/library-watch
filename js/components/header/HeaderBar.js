"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Type = require("../../constants/Type");
var _browserStore = require("../../flux/browserStore");
var _compStore = require("../../flux/compStore");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _useWatchEditedColor = _interopRequireDefault(require("../styles/useWatchEditedColor"));
var _SvgSave = _interopRequireDefault(require("../zhn/svg/SvgSave"));
var _SvgInfo = _interopRequireDefault(require("../zhn/svg/SvgInfo"));
var _SvgSettings = _interopRequireDefault(require("../zhn/svg/SvgSettings"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _LimitRemainingLabel = _interopRequireDefault(require("./LimitRemainingLabel"));
var _hotkeys = require("../hotkeys/hotkeys");
var _styleFn = require("../styleFn");
var _Tokens = require("../../constants/Tokens");
var _jsxRuntime = require("react/jsx-runtime");
const TOKEN_HEADER = "header",
  CL_HEADER = (0, _styleFn.crCnBgColor)(TOKEN_HEADER),
  CL_ICON = `${TOKEN_HEADER}__icon-app`,
  CL_ABOUT = `${TOKEN_HEADER}__bt-about`,
  CL_APP_LABEL = `${TOKEN_HEADER}__app-label`,
  CL_LIBRARY = `${TOKEN_HEADER}__bt-library`,
  S_SVG_ICON = {
    verticalAlign: 'middle',
    margin: '0 8px'
  },
  S_BUTTON_SAVE = {
    padding: '0 4px'
  },
  S_BTS_RIGHT = {
    position: 'relative',
    top: -2,
    marginLeft: 'auto'
  },
  BROWSER_CONFIG_LIBRARY = {
    browserType: _Type.BT_LIBRARY,
    caption: 'Library',
    sourceMenuUrl: './data/github/source-menu.json',
    rowClass: 'menu-item'
  };
const _hClickLibrary = () => (0, _browserStore.showBrowserDynamic)(BROWSER_CONFIG_LIBRARY);
const _crBtSaveStyle = color => color ? {
  ...S_BUTTON_SAVE,
  color
} : S_BUTTON_SAVE;
const HeaderBar = () => {
  const _btSaveColor = (0, _useWatchEditedColor.default)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: CL_HEADER,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo.default, {
      className: CL_ICON,
      title: _Tokens.TITLE_APP
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel.default, {
      className: CL_APP_LABEL,
      caption: _Tokens.TITLE_APP
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      className: CL_LIBRARY,
      classHotKey: _hotkeys.CL_BT_HOT_KEY,
      caption: _Tokens.CAPTION_LIBRARY,
      title: _Tokens.TITLE_LIBRARY_BROWSER,
      hotKey: _hotkeys.HK_LIBRARY,
      timeout: 0,
      onClick: _hClickLibrary
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: _Tokens.CAPTION_WATCH,
      title: _Tokens.TITLE_WATCH_BROWSER,
      hotKey: _hotkeys.HK_WATCH,
      classHotKey: _hotkeys.CL_BT_HOT_KEY,
      timeout: 0,
      onClick: _browserStore.showWatch
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      style: _crBtSaveStyle(_btSaveColor),
      title: _Tokens.TITLE_BUTTON_SAVE,
      onClick: _watchListStore.saveWatchList,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgSave.default, {
        style: S_SVG_ICON
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_BTS_RIGHT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LimitRemainingLabel.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        title: _Tokens.TITLE_SETTINGS_DIALOG,
        hotKey: _hotkeys.HK_SETTINGS,
        timeout: 0,
        onClick: _compStore.showSettingsDialog,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgSettings.default, {
          style: S_SVG_ICON
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        className: CL_ABOUT,
        title: _Tokens.TITLE_ABOUT,
        hotKey: _hotkeys.HK_ABOUT,
        timeout: 0,
        onClick: _compStore.showAbout,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgInfo.default, {
          style: S_SVG_ICON
        })
      })]
    })]
  });
};
var _default = exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map