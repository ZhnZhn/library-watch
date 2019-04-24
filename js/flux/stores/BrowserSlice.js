'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BrowserMenu = require('../../constants/BrowserMenu');

var _BrowserMenu2 = _interopRequireDefault(_BrowserMenu);

var _Factory = require('../logic/Factory');

var _Factory2 = _interopRequireDefault(_Factory);

var _BrowserActions = require('../actions/BrowserActions');

var _BrowserLogic = require('./browser/BrowserLogic');

var _BrowserLogic2 = _interopRequireDefault(_BrowserLogic);

var _DataWL = require('../../constants/DataWL');

var _DataWL2 = _interopRequireDefault(_DataWL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setIsOpen = _BrowserLogic2.default.setIsOpen,
    plusCounter = _BrowserLogic2.default.plusCounter,
    resetCounter = _BrowserLogic2.default.resetCounter;


var BrowserSlice = {
  browserMenu: _BrowserMenu2.default,
  routeDialog: {
    WL: _DataWL2.default
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
      var elBrowser = _Factory2.default.createBrowserDynamic(option);
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
        elMenu = _BrowserMenu2.default.createMenu(menu, items, browserType);

    this.routeDialog[browserType] = items;
    this.browserMenu[browserType] = elMenu;
    this.trigger(_BrowserActions.BrowserActionTypes.LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu, browserType: browserType
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

exports.default = BrowserSlice;
//# sourceMappingURL=BrowserSlice.js.map