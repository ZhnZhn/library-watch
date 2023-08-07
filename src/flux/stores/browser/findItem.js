const _isArray = Array.isArray;

const _findItem = (menu, chartType) => {
  if (!_isArray(menu)) { return; }

  for (const topics of menu){
    const items = topics.items;
    if (_isArray(items)) {
      for(const item of items){
        if (item.id === chartType){
          return item;
        }
      }
    }
  }
};

const findItemCounterSetValue = (
  menu,
  chartType
) => ((_findItem(menu, chartType) || {}).atomCounter || {}).setValue


export default findItemCounterSetValue
