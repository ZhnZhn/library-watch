"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsItem = exports.useLoading = exports.useLimitRemaining = exports.showChart = exports.removeItems = exports.moveToTop = exports.loadItem = exports.getItemByType = exports.closeCompItemList = exports.closeChartContainer = exports.closeChart = void 0;
var _storeApi = require("./storeApi");
var _RouterLoad = _interopRequireDefault(require("./logic/RouterLoad"));
var _createItem = _interopRequireDefault(require("./logic/createItem"));
var _createChartContainer = _interopRequireDefault(require("./logic/createChartContainer"));
var _LoadingProgressActions = require("./actions/LoadingProgressActions");
var _browserFn = require("./browserFn");
var _dialogFn = require("./dialogFn");
var _compStore = require("./compStore");
var _ChartLogicFn = require("./stores/chart/ChartLogicFn");
const ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};
const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _logLoadError = _ref => {
  let {
    alertCaption,
    alertDescr,
    alertItemId
  } = _ref;
  console.log('%c' + alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
};
const _crStore = () => ({
    loading: void 0,
    limitRemaining: void 0,
    items: {},
    msItem: void 0
  }),
  itemStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectItems = state => state.items,
  _selectLoading = state => state.loading,
  _selectLimitRemaining = state => state.limitRemaining,
  _selectMsItem = state => state.msItem,
  [_set, _get] = (0, _storeApi.getStoreApi)(itemStore);
const getItemByType = chartType => _selectItems(_get())[chartType];
exports.getItemByType = getItemByType;
const useLoading = (0, _storeApi.fCrUse)(itemStore, _selectLoading);
exports.useLoading = useLoading;
const useLimitRemaining = (0, _storeApi.fCrUse)(itemStore, _selectLimitRemaining);
exports.useLimitRemaining = useLimitRemaining;
const useMsItem = (0, _storeApi.fCrUse)(itemStore, _selectMsItem);
exports.useMsItem = useMsItem;
const _createInitConfig = chartType => ({
  chartType: chartType,
  configs: [],
  isShow: true
});
const _crMsItemChartCont = chartCont => ({
  msItem: {
    chartCont
  }
});
const _crMsItemComp = (chartType, browserType) => ({
  msItem: {
    Comp: (0, _createChartContainer.default)((0, _dialogFn.getDataConf)(chartType), browserType)
  }
});
const _crMsItemChartTypeClose = chartType => ({
  msItem: {
    chartType,
    close: true
  }
});
const _crLoadingLimitRemaining = (loading, limitRemaining) => ({
  loading,
  limitRemaining
});
const showChart = (chartType, browserType) => {
  const chartCont = getItemByType(chartType);
  if (chartCont) {
    chartCont.isShow = true;
    _set(_crMsItemChartCont(chartCont));
  } else {
    const _items = _selectItems(_get());
    _items[chartType] = _createInitConfig(chartType);
    _set(_crMsItemComp(chartType, browserType));
  }
  (0, _browserFn.setMenuItemOpen)(chartType, browserType);
};
exports.showChart = showChart;
const _loadItemCompleted = (option, json) => {
    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-enable no-undef */
      console.log(option);
      console.log(json);
    }
    const {
        chartType,
        browserType
      } = option,
      comp = (0, _createItem.default)(option, json, {
        chartType,
        browserType
      }),
      chartCont = getItemByType(chartType);
    if (chartCont) {
      chartCont.configs.unshift(comp);
      chartCont.isShow = true;
      _set(_crMsItemChartCont(chartCont));
    } else {
      const _items = _selectItems(_get());
      _items[chartType] = _createInitConfig(chartType);
      _items[chartType].configs.unshift(comp);
      _set(_crMsItemComp(chartType, browserType));
    }
    _set(_crLoadingLimitRemaining(_LoadingProgressActions.LPAT_LOADING_COMPLETE, option.limitRemaining));
    (0, _browserFn.addMenuItemCounter)(chartType, browserType);
  },
  _loadItemFailed = option => {
    option.alertItemId = option.alertItemId || option.repo || '';
    (0, _compStore.showAlert)(option);
    _logLoadError(option);
    _set(_crLoadingLimitRemaining(_LoadingProgressActions.LPAT_LOADING_FAILED, option.limitRemaining));
  };
const isKeyTop = (key, option) => {
  const {
      chartType
    } = option,
    slice = getItemByType(chartType);
  return (0, _ChartLogicFn.toTopByKey)(slice, key);
};
const loadItem = (chartType, browserType, option) => {
  const {
    loadId = 'LW'
  } = option;
  option.chartType = chartType;
  option.browserType = browserType;
  const {
      crKey,
      loadItem
    } = _RouterLoad.default[loadId],
    key = crKey(option);
  if (!isKeyTop(key, option)) {
    option.key = key;
    _set({
      loading: _LoadingProgressActions.LPAT_LOADING
    });
    loadItem(option, _loadItemCompleted, _loadItemFailed);
  } else {
    (0, _compStore.showAlert)(ALREADY_LOADED);
    showChart(chartType, browserType);
  }
};
exports.loadItem = loadItem;
const closeChart = (chartType, browserType, key) => {
  const chartCont = getItemByType(chartType);
  chartCont.configs = chartCont.configs.filter(comp => comp.key !== key);
  _set(_crMsItemChartCont(chartCont));
  (0, _browserFn.minusMenuItemCounter)(chartType, browserType);
};
exports.closeChart = closeChart;
const closeChartContainer = _browserFn.setMenuItemClose;
exports.closeChartContainer = closeChartContainer;
const closeCompItemList = (chartType, browserType) => {
  _set(_crMsItemChartTypeClose(chartType));
};
exports.closeCompItemList = closeCompItemList;
const removeItems = (chartType, browserType) => {
  const chartCont = (0, _ChartLogicFn.removeAll)(_get().items, chartType);
  (0, _browserFn.resetMenuItemCounter)(chartType, browserType);
  _set(_crMsItemChartCont(chartCont));
};
exports.removeItems = removeItems;
const moveToTop = (chartType, key) => {
  const chartCont = getItemByType(chartType);
  if ((0, _ChartLogicFn.toTopByKey)(chartCont, key)) {
    _set(_crMsItemChartCont(chartCont));
  }
};
exports.moveToTop = moveToTop;
//# sourceMappingURL=itemStore.js.map