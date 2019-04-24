
import RouterItem from '../../components/factories/RouterItem';

import CHA from '../actions/ChartActions';
import ComponentActions from '../actions/ComponentActions';

import { ModalDialog } from '../../constants/Type';

const onWatchItem = ComponentActions.showModalDialog.bind(null, ModalDialog.ADD_ITEM );

const withItem = {
  createItem(option, json, parentProps){
    const {
      requestType,
      chartType, key
    } = option
    , _fnFactory= (RouterItem[requestType])
        ? RouterItem[requestType]
        : RouterItem.DEFAULT;
     return _fnFactory({
       factory: this.getElementFactory(),
       option, json, parentProps,
       onMoveToTop: CHA.moveToTop.bind(null, chartType, key),
       onCloseItem: CHA.closeChart,
       onWatchItem
     });
  }
};

export default withItem
