"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
var _SourceBrowserDynamic = _interopRequireDefault(require("../../components/browser-container/SourceBrowserDynamic"));
var _browserStore = require("../browserStore");
var _jsxRuntime = require("react/jsx-runtime");
const createBrowserDynamic = _ref => {
  let {
    browserType,
    caption,
    sourceMenuUrl,
    rowClass
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SourceBrowserDynamic.default, {
    isShowInitial: true,
    browserType: browserType,
    caption: caption,
    rowClass: rowClass,
    useMsBrowserDynamic: _browserStore.useMsBrowserDynamic,
    onLoadMenu: (0, _bindTo.bindTo)(_browserStore.loadBrowserDynamic, {
      browserType,
      caption,
      sourceMenuUrl
    })
  }, browserType);
};
var _default = exports.default = createBrowserDynamic;
//# sourceMappingURL=createBrowserDynamic.js.map