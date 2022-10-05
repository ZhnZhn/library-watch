import { createElement } from '../../components/uiApi';

import Store from '../stores/AppStore';

import withDialog from './withDialog';
import withItemsContainer from './withItemsContainer';

const Factory = {

  ...withDialog,
  ...withItemsContainer,

  getElementFactory(){
    return createElement;
  },

  getStore(){
    return Store;
  },

  getDataConf(dialogType){
    const dataId = dialogType.split('_')[0];
    return Store.getSourceConfig(dataId, dialogType);
  }
};

export default Factory
