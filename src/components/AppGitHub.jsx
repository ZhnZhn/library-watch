import React from 'react';

import GitHubStore from '../flux/stores/GitHubStore';
import { BrowserActionTypes } from '../flux/actions/BrowserActions';
import { ChartActionTypes } from '../flux/actions/ChartActions';
import { ComponentActionTypes } from '../flux/actions/ComponentActions';

import HeaderBar from './header/HeaderBar';
import BrowserContainer from './browser-container/BrowserContainer';
import ComponentHrzContainer from './zhnContainers/ComponentHrzContainer';
import DialogContainer from './zhnContainers/DialogContainer';

import RouterModalDialog from './dialogs/RouterModalDialog';

const AppGitHub = (props) => {
  return (
    <div>
      <HeaderBar store={GitHubStore} />
      <div className="component-container">
         <BrowserContainer
            store={GitHubStore}
            showBrowserAction={BrowserActionTypes.SHOW_BROWSER}
            initBrowserAction={BrowserActionTypes.INIT_BROWSER_DYNAMIC}
            updateWatchAction={BrowserActionTypes.UPDATE_WATCH_BROWSER}
            initDialogAction={ComponentActionTypes.INIT_AND_SHOW_DIALOG}
            showDialogAction={ComponentActionTypes.SHOW_DIALOG}
         />
         <ComponentHrzContainer
            store={GitHubStore}
            initShowAction={ChartActionTypes.INIT_AND_SHOW_CHART}
         />
      </div>
      <DialogContainer
         store={GitHubStore}
         showAction={ComponentActionTypes.SHOW_MODAL_DIALOG}
         routerDialog={RouterModalDialog}
      />
    </div>
  );
};

export default AppGitHub
