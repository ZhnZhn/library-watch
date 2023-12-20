"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _Type = require("../../constants/Type");
var _WatchBrowser = _interopRequireDefault(require("../browser-watch/WatchBrowser"));
var _DialogStack = _interopRequireDefault(require("../zhn-containers/DialogStack"));
var _jsxRuntime = require("react/jsx-runtime");
const CL = "hrz-container";
const BrowserContainer = _ref => {
  let {
    useMsBrowser,
    useMsBrowserDynamic,
    useWatchList,
    updateWatchAction,
    useDgOption
  } = _ref;
  const [isDoubleWatch, toggleIsDoubleWatch] = (0, _useToggle.default)(false),
    [elBrowsers, setElBrowsers] = (0, _uiApi.useState)([]);
  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === _Type.BrowserType.WATCH_LIST_DB) {
      toggleIsDoubleWatch();
    }
  });
  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic && msBrowserDynamic.elBrowser) {
      setElBrowsers(prevElBrowsers => [msBrowserDynamic.elBrowser, ...prevElBrowsers]);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchBrowser.default, {
      caption: "Watch",
      browserType: _Type.BrowserType.WATCH_LIST,
      useMsBrowser: useMsBrowser,
      useWatchList: useWatchList
    }), isDoubleWatch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchBrowser.default, {
      isShow: true,
      isEditMode: true,
      isDoubleWatch: true,
      caption: "Watch 2",
      browserType: _Type.BrowserType.WATCH_LIST,
      useMsBrowser: useMsBrowser,
      useWatchList: useWatchList
    }), elBrowsers, /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogStack.default, {
      maxDialog: 3,
      useDgOption: useDgOption
    })]
  });
};
var _default = exports.default = BrowserContainer;
//# sourceMappingURL=BrowserContainer.js.map