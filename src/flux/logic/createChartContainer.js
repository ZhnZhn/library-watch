import { createElement } from '../../components/uiApi';

import { ChartActions } from '../actions/ChartActions';
import { ComponentActions } from '../actions/ComponentActions';

import CompItemList from '../../components/zhn-containers/CompItemList';

const createChartContainer = (
  conf,
  browserType
) => {
  const Comp = conf.chartContainerComp
    || CompItemList
  , _chartType = conf.type;
  return createElement(Comp, {
    key: _chartType,
    caption: conf.chartContainerCaption,
    chartType: _chartType,
    browserType: browserType,
    onCloseContainer: ComponentActions.closeChartContainer.bind(null, _chartType, browserType),
    onRemoveAll: ChartActions.removeAll.bind(null, _chartType, browserType)
  });
}

export default createChartContainer
