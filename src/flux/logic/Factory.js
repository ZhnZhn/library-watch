import React from 'react';

import Store from '../stores/AppStore';

import withDialog from './withDialog';
import withDynamicBrowser from './withDynamicBrowser';
import withItemsContainer from './withItemsContainer';
import withItem from './withItem';

const Factory = {

  ...withDialog,
  ...withDynamicBrowser,
  ...withItemsContainer,
  ...withItem,

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
