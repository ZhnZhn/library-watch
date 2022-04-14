import Store from '../flux/stores/AppStore';
import {
  BAT_SHOW_BROWSER,
  BAT_INIT_BROWSER_DYNAMIC,
  BAT_UPDATE_WATCH_BROWSER,
  BAT_TOGGLE_WATCH_DB_BROWSER
 } from '../flux/actions/BrowserActions';
import { ChartActionTypes } from '../flux/actions/ChartActions';
import { ComponentActionTypes } from '../flux/actions/ComponentActions';

import HeaderBar from './header/HeaderBar';
import About from './about/About';
import BrowserContainer from './browser-container/BrowserContainer';
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer';
import DialogContainer from './zhn-containers/DialogContainer';

import RouterModalDialog from './dialogs/RouterModalDialog';

const AppLibraryWatch = (props) => (
  <div>
    <HeaderBar store={Store} />
    <div className="component-container">
       <BrowserContainer
          store={Store}
          showBrowserAction={BAT_SHOW_BROWSER}
          initBrowserAction={BAT_INIT_BROWSER_DYNAMIC}
          updateWatchAction={BAT_UPDATE_WATCH_BROWSER}
          toggleWatchDbBrowserAction={BAT_TOGGLE_WATCH_DB_BROWSER}
          initDialogAction={ComponentActionTypes.INIT_AND_SHOW_DIALOG}
          showDialogAction={ComponentActionTypes.SHOW_DIALOG}
       />
       <About store={Store} />
       <ComponentHrzContainer
          store={Store}
          initShowAction={ChartActionTypes.INIT_AND_SHOW_CHART}
       />
    </div>
    <DialogContainer
       store={Store}
       showAction={ComponentActionTypes.SHOW_MODAL_DIALOG}
       routerDialog={RouterModalDialog}
    />
  </div>
);


export default AppLibraryWatch
