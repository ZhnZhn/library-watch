import React from 'react';

import CHA from '../actions/ChartActions';
import CA from '../actions/ComponentActions';

import CompItemList from '../../components/zhn-containers/CompItemList';

const _createChartContainerComp = function(conf, browserType){
  const Comp = conf.chartContainerComp
    || CompItemList
  , _chartType = conf.type;
  return React.createElement(Comp, {
    key: _chartType,
    caption: conf.chartContainerCaption,
    chartType: _chartType,
    browserType: browserType,
    onCloseContainer: CA.closeChartContainer.bind(null, _chartType, browserType),
    onRemoveAll: CHA.removeAll.bind(null, _chartType, browserType)
  });
}


const withItemsContainer = {
  createChartContainer(dialogType, browserType){
    return _createChartContainerComp(
      this.getDataConf(dialogType), browserType
    );
  }
};

export default withItemsContainer
