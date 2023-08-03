import BrowserMenu from '../../constants/BrowserMenu';

import createBrowserDynamic from '../logic/createBrowserDynamic';
import {
  BAT_INIT_BROWSER_DYNAMIC,
  BAT_SHOW_BROWSER_DYNAMIC,
  BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
  BAT_TOGGLE_WATCH_DB_BROWSER
} from '../actions/BrowserActions';

import { showAlert } from '../compStore'

import {
  setIsOpen,
  plusCounter,
  resetCounter
} from './browser/BrowserLogicFn';
import DataWL from '../../constants/DataWL';

const _browserMenu = BrowserMenu
, _routeDialog = {
  WL: DataWL
};

const BrowserSlice = {
  browserMenu: BrowserMenu,

  getBrowserMenu(browserType){
     return _browserMenu[browserType];
  },
  setMenuItemOpen(chartType, browserType){
    setIsOpen(chartType, _browserMenu, browserType, true);
  },
  setMenuItemClose(chartType, browserType){
    setIsOpen(chartType, _browserMenu, browserType, false);
  },
  addMenuItemCounter(chartType, browserType){
    plusCounter(chartType, browserType, _browserMenu, 1);
  },
  minusMenuItemCounter(chartType, browserType){
    plusCounter(chartType, browserType, _browserMenu, -1);
  },

  getDataConf(dialogType){
    const dataId = dialogType.split('_')[0];
    return _routeDialog[dataId][dialogType];
  },

  onShowBrowserDynamic(option){
    const { browserType } = option;
    if (!_browserMenu[browserType]) {
       const elBrowser = createBrowserDynamic({...option, store: this });
       _browserMenu[browserType] = [];
       this.trigger(BAT_INIT_BROWSER_DYNAMIC, elBrowser);
    } else {
       this.trigger(BAT_SHOW_BROWSER_DYNAMIC, browserType);
    }
  },
  onLoadBrowserDynamicCompleted(option){
    const { menu, items, browserType } = option
        , elMenu = BrowserMenu.createMenu(menu, items, browserType);
    _routeDialog[browserType] = items;
    _browserMenu[browserType] = elMenu;
    this.trigger(BAT_LOAD_BROWSER_DYNAMIC_COMPLETED, {
      menuItems: elMenu,
      browserType: browserType
    })
  },
  onLoadBrowserDynamicFailed(option){
    option.alertItemId = option.alertItemId
      || option.caption || '';
    showAlert(option)
  },

  onToggleWatchDbBrowser(){
    this.trigger(BAT_TOGGLE_WATCH_DB_BROWSER);
  },

  resetMenuItemCounter(cT, bT){
    resetCounter(_browserMenu, bT, cT)
  }
}

export default BrowserSlice
