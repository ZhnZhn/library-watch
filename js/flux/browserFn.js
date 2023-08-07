"use strict";

exports.__esModule = true;
exports.setMenuItemOpen = exports.setMenuItemClose = exports.setBrowserMenu = exports.resetMenuItemCounter = exports.minusMenuItemCounter = exports.getBrowserMenu = exports.addMenuItemCounter = void 0;
var _Type = require("../constants/Type");
var _BrowserLogicFn = require("./stores/browser/BrowserLogicFn");
const _browserMenu = Object.create(null);
const setBrowserMenu = (browserType, menu) => {
  _browserMenu[browserType] = menu || [];
};
exports.setBrowserMenu = setBrowserMenu;
const getBrowserMenu = browserType => _browserMenu[browserType];
exports.getBrowserMenu = getBrowserMenu;
const _isBrowserTypeWatchList = bT => bT === _Type.BrowserType.WATCH_LIST;
const _fEditItem = (edit, value) => (chartType, browserType) => {
  if (!_isBrowserTypeWatchList(browserType)) {
    edit(chartType, _browserMenu[browserType], value);
  }
};
const setMenuItemOpen = _fEditItem(_BrowserLogicFn.setIsOpen, true);
exports.setMenuItemOpen = setMenuItemOpen;
const setMenuItemClose = _fEditItem(_BrowserLogicFn.setIsOpen, false);
exports.setMenuItemClose = setMenuItemClose;
const addMenuItemCounter = _fEditItem(_BrowserLogicFn.plusCounter, 1);
exports.addMenuItemCounter = addMenuItemCounter;
const minusMenuItemCounter = _fEditItem(_BrowserLogicFn.plusCounter, -1);
exports.minusMenuItemCounter = minusMenuItemCounter;
const resetMenuItemCounter = _fEditItem(_BrowserLogicFn.resetCounter);
exports.resetMenuItemCounter = resetMenuItemCounter;
//# sourceMappingURL=browserFn.js.map