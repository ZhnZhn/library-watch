import {
  createStoreWithSelector,
  getStoreApi,
  fCrUse
} from './storeApi';

import RouterLoad from './logic/RouterLoad';
import createItem from './logic/createItem';
import createChartContainer from './logic/createChartContainer';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from './actions/LoadingProgressActions';

import {
  setMenuItemOpen,
  setMenuItemClose,
  addMenuItemCounter,
  minusMenuItemCounter,
  resetMenuItemCounter
} from './browserFn';
import { getDataConf } from './dialogFn'
import { showAlert } from './compStore';

import {
  toTopByKey,
  removeAll
} from './stores/chart/ChartLogicFn';

const ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};

const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _logLoadError = ({
  alertCaption,
  alertDescr,
  alertItemId
}) => {
  console.log('%c'+ alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
}

const MS_ITEM = 'msItem';
const _crMsItemChartCont = (
  chartCont
) => ({
  [MS_ITEM]: { chartCont }
});
const _crMsItemComp = (
  chartType,
  browserType
) => ({
  [MS_ITEM]: { Comp: createChartContainer(
    getDataConf(chartType),
    browserType
  )}
});
const _crMsItemChartTypeClose = (
  chartType
) => ({
    [MS_ITEM]: {
      chartType,
      close: true
    }
});

const _crStore = () => ({
  loading: void 0,
  limitRemaining: void 0,
  items: {},
  [MS_ITEM]: void 0
})
, itemStore = createStoreWithSelector(_crStore)
, _selectItems = state => state.items
, _selectLoading = state => state.loading
, _selectLimitRemaining = state => state.limitRemaining
, _selectMsItem = state => state[MS_ITEM]
, [_set, _get] = getStoreApi(itemStore);

export const getItemByType = (chartType) => _selectItems(_get())[chartType];

export const useLoading = fCrUse(itemStore, _selectLoading)
export const useLimitRemaining = fCrUse(itemStore, _selectLimitRemaining)
export const useMsItem = fCrUse(itemStore, _selectMsItem)

const _createInitConfig = (chartType) => ({
  chartType: chartType,
  configs: [],
  isShow: true
});

const _crLoadingLimitRemaining = (
  loading,
  limitRemaining
) => ({
  loading,
  limitRemaining
})

export const showChart = (
  chartType,
  browserType
) => {
 const chartCont = getItemByType(chartType);
 if (chartCont){
   chartCont.isShow = true;
   _set(_crMsItemChartCont(chartCont))
 } else {
   const _items = _selectItems(_get());
   _items[chartType] = _createInitConfig(chartType);
   _set(_crMsItemComp(chartType, browserType))
 }
 setMenuItemOpen(chartType, browserType);
}

const _loadItemCompleted = (
  option,
  json
) => {
  /* eslint-disable no-undef */
  if (process.env.NODE_ENV !== 'production'){
  /* eslint-enable no-undef */
    console.log(option);
    console.log(json);
  }

  const {
    chartType,
    browserType
  } = option
  , comp = createItem(
     option,
     json,
     { chartType, browserType}
   )
  , chartCont = getItemByType(chartType);

  if (chartCont){
    chartCont.configs.unshift(comp);
    chartCont.isShow = true;
    _set(_crMsItemChartCont(chartCont))
  } else {
    const _items = _selectItems(_get())
    _items[chartType] = _createInitConfig(chartType);
    _items[chartType].configs.unshift(comp);
    _set(_crMsItemComp(chartType, browserType))
  }

  _set(_crLoadingLimitRemaining(
    LPAT_LOADING_COMPLETE,
    option.limitRemaining
  ))
  addMenuItemCounter(chartType, browserType);
}
, _loadItemFailed = (option) => {
  option.alertItemId = option.alertItemId
    || option.repo || '';
  showAlert(option)
  _logLoadError(option);
  _set(_crLoadingLimitRemaining(
    LPAT_LOADING_FAILED,
    option.limitRemaining
  ))
}

const isKeyTop = (
  key,
  option
) => {
  const {
    chartType
  } = option
  , slice = getItemByType(chartType);
  return toTopByKey(slice, key);
}

export const loadItem = (
  chartType,
  browserType,
  option
) => {
  const { loadId='LW' } = option;
  option.chartType = chartType;
  option.browserType = browserType;

  const {
    crKey,
    loadItem
  } = RouterLoad[loadId]
  , key = crKey(option);
  if (!isKeyTop(key, option)) {
    option.key = key
    _set({ loading: LPAT_LOADING })
    loadItem(option, _loadItemCompleted, _loadItemFailed);
  } else {
    showAlert(ALREADY_LOADED)
    showChart(chartType, browserType)
  }
}

export const closeChart = (
  chartType,
  browserType,
  key
) => {
  const chartCont = getItemByType(chartType);
  chartCont.configs = chartCont
    .configs.filter(comp => comp.key !== key)
  _set(_crMsItemChartCont(chartCont))
  minusMenuItemCounter(chartType, browserType);
}

export const closeChartContainer = setMenuItemClose

export const closeCompItemList = (
  chartType,
  browserType
) => {
  _set(_crMsItemChartTypeClose(chartType))
}

export const removeItems = (
  chartType,
  browserType
) => {
  const chartCont = removeAll(
    _get().items,
    chartType
  );
  resetMenuItemCounter(chartType, browserType)
  _set(_crMsItemChartCont(chartCont))
}

export const moveToTop = (
  chartType,
  key
) => {
  const chartCont = getItemByType(chartType);
  if (toTopByKey(chartCont, key)) {
   _set(_crMsItemChartCont(chartCont))
  }
}
