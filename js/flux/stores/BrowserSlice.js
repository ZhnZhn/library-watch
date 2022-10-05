"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _BrowserMenu = _interopRequireDefault(require("../../constants/BrowserMenu"));

var _createBrowserDynamic = _interopRequireDefault(require("../logic/createBrowserDynamic"));

var _BrowserActions = require("../actions/BrowserActions");

var _BrowserLogicFn = require("./browser/BrowserLogicFn");

var _DataWL = _interopRequireDefault(require("../../constants/DataWL"));

var BrowserSlice = {
  browserMenu: _BrowserMenu["default"],
  routeDialog: {
    WL: _DataWL["default"]
  },
  getBrowserMenu: function getBrowserMenu(browserType) {
    return this.browserMenu[browserType];
  },
  setMenuItemOpen: function setMenuItemOpen(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, this.browserMenu, browserType, true);
  },
  setMenuItemClose: function setMenuItemClose(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, this.browserMenu, browserType, false);
  },
  addMenuItemCounter: function addMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, this.browserMenu, 1);
  },
  minusMenuItemCounter: function minusMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, this.browserMenu, -1);
  },
  getSourceConfig: function getSourceConfig(browserId, sourceId) {
    return this.routeDialog[browserId][sourceId];
  },
  getDataConf: function getDataConf(dialogType) {
    var dataId = dialogType.split('_')[0];
    return this.getSourceConfig(dataId, dialogType);
  },
  onShowBrowser: function onShowBrowser(browserType) {
    this.trigger(_BrowserActions.BAT_SHOW_BROWSER, browserType);
  },
  onShowBrowserDynamic: function onShowBrowserDynamic(option) {
    var browserType = option.browserType;

    if (!this.browserMenu[browserType]) {
      var elBrowser = (0, _createBrowserDynamic["default"])((0, _extends2["default"])({}, option, {
        store: this
      }));
      this.browserMenu[browserType] = [];
      this.trigger(_BrowserActions.BAT_INIT_BROWSER_DYNAMIC, elBrowser);
    } else {
      this.trigger(_BrowserActions.BAT_SHOW_BROWSER_DYNAMIC, browserType);
    }
  },
  onLoadBrowserDynamicCompleted: function onLoadBrowserDynamicCompleted(option) {
    var menu = option.menu,
        items = option.items,
        browserType = option.browserType,
        elMenu = _BrowserMenu["default"].createMenu(menu, items, browserType);

    this.routeDialog[browserType] = items;
    this.browserMenu[browserType] = elMenu;
    this.trigger(_BrowserActions.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu,
      browserType: browserType
    });
  },
  onLoadBrowserDynamicFailed: function onLoadBrowserDynamicFailed(option) {
    option.alertItemId = option.alertItemId || option.caption || '';
    this.showAlertDialog(option);
  },
  onToggleWatchDbBrowser: function onToggleWatchDbBrowser() {
    this.trigger(_BrowserActions.BAT_TOGGLE_WATCH_DB_BROWSER);
  },
  resetMenuItemCounter: function resetMenuItemCounter(cT, bT) {
    (0, _BrowserLogicFn.resetCounter)(this.browserMenu, bT, cT);
  }
};
var _default = BrowserSlice;
exports["default"] = _default;
//# sourceMappingURL=BrowserSlice.js.map