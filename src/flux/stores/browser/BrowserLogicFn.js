import findItem from './findItem';

export const setIsOpen = (
  chartType,
  browserMenu,
  browserType,
  value
) => {
  const item = findItem(browserMenu[browserType], chartType);
  if (item) {
    item.isOpen = value;
  }
}

export const plusCounter = (
  chartType,
  browserType,
  browserMenu,
  value
) => {
  const item = findItem(browserMenu[browserType], chartType);
  if (item) {
    item.counter += value;
    item.isOpen = true;
  }
}

export const resetCounter = (
  appMenu,
  bT,
  cT
) => {
  const item = findItem(appMenu[bT], cT);
  if (item) {
    item.counter = 0
  }
}
