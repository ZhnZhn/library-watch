"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _MenuBrowserDynamic = _interopRequireDefault(require("../zhn-moleculs/MenuBrowserDynamic"));

var _BrowserActions = _interopRequireWildcard(require("../../flux/actions/BrowserActions"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _isNotRequireRerender = function _isNotRequireRerender() {
  return true;
};

var SourceBrowserDynamic = /*#__PURE__*/(0, _react.memo)(function (props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuBrowserDynamic["default"], (0, _extends2["default"])({
    caption: "Source Browser",
    showAction: _BrowserActions.BrowserActionTypes.SHOW_BROWSER_DYNAMIC,
    loadCompletedAction: _BrowserActions.BrowserActionTypes.LOAD_BROWSER_DYNAMIC_COMPLETED,
    updateAction: _BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU,
    onLoadMenu: _BrowserActions["default"].loadBrowserDynamic
  }, props));
}, _isNotRequireRerender);
var _default = SourceBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=SourceBrowserDynamic.js.map