import React from 'react';

import GitHubStore from '../stores/GitHubStore';

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
    return GitHubStore;
  },

  getDataConf(dialogType){
    const dataId = dialogType.split('_')[0];
    return GitHubStore.getSourceConfig(dataId, dialogType);
  }

};

export default Factory
