"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _AppStore = _interopRequireDefault(require("../flux/stores/AppStore"));
var _BrowserActions = require("../flux/actions/BrowserActions");
var _ChartActions = require("../flux/actions/ChartActions");
var _browserStore = require("../flux/browserStore");
var _compStore = require("../flux/compStore");
var _useHotKeys = _interopRequireDefault(require("./hotkeys/useHotKeys"));
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _About = _interopRequireDefault(require("./about/About"));
var _BrowserContainer = _interopRequireDefault(require("./browser-container/BrowserContainer"));
var _ComponentHrzContainer = _interopRequireDefault(require("./zhn-containers/ComponentHrzContainer"));
var _DialogContainer = _interopRequireDefault(require("./zhn-containers/DialogContainer"));
var _RouterModalDialog = _interopRequireDefault(require("./dialogs/RouterModalDialog"));
var _jsxRuntime = require("react/jsx-runtime");
const AppLibraryWatch = props => {
  (0, _useHotKeys.default)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderBar.default, {
      store: _AppStore.default
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "component-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserContainer.default, {
        store: _AppStore.default,
        useMsBrowser: _browserStore.useMsBrowser,
        initBrowserAction: _BrowserActions.BAT_INIT_BROWSER_DYNAMIC,
        updateWatchAction: _BrowserActions.BAT_UPDATE_WATCH_BROWSER,
        useDgOption: _compStore.useDgOption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_About.default, {
        store: _AppStore.default
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentHrzContainer.default, {
        store: _AppStore.default,
        initShowAction: _ChartActions.CHAT_INIT_AND_SHOW_CHART
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContainer.default, {
      store: _AppStore.default,
      useMdOption: _compStore.useMdOption,
      routerDialog: _RouterModalDialog.default
    })]
  });
};
var _default = AppLibraryWatch;
exports.default = _default;
//# sourceMappingURL=AppLibraryWatch.js.map