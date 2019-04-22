
const CL_ROW = 'row__pane-topic not-selected';

const _isFn = fn => typeof fn === 'function';

const _addItemTo = (arr, comp, { name, onClick, isClose }) => {
  if (_isFn(onClick)) {
    arr.push({
      cn: CL_ROW,
      onClick: onClick.hasOwnProperty('prototype')
        ? onClick.bind(comp)
        : onClick,
      name, isClose
   })
  }
};

const crMenuMore = (comp, {
  toggleDates,
  toggleLabels,
  toggleToolBar
}) => {
  const p0 = [];
  _addItemTo(p0, comp, {
    name: 'Toggle Dates',
    onClick: toggleDates,
    isClose: true
  })
  _addItemTo(p0, comp, {
    name: 'Toggle Labels',
    onClick: toggleLabels,
    isClose: true
  })
  _addItemTo(p0, comp, {
    name: 'Toggle ToolBar',
    onClick: toggleToolBar,
    isClose: true
  })

  return {
    baseTitleCl: CL_ROW,
    pageWidth: 160,
    maxPages: 1,
    p0: p0
  };
};

export default crMenuMore
