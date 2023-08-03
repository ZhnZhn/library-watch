import Store from '../flux/stores/AppStore';
import {
  BAT_INIT_BROWSER_DYNAMIC,
  BAT_UPDATE_WATCH_BROWSER,
  BAT_TOGGLE_WATCH_DB_BROWSER
 } from '../flux/actions/BrowserActions';
import { CHAT_INIT_AND_SHOW_CHART } from '../flux/actions/ChartActions';
import {
  useMsBrowser
} from '../flux/browserStore';
import {
  useDgOption,
  useMdOption
} from '../flux/compStore';

import useHotKeys from './hotkeys/useHotKeys';

import HeaderBar from './header/HeaderBar';
import About from './about/About';
import BrowserContainer from './browser-container/BrowserContainer';
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer';
import DialogContainer from './zhn-containers/DialogContainer';

import RouterModalDialog from './dialogs/RouterModalDialog';

const AppLibraryWatch = (props) => {
  useHotKeys()
  return (
    <div>
      <HeaderBar store={Store} />
      <div className="component-container">
         <BrowserContainer
            store={Store}            
            useMsBrowser={useMsBrowser}
            initBrowserAction={BAT_INIT_BROWSER_DYNAMIC}
            updateWatchAction={BAT_UPDATE_WATCH_BROWSER}
            toggleWatchDbBrowserAction={BAT_TOGGLE_WATCH_DB_BROWSER}
            useDgOption={useDgOption}
         />
         <About store={Store} />
         <ComponentHrzContainer
            store={Store}
            initShowAction={CHAT_INIT_AND_SHOW_CHART}
         />
      </div>
      <DialogContainer
         store={Store}
         useMdOption={useMdOption}
         routerDialog={RouterModalDialog}
      />
    </div>
  );
}

export default AppLibraryWatch
