"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _browserStore = require("../../flux/browserStore");
var _compStore = require("../../flux/compStore");
var _Type = require("../../constants/Type");
var _Comp = _interopRequireDefault(require("../Comp"));
var _SvgInfo = _interopRequireDefault(require("../zhn-atoms/svg/SvgInfo"));
var _LoadingProgress = _interopRequireDefault(require("./LoadingProgress"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _LimitRemainingLabel = _interopRequireDefault(require("./LimitRemainingLabel"));
var _hotkeys = require("../hotkeys/hotkeys");
var _jsxRuntime = require("react/jsx-runtime");
const TITLE = "Library Watch v0.12.0",
  CL_HEADER = "header",
  CL_ICON = CL_HEADER + "__icon-app",
  CL_ABOUT = CL_HEADER + "__bt-about",
  CL_APP_LABEL = CL_HEADER + "__app-label",
  CL_LIBRARY = CL_HEADER + "__bt-library",
  S_SVG_INFO = {
    position: 'relative',
    top: -2,
    verticalAlign: 'middle',
    margin: '0 8px'
  },
  S_BUTTON_SAVE = {
    marginTop: 4,
    marginLeft: 10
  },
  S_BTS_RIGHT = {
    marginLeft: 'auto'
  },
  BROWSER_CONFIG_LIBRARY = {
    browserType: _Type.BrowserType.LIBRARY,
    caption: 'Library',
    sourceMenuUrl: './data/github/source-menu.json',
    rowClass: 'menu-item'
  };
const _hClickLibrary = () => (0, _browserStore.showBrowserDynamic)(BROWSER_CONFIG_LIBRARY);
const HeaderBar = () => /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
  className: CL_HEADER,
  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingProgress.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconAppLogo.default, {
    className: CL_ICON,
    title: TITLE
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppLabel.default, {
    className: CL_APP_LABEL,
    caption: TITLE
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
    className: CL_LIBRARY,
    caption: "Library",
    title: "Library Browser",
    hotKey: _hotkeys.HK_LIBRARY,
    timeout: 0,
    onClick: _hClickLibrary
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
    caption: "Watch",
    title: "Watch Browser",
    hotKey: _hotkeys.HK_WATCH,
    timeout: 0,
    onClick: _browserStore.showWatch
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp.default.ButtonSave, {
    style: S_BUTTON_SAVE
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_BTS_RIGHT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LimitRemainingLabel.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp.default.FlatButton, {
      className: CL_ABOUT,
      title: "About webapp Library Watch",
      hotKey: _hotkeys.HK_ABOUT,
      timeout: 0,
      onClick: _compStore.showAbout,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgInfo.default, {
        style: S_SVG_INFO
      })
    })]
  })]
});
var _default = exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map