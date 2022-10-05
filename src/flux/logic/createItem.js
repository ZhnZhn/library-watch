import { createElement } from '../../components/uiApi';
import RouterItem from '../../components/factories/RouterItem';

import { ChartActions } from '../actions/ChartActions';
import { ComponentActions } from '../actions/ComponentActions';

import { ModalDialog } from '../../constants/Type';

const onWatchItem = ComponentActions.showModalDialog.bind(null, ModalDialog.ADD_ITEM );

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
     onWatchItem
   });
}

export default createItem
