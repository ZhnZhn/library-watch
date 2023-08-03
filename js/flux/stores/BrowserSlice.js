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
const _browserMenu = _BrowserMenu.default,
  _routeDialog = {
    WL: _DataWL.default
  };
const BrowserSlice = {
  browserMenu: _BrowserMenu.default,
  getBrowserMenu(browserType) {
    return _browserMenu[browserType];
  },
  setMenuItemOpen(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, _browserMenu, browserType, true);
  },
  setMenuItemClose(chartType, browserType) {
    (0, _BrowserLogicFn.setIsOpen)(chartType, _browserMenu, browserType, false);
  },
  addMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, _browserMenu, 1);
  },
  minusMenuItemCounter(chartType, browserType) {
    (0, _BrowserLogicFn.plusCounter)(chartType, browserType, _browserMenu, -1);
  },
  getDataConf(dialogType) {
    const dataId = dialogType.split('_')[0];
    return _routeDialog[dataId][dialogType];
  },
  onShowBrowserDynamic(option) {
    const {
      browserType
    } = option;
    if (!_browserMenu[browserType]) {
      const elBrowser = (0, _createBrowserDynamic.default)({
        ...option,
        store: this
      });
      _browserMenu[browserType] = [];
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
    _routeDialog[browserType] = items;
    _browserMenu[browserType] = elMenu;
    this.trigger(_BrowserActions.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu,
      browserType: browserType
    });
  },
  onLoadBrowserDynamicFailed(option) {
    option.alertItemId = option.alertItemId || option.caption || '';
    (0, _compStore.showAlert)(option);
  },
  resetMenuItemCounter(cT, bT) {
    (0, _BrowserLogicFn.resetCounter)(_browserMenu, bT, cT);
  }
};
var _default = BrowserSlice;
exports.default = _default;
//# sourceMappingURL=BrowserSlice.js.map