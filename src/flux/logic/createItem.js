import { createElement } from '../../components/uiApi';
import RouterItem from '../../components/factories/RouterItem';

import { ChartActions } from '../actions/ChartActions';
import { showAddItem } from '../compStore';

const createItem = (
  option,
  json,
  parentProps
) => {
  const {
    requestType,
    chartType,
    key
  } = option
  , _fnFactory = RouterItem[requestType]
      || RouterItem.DEFAULT;
   return _fnFactory({
     createElement,
     option,
     json,
     parentProps,
     onMoveToTop: ChartActions.moveToTop.bind(null, chartType, key),
     onCloseItem: ChartActions.closeChart,
     onWatchItem: showAddItem
   });
}

export default createItem
