"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setMenuItemOpen = exports.setMenuItemClose = exports.setBrowserMenu = exports.resetMenuItemCounter = exports.minusMenuItemCounter = exports.getBrowserMenu = exports.addMenuItemCounter = void 0;
var _BrowserMenu = _interopRequireDefault(require("../constants/BrowserMenu"));
var _BrowserLogicFn = require("./stores/browser/BrowserLogicFn");
const _browserMenu = _BrowserMenu.default;
const setBrowserMenu = (browserType, menu) => {
  _browserMenu[browserType] = menu || [];
};
exports.setBrowserMenu = setBrowserMenu;
const getBrowserMenu = browserType => _browserMenu[browserType];
exports.getBrowserMenu = getBrowserMenu;
const setMenuItemOpen = (chartType, browserType) => {
  (0, _BrowserLogicFn.setIsOpen)(chartType, _browserMenu, browserType, true);
};
exports.setMenuItemOpen = setMenuItemOpen;
const setMenuItemClose = (chartType, browserType) => {
  (0, _BrowserLogicFn.setIsOpen)(chartType, _browserMenu, browserType, false);
};
exports.setMenuItemClose = setMenuItemClose;
const addMenuItemCounter = (chartType, browserType) => {
  (0, _BrowserLogicFn.plusCounter)(chartType, browserType, _browserMenu, 1);
};
exports.addMenuItemCounter = addMenuItemCounter;
const minusMenuItemCounter = (chartType, browserType) => {
  (0, _BrowserLogicFn.plusCounter)(chartType, browserType, _browserMenu, -1);
};
exports.minusMenuItemCounter = minusMenuItemCounter;
const resetMenuItemCounter = (cT, bT) => {
  (0, _BrowserLogicFn.resetCounter)(_browserMenu, bT, cT);
};
exports.resetMenuItemCounter = resetMenuItemCounter;
//# sourceMappingURL=browserFn.js.map