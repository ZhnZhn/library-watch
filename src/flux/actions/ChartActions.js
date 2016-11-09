import Reflux from 'reflux';

import RouterLoad from '../logic/RouterLoad';

export const ChartActionTypes = {
  INIT_AND_SHOW_CHART : 'initAndShowChart',

  LOAD_STOCK : 'loadStock',
  LOAD_STOCK_COMPLETED : 'loadStockCompleted',
  LOAD_STOCK_FAILED : 'loadStockFailed',

  SHOW_CHART : 'showChart',
  CLOSE_CHART : 'closeChart'

}

const ChartActions =  Reflux.createActions({
      [ChartActionTypes.LOAD_STOCK] : {
         children : ['completed', 'failed'],
         isLoading : false,
         idLoading : undefined,
         isShouldEmit : true
         //cancelLoad : _fnCancelLoad
       },
      [ChartActionTypes.SHOW_CHART] : {},
      [ChartActionTypes.CLOSE_CHART] : {}
});

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function(chartType, browserType, option){

  this.isLoading = true;
  this.idLoading = option.key;

  const { loadId='LW' } = option;
  option.chartType = chartType;
  option.browserType = browserType;

  RouterLoad[loadId](option, this.completed, this.failed);
})


export default ChartActions
