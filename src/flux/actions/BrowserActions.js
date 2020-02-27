import Reflux from 'reflux-core';

import fnFetch from '../../network/fnFetch';
import fnCatch from '../../network/fnCatch';

export const BrowserActionTypes = {
  SHOW_BROWSER : 'showBrowser',
  UPDATE_BROWSER_MENU : 'updateBrowserMenu',

  SHOW_BROWSER_DYNAMIC : 'showBrowserDynamic',
  INIT_BROWSER_DYNAMIC : 'initBrowserDynamic',
  LOAD_BROWSER_DYNAMIC : 'loadBrowserDynamic',
  LOAD_BROWSER_DYNAMIC_COMPLETED : 'loadBrowserDynamicCompleted',

  UPDATE_WATCH_BROWSER : 'updateWatchBrowser',
  TOGGLE_WATCH_DB_BROWSER : 'toggleWatchDbBrowser'
}

const BrowserActions = Reflux.createActions({
  [BrowserActionTypes.SHOW_BROWSER] : {},
  [BrowserActionTypes.UPDATE_BROWSER_MENU] : {},

  [BrowserActionTypes.SHOW_BROWSER_DYNAMIC] : {},
  [BrowserActionTypes.INIT_BROWSER_DYNAMIC] : {},
  [BrowserActionTypes.LOAD_BROWSER_DYNAMIC] : { children : ['completed', 'failed']},

  [BrowserActionTypes.UPDATE_WATCH_BROWSER] : {},
  [BrowserActionTypes.TOGGLE_WATCH_DB_BROWSER] : {}
});

const _fnFetchSourceMenu = function({ json, option, onCompleted }){
  const { menu, items } = json
      , { browserType } = option;
  onCompleted({ menu, items, browserType });
}

BrowserActions[BrowserActionTypes.LOAD_BROWSER_DYNAMIC].listen(function(option){
   fnFetch({
     uri : option.sourceMenuUrl,
     option : option,
     onCheckResponse : (json) => true,
     onFetch : _fnFetchSourceMenu,
     onCompleted : this.completed,
     onCatch : fnCatch,
     onFailed : this.failed
   })
})


export default BrowserActions
