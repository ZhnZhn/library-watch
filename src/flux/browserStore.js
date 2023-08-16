import {
  createStoreWithSelector,
  getStoreApi,
  fCrUse,
  bindTo
} from './storeApi';

import { BrowserType as BT } from '../constants/Type';

import fnFetch from '../network/fnFetch';
import fnCatch from '../network/fnCatch';

import createBrowserMenu from './stores/browser/createMenu';
import createBrowserDynamic from './logic/createBrowserDynamic';

import {
  setBrowserMenu,
  getBrowserMenu
} from './browserFn';
import { setDialogItems } from './dialogFn';
import { showAlert } from './compStore';

const _crStore = () => ({
  msBrowser: void 0,
  msBrowserDynamic: void 0
})
, _browserStore = createStoreWithSelector(_crStore)
, _selectMsBrowser = state => state.msBrowser
, _selectMsBrowserDynamic = state => state.msBrowserDynamic
, [_set] = getStoreApi(_browserStore);

export const useMsBrowser = fCrUse(_browserStore, _selectMsBrowser)
export const showBrowser = (id) => _set({
  msBrowser: { id }
})
export const showWatch = bindTo(showBrowser, BT.WATCH_LIST)
export const showDbWatch = bindTo(showBrowser, BT.WATCH_LIST_DB)

export const useMsBrowserDynamic = fCrUse(_browserStore, _selectMsBrowserDynamic)
export const showBrowserDynamic = (option) => {
  const { browserType } = option;
  if (!getBrowserMenu(browserType)) {
     const elBrowser = createBrowserDynamic(option);
     setBrowserMenu(browserType)
     _set({
       msBrowserDynamic: { elBrowser }
     })
  } else {
     _set({
       msBrowserDynamic: { browserType }
     })
  }
}

const _fetchSourceMenu = ({
  json,
  option,
  onCompleted
}) => {
  const {
    menu,
    items
  } = json
  , {
    browserType
  } = option;
  onCompleted({ menu, items, browserType });
};
const _loadBrowserDynamicCompleted = ({
  menu,
  items,
  browserType
}) => {
  const menuItems = createBrowserMenu(
    menu,
    items,
    browserType
  );
  setDialogItems(browserType, items)
  setBrowserMenu(browserType, menuItems)
  _set({
    msBrowserDynamic: {
      menuItems,
      browserType
    }
  })
}
, _loadBrowserDynamicFailed = (option) => {
  option.alertItemId = option.alertItemId
    || option.caption || '';
  showAlert(option)
}
export const loadBrowserDynamic = (option) => {
  fnFetch({
    uri: option.sourceMenuUrl,
    option: option,
    onCheckResponse: (json) => true,
    onFetch: _fetchSourceMenu,
    onCompleted: _loadBrowserDynamicCompleted,
    onCatch: fnCatch,
    onFailed: _loadBrowserDynamicFailed
  })
}
export const updateBrowserMenu = (browserType) => {
  _set({
    msBrowserDynamic: {
      menuItems: getBrowserMenu(browserType),
      browserType
    }
  })
}
