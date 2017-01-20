import React from 'react';

import Store from '../stores/AppStore';

import WithBrowserDynamic from './WithBrowserDynamic';
import WithDialog from './WithDialog';
import WithItemsContainer from './WithItemsContainer';
import WithItem from './WithItem';

const Factory = {

  ...WithBrowserDynamic,
  ...WithDialog,
  ...WithItemsContainer,
  ...WithItem,

  getElementFactory(){
    return React;
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
