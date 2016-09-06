

import RouterItem from '../../components/factories/RouterItem';

import ChartActions from '../actions/ChartActions';
//import WatchActions from '../actions/WatchActions';
import ComponentActions from '../actions/ComponentActions';

import { ModalDialog } from '../../constants/Type';


const onCloseItem = ChartActions.closeChart
    , onWatchItem = ComponentActions.showModalDialog.bind(null, ModalDialog.ADD_ITEM );
    //, onWatchItem = WatchActions.addItem;

const WithItem = {
  createItem(option, json, parentProps){
    const { requestType } = option
         , _fnFactory= (RouterItem[requestType])
             ? RouterItem[requestType]
             : RouterItem.DEFAULT
     return _fnFactory({
       factory: this.getElementFactory(),
       option, json, parentProps,
       onCloseItem, onWatchItem
     })
  }
};

export default WithItem
