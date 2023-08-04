import BrowserMenu from '../constants/BrowserMenu';
import {
  setIsOpen,
  plusCounter,
  resetCounter
} from './stores/browser/BrowserLogicFn';

const _browserMenu = BrowserMenu;

export const setBrowserMenu = (
  browserType,
  menu
) => {
  _browserMenu[browserType] = menu || []
}
export const getBrowserMenu = (
  browserType
) => _browserMenu[browserType]

export const setMenuItemOpen = (chartType, browserType) => {
  setIsOpen(chartType, _browserMenu, browserType, true);
}
export const setMenuItemClose = (chartType, browserType) => {
  setIsOpen(chartType, _browserMenu, browserType, false);
}
export const addMenuItemCounter = (chartType, browserType) => {
  plusCounter(chartType, browserType, _browserMenu, 1);
}
export const minusMenuItemCounter = (chartType, browserType) => {
  plusCounter(chartType, browserType, _browserMenu, -1);
}
export const resetMenuItemCounter = (cT, bT) => {
  resetCounter(_browserMenu, bT, cT)
}
