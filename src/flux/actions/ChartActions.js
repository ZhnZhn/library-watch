import Reflux from 'reflux-core';

import RouterLoad from '../logic/RouterLoad';
import Store from '../stores/AppStore'
import ComponentActions from './ComponentActions'

const ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};

export const ChartActionTypes = {
  INIT_AND_SHOW_CHART: 'initAndShowChart',

  LOAD_STOCK: 'loadStock',
  LOAD_STOCK_COMPLETED: 'loadStockCompleted',
  LOAD_STOCK_FAILED: 'loadStockFailed',

  SHOW_CHART: 'showChart',
  CLOSE_CHART: 'closeChart',

  REMOVE_ALL: 'removeAll',
  MOVE_TO_TOP: 'moveToTop'
};

const A = ChartActionTypes;

const ChartActions =  Reflux.createActions({
    [A.LOAD_STOCK]: {
       children: ['completed', 'failed'],
       isLoading: false,
       idLoading: undefined,
       isShouldEmit: true
       //cancelLoad : _fnCancelLoad
     },
    [A.SHOW_CHART]: {},
    [A.CLOSE_CHART]: {},
    [A.REMOVE_ALL]: {},
    [A.MOVE_TO_TOP]: {}
});

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function(chartType, browserType, option){
  const { loadId='LW' } = option;
  option.chartType = chartType;
  option.browserType = browserType;

  const { crKey, loadItem } = RouterLoad[loadId];
  const key = crKey(option);
  if ( !(Store.isKeyTop(key, option)) ) {
    option.key = key
    this.isLoading = true;
    this.idLoading = key;
    loadItem(option, this.completed, this.failed);
  } else {
    ComponentActions.showAlert(ALREADY_LOADED)
    ChartActions.showChart(chartType, browserType)
  }
})


export default ChartActions
