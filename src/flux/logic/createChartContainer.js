import { ChartActions } from '../actions/ChartActions';
import { ComponentActions } from '../actions/ComponentActions';

import CompItemList from '../../components/zhn-containers/CompItemList';

const createChartContainer = (
  conf,
  browserType
) => {
  const Comp = conf.chartContainerComp
    || CompItemList
  , chartType = conf.type;
  return (
    <Comp
      key={chartType}
      caption={conf.chartContainerCaption}
      chartType={chartType}
      browserType={browserType}
      onCloseContainer={ComponentActions.closeChartContainer.bind(null, chartType, browserType)}
      onRemoveAll={ChartActions.removeAll.bind(null, chartType, browserType)}
   />
 );
}

export default createChartContainer
