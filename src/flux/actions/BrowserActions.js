import Reflux from 'reflux-core';

import fnFetch from '../../network/fnFetch';
import fnCatch from '../../network/fnCatch';

export const BAT_UPDATE_BROWSER_MENU = 'updateBrowserMenu'
export const BAT_SHOW_BROWSER_DYNAMIC = 'showBrowserDynamic'
export const BAT_INIT_BROWSER_DYNAMIC = 'initBrowserDynamic'
export const BAT_LOAD_BROWSER_DYNAMIC = 'loadBrowserDynamic'
export const BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = 'loadBrowserDynamicCompleted'
export const BAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser'

const _BrowserActions = Reflux.createActions({
  [BAT_UPDATE_BROWSER_MENU]: {},

  [BAT_SHOW_BROWSER_DYNAMIC]: {},
  [BAT_INIT_BROWSER_DYNAMIC]: {},
  [BAT_LOAD_BROWSER_DYNAMIC]: { children: ['completed', 'failed']},

  [BAT_UPDATE_WATCH_BROWSER]: {},
});

const _fnFetchSourceMenu = function({
  json,
  option,
  onCompleted
}){
  const { menu, items } = json
  , { browserType } = option;
  onCompleted({ menu, items, browserType });
};

_BrowserActions[BAT_LOAD_BROWSER_DYNAMIC].listen(function(option){
   fnFetch({
     uri: option.sourceMenuUrl,
     option: option,
     onCheckResponse: (json) => true,
     onFetch: _fnFetchSourceMenu,
     onCompleted: this.completed,
     onCatch: fnCatch,
     onFailed: this.failed
   })
})

export const BrowserActions = _BrowserActions
