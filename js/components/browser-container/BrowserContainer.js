"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useListen = _interopRequireDefault(require("../hooks/useListen"));
var _Type = require("../../constants/Type");
var _WatchBrowser = _interopRequireDefault(require("../browser-watch/WatchBrowser"));
var _DialogStack = _interopRequireDefault(require("../zhn-containers/DialogStack"));
var _jsxRuntime = require("react/jsx-runtime");
const CL = "hrz-container";
const BrowserContainer = _ref => {
  let {
    store,
    useMsBrowser,
    updateWatchAction,
    useDgOption,
    initBrowserAction
  } = _ref;
  const [isDoubleWatch, toggleIsDoubleWatch] = (0, _useToggle.default)(false),
    [elBrowsers, setElBrowsers] = (0, _uiApi.useState)([]);
  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === _Type.BrowserType.WATCH_LIST_DB) {
      toggleIsDoubleWatch();
    }
  });
  (0, _useListen.default)(store, (actionType, data) => {
    if (actionType === initBrowserAction) {
      setElBrowsers(prevElBrowsers => [data, ...prevElBrowsers]);
    }
  });
  const _doubleWatch = isDoubleWatch ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchBrowser.default, {
    isShow: true,
    isEditMode: true,
    isDoubleWatch: true,
    browserType: _Type.BrowserType.WATCH_LIST,
    useMsBrowser: useMsBrowser,
    caption: "Watch 2",
    store: store,
    updateAction: updateWatchAction
  }) : null;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: CL,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchBrowser.default, {
      browserType: _Type.BrowserType.WATCH_LIST,
      caption: "Watch",
      store: store,
      useMsBrowser: useMsBrowser,
      updateAction: updateWatchAction
    }), _doubleWatch, elBrowsers.map(el => (0, _uiApi.cloneElement)(el)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogStack.default, {
      maxDialog: 3,
      useDgOption: useDgOption
    })]
  });
};
var _default = BrowserContainer;
exports.default = _default;
//# sourceMappingURL=BrowserContainer.js.map