import {
  bindTo,
  createElement
} from '../../components/uiApi';
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
    browserType,
    key
  } = option
  , _fnFactory = RouterItem[requestType]
      || RouterItem.DEFAULT;
   return _fnFactory({
     createElement,
     option,
     json,
     parentProps,
     onMoveToTop: bindTo(moveToTop, chartType, key),
     onCloseItem: bindTo(closeChart, chartType, browserType, key),
     onWatchItem: showAddItem
   });
};

export default createItem
