import React from 'react';

//import ChartActions from '../actions/ChartActions';
import ComponentActions from '../actions/ComponentActions';

import ChartContainer2 from '../../components/zhnContainers/ChartContainer2'

//const _onCloseItem = ChartActions.closeChart;
const _fnCloseChartContainer = function(chartType, browserType){
  return ComponentActions.closeChartContainer.bind(null, chartType, browserType);
}

const _createChartContainerComp = function(conf, browserType){
  const Comp = conf.chartContainerComp ? conf.chartContainerComp : ChartContainer2;
  return React.createElement(Comp, {
            key : conf.type,
            caption : conf.chartContainerCaption,
            chartType : conf.type,
            browserType : browserType,
            onCloseContainer : _fnCloseChartContainer(conf.type, browserType)
            //onCloseItem : _onCloseItem
  });
}


const WithItemsContainer = {
  createChartContainer(dialogType, browserType){
    return _createChartContainerComp(this.getDataConf(dialogType), browserType);
  }
};

export default WithItemsContainer
