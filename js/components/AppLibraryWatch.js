"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("./uiApi");
var _browserStore = require("../flux/browserStore");
var _compStore = require("../flux/compStore");
var _watchListStore = require("../flux/watch-list/watchListStore");
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
  (0, _uiApi.useEffect)(() => {
    (0, _watchListStore.initWatchList)();
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_HeaderBar.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "component-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserContainer.default, {
        useMsBrowser: _browserStore.useMsBrowser,
        useMsBrowserDynamic: _browserStore.useMsBrowserDynamic,
        useWatchList: _watchListStore.useWatchList,
        useDgOption: _compStore.useDgOption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_About.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComponentHrzContainer.default, {})]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContainer.default, {
      useMdOption: _compStore.useMdOption,
      routerDialog: _RouterModalDialog.default
    })]
  });
};
var _default = exports.default = AppLibraryWatch;
//# sourceMappingURL=AppLibraryWatch.js.map