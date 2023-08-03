import Reflux from 'reflux-core';

import RouterLoad from '../logic/RouterLoad';
import Store from '../stores/AppStore';
import { showAlert } from '../compStore';

const ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};

export const CHAT_INIT_AND_SHOW_CHART = 'initAndShowChart'
export const CHAT_LOAD_STOCK = 'loadStock'
export const CHAT_LOAD_STOCK_COMPLETED = 'loadStockCompleted'
export const CHAT_LOAD_STOCK_FAILED = 'loadStockFailed'
export const CHAT_SHOW_CHART = 'showChart'
export const CHAT_CLOSE_CHART = 'closeChart'
export const CHAT_REMOVE_ALL = 'removeAll'
export const CHAT_MOVE_TO_TOP = 'moveToTop'

const _ChartActions =  Reflux.createActions({
    [CHAT_LOAD_STOCK]: {
       children: ['completed', 'failed'],
       isLoading: false,
       idLoading: void 0,
       isShouldEmit: true
       //cancelLoad : _fnCancelLoad
     },
    [CHAT_SHOW_CHART]: {},
    [CHAT_CLOSE_CHART]: {},
    [CHAT_REMOVE_ALL]: {},
    [CHAT_MOVE_TO_TOP]: {}
});

_ChartActions[CHAT_LOAD_STOCK].listen(function(
  chartType,
  browserType,
  option
){
  const { loadId='LW' } = option;
  option.chartType = chartType;
  option.browserType = browserType;

  const { crKey, loadItem } = RouterLoad[loadId];
  const key = crKey(option);
  if (!Store.isKeyTop(key, option)) {
    option.key = key
    this.isLoading = true;
    this.idLoading = key;
    loadItem(option, this.completed, this.failed);
  } else {
    showAlert(ALREADY_LOADED)
    _ChartActions.showChart(chartType, browserType)
  }
})

export const ChartActions = _ChartActions
