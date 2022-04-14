import BrowserMenu from '../../constants/BrowserMenu';

import Factory from '../logic/Factory';
import {
  BAT_SHOW_BROWSER,
  BAT_INIT_BROWSER_DYNAMIC,
  BAT_SHOW_BROWSER_DYNAMIC,
  BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
  BAT_TOGGLE_WATCH_DB_BROWSER
} from '../actions/BrowserActions';

import Logic from './browser/BrowserLogic'
import DataWL from '../../constants/DataWL';

const {
  setIsOpen,
  plusCounter,
  resetCounter
} = Logic;

const BrowserSlice = {
  browserMenu: BrowserMenu,
  routeDialog: {
    WL: DataWL
  },

  getBrowserMenu(browserType){
     return this.browserMenu[browserType];
  },
  setMenuItemOpen(chartType, browserType){
    setIsOpen(chartType, this.browserMenu, browserType, true);
  },
  setMenuItemClose(chartType, browserType){
    setIsOpen(chartType, this.browserMenu, browserType, false);
  },
  addMenuItemCounter(chartType, browserType){
    plusCounter(chartType, browserType, this.browserMenu, 1);
  },
  minusMenuItemCounter(chartType, browserType){
    plusCounter(chartType, browserType, this.browserMenu, -1);
  },

  getSourceConfig(browserId, sourceId){
    return this.routeDialog[browserId][sourceId];
  },

  onShowBrowser(browserType){
    this.trigger(BAT_SHOW_BROWSER, browserType);
  },

  onShowBrowserDynamic(option){
    const { browserType } = option;
    if (!this.browserMenu[browserType]) {
       const elBrowser = Factory.createBrowserDynamic(option);
       this.browserMenu[browserType] = [];
       this.trigger(BAT_INIT_BROWSER_DYNAMIC, elBrowser);
    } else {
       this.trigger(BAT_SHOW_BROWSER_DYNAMIC, browserType);
    }
  },
  onLoadBrowserDynamicCompleted(option){
    const { menu, items, browserType } = option
        , elMenu = BrowserMenu.createMenu(menu, items, browserType);
    this.routeDialog[browserType] = items;
    this.browserMenu[browserType] = elMenu;
    this.trigger(BAT_LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu, browserType: browserType
    })
  },
  onLoadBrowserDynamicFailed(option){
    option.alertItemId = option.alertItemId
      || option.caption || '';
    this.showAlertDialog(option);
  },

  onToggleWatchDbBrowser(){
    this.trigger(BAT_TOGGLE_WATCH_DB_BROWSER);
  },

  resetMenuItemCounter(cT, bT){
    resetCounter(this.browserMenu, bT, cT)
  }
}

export default BrowserSlice
