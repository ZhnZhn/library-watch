import {
  closeChartContainer,
  removeItems
} from '../itemStore';

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
      onCloseContainer={closeChartContainer.bind(null, chartType, browserType)}
      onRemoveAll={removeItems.bind(null, chartType, browserType)}      
   />
 );
}

export default createChartContainer
