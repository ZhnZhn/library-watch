"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoEqual = _interopRequireDefault(require("../hoc/memoEqual"));

var _MenuBrowserDynamic = _interopRequireDefault(require("../zhn-moleculs/MenuBrowserDynamic"));

var _BrowserActions = require("../../flux/actions/BrowserActions");

var _jsxRuntime = require("react/jsx-runtime");

var SourceBrowserDynamic = (0, _memoEqual["default"])(function (props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuBrowserDynamic["default"], (0, _extends2["default"])({
    showAction: _BrowserActions.BAT_SHOW_BROWSER_DYNAMIC,
    loadCompletedAction: _BrowserActions.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
    updateAction: _BrowserActions.BAT_UPDATE_BROWSER_MENU,
    onLoadMenu: _BrowserActions.BrowserActions.loadBrowserDynamic
  }, props));
});
var _default = SourceBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=SourceBrowserDynamic.js.map