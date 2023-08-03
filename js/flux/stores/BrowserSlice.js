"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _BrowserMenu = _interopRequireDefault(require("../../constants/BrowserMenu"));
var _createBrowserDynamic = _interopRequireDefault(require("../logic/createBrowserDynamic"));
var _BrowserActions = require("../actions/BrowserActions");
var _compStore = require("../compStore");
var _BrowserLogicFn = require("./browser/BrowserLogicFn");
var _DataWL = _interopRequireDefault(require("../../constants/DataWL"));
const BrowserSlice = {
  browserMenu: _BrowserMenu.default,
  routeDialog: {
    WL: _DataWL.default
  },
  getBrowserMenu(browserType) {
    return this.browserMenu[browserType];
  },
  setMenuItemOpen(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, this.browserMenu, browserType, true);
  },
  setMenuItemClose(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, this.browserMenu, browserType, false);
  },
  addMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, this.browserMenu, 1);
  },
  minusMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, this.browserMenu, -1);
  },
  getSourceConfig(browserId, sourceId) {
    return this.routeDialog[browserId][sourceId];
  },
  getDataConf(dialogType) {
    const dataId = dialogType.split('_')[0];
    return this.getSourceConfig(dataId, dialogType);
  },
  onShowBrowser(browserType) {
    this.trigger(_BrowserActions.BAT_SHOW_BROWSER, browserType);
  },
  onShowBrowserDynamic(option) {
    const {
      browserType
    } = option;
    if (!this.browserMenu[browserType]) {
      const elBrowser = (0, _createBrowserDynamic.default)({
        ...option,
        store: this
      });
      this.browserMenu[browserType] = [];
      this.trigger(_BrowserActions.BAT_INIT_BROWSER_DYNAMIC, elBrowser);
    } else {
      this.trigger(_BrowserActions.BAT_SHOW_BROWSER_DYNAMIC, browserType);
    }
  },
  onLoadBrowserDynamicCompleted(option) {
    const {
        menu,
        items,
        browserType
      } = option,
      elMenu = _BrowserMenu.default.createMenu(menu, items, browserType);
    this.routeDialog[browserType] = items;
    this.browserMenu[browserType] = elMenu;
    this.trigger(_BrowserActions.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu,
      browserType: browserType
    });
  },
  onLoadBrowserDynamicFailed(option) {
    option.alertItemId = option.alertItemId || option.caption || '';
    (0, _compStore.showAlert)(option);
  },
  onToggleWatchDbBrowser() {
    this.trigger(_BrowserActions.BAT_TOGGLE_WATCH_DB_BROWSER);
  },
  resetMenuItemCounter(cT, bT) {
    (0, _BrowserLogicFn.resetCounter)(this.browserMenu, bT, cT);
  }
};
var _default = BrowserSlice;
exports.default = _default;
//# sourceMappingURL=BrowserSlice.js.map