import { createElement } from '../../components/uiApi';
import RouterItem from '../../components/factories/RouterItem';

import { showAddItem } from '../compStore';
import {
  moveToTop,
  closeChart
} from '../itemStore';

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
     onMoveToTop: moveToTop.bind(null, chartType, key),
     onCloseItem: closeChart,
     onWatchItem: showAddItem
   });
}

export default createItem
