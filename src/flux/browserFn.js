import { BrowserType as BT } from '../constants/Type';

import {
  setIsOpen,
  plusCounter,
  resetCounter
} from './stores/browser/BrowserLogicFn';

const _browserMenu = Object.create(null);

export const setBrowserMenu = (
  browserType,
  menu
) => {
  _browserMenu[browserType] = menu || []
}
export const getBrowserMenu = (
  browserType
) => _browserMenu[browserType]

const _isBrowserTypeWatchList = (
  bT
) => bT === BT.WATCH_LIST;
const _fEditItem = (edit, value) => (
  chartType,
  browserType
) => {
  if(_isBrowserTypeWatchList(browserType)) {
    edit(chartType, _browserMenu[browserType], value)
  }
}

export const setMenuItemOpen = _fEditItem(setIsOpen, true)
export const setMenuItemClose = _fEditItem(setIsOpen, false)
export const addMenuItemCounter = _fEditItem(plusCounter, 1)
export const minusMenuItemCounter = _fEditItem(plusCounter, -1)
export const resetMenuItemCounter = _fEditItem(resetCounter)
