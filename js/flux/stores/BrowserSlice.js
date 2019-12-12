"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _BrowserMenu = _interopRequireDefault(require("../../constants/BrowserMenu"));

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var _BrowserActions = require("../actions/BrowserActions");

var _BrowserLogic = _interopRequireDefault(require("./browser/BrowserLogic"));

var _DataWL = _interopRequireDefault(require("../../constants/DataWL"));

var setIsOpen = _BrowserLogic["default"].setIsOpen,
    plusCounter = _BrowserLogic["default"].plusCounter,
    resetCounter = _BrowserLogic["default"].resetCounter;
var BrowserSlice = {
  browserMenu: _BrowserMenu["default"],
  routeDialog: {
    WL: _DataWL["default"]
  },
  getBrowserMenu: function getBrowserMenu(browserType) {
    return this.browserMenu[browserType];
  },
  setMenuItemOpen: function setMenuItemOpen(chartType, browserType) {
    setIsOpen(chartType, this.browserMenu, browserType, true);
  },
  setMenuItemClose: function setMenuItemClose(chartType, browserType) {
    setIsOpen(chartType, this.browserMenu, browserType, false);
  },
  addMenuItemCounter: function addMenuItemCounter(chartType, browserType) {
    plusCounter(chartType, browserType, this.browserMenu, 1);
  },
  minusMenuItemCounter: function minusMenuItemCounter(chartType, browserType) {
    plusCounter(chartType, browserType, this.browserMenu, -1);
  },
  getSourceConfig: function getSourceConfig(browserId, sourceId) {
    return this.routeDialog[browserId][sourceId];
  },
  onShowBrowser: function onShowBrowser(browserType) {
    this.trigger(_BrowserActions.BrowserActionTypes.SHOW_BROWSER, browserType);
  },
  onShowBrowserDynamic: function onShowBrowserDynamic(option) {
    var browserType = option.browserType;

    if (!this.browserMenu[browserType]) {
      var elBrowser = _Factory["default"].createBrowserDynamic(option);

      this.browserMenu[browserType] = [];
      this.trigger(_BrowserActions.BrowserActionTypes.INIT_BROWSER_DYNAMIC, elBrowser);
    } else {
      this.trigger(_BrowserActions.BrowserActionTypes.SHOW_BROWSER_DYNAMIC, browserType);
    }
  },
  onLoadBrowserDynamicCompleted: function onLoadBrowserDynamicCompleted(option) {
    var menu = option.menu,
        items = option.items,
        browserType = option.browserType,
        elMenu = _BrowserMenu["default"].createMenu(menu, items, browserType);

    this.routeDialog[browserType] = items;
    this.browserMenu[browserType] = elMenu;
    this.trigger(_BrowserActions.BrowserActionTypes.LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu,
      browserType: browserType
    });
  },
  onLoadBrowserDynamicFailed: function onLoadBrowserDynamicFailed(option) {
    option.alertItemId = option.alertItemId || option.caption || '';
    this.showAlertDialog(option);
  },
  onToggleWatchDbBrowser: function onToggleWatchDbBrowser() {
    this.trigger(_BrowserActions.BrowserActionTypes.TOGGLE_WATCH_DB_BROWSER);
  },
  resetMenuItemCounter: function resetMenuItemCounter(cT, bT) {
    resetCounter(this.browserMenu, bT, cT);
  }
};
var _default = BrowserSlice;
exports["default"] = _default;
//# sourceMappingURL=BrowserSlice.js.map