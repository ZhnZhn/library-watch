import { getItemFactoryRoute } from "../../components/factories/RouterItem";
import { bindTo } from "../../utils/bindTo";

import { showAddItem } from "../compStore";
import {
  moveToTop,
  closeChart
} from "../itemStore";

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
  , _crItemElement = getItemFactoryRoute(requestType);
  return _crItemElement({
    option,
    json,
    parentProps,
    onMoveToTop: bindTo(moveToTop, chartType, key),
    onCloseItem: bindTo(closeChart, chartType, browserType, key),
    onWatchItem: showAddItem
  });
};

export default createItem
