import findItem from './findItem'

const BrowserLogic = {
  setIsOpen: (chartType, browserMenu, browserType, value) => {
    const item = findItem(browserMenu[browserType], chartType);
    if (item) {
      item.isOpen = value;
    }
  },
  plusCounter: (chartType, browserType, browserMenu, value) => {
    const item = findItem(browserMenu[browserType], chartType);
    if (item) {
      item.counter += value;
      item.isOpen = true;
    }
  },
  resetCounter: (appMenu, bT, cT) => {
    const item = findItem(appMenu[bT], cT);
    if (item) {
      item.counter = 0
    }
  }
}

export default BrowserLogic
