import { useEffect } from './uiApi';

import Store from '../flux/stores/AppStore';
import { CHAT_INIT_AND_SHOW_CHART } from '../flux/actions/ChartActions';
import {
  useMsBrowser,
  useMsBrowserDynamic
} from '../flux/browserStore';
import {
  useDgOption,
  useMdOption
} from '../flux/compStore';
import {
  initWatchList,
  useWatchList
} from '../flux/watch-list/watchListStore';

import useHotKeys from './hotkeys/useHotKeys';

import HeaderBar from './header/HeaderBar';
import About from './about/About';
import BrowserContainer from './browser-container/BrowserContainer';
import ComponentHrzContainer from './zhn-containers/ComponentHrzContainer';
import DialogContainer from './zhn-containers/DialogContainer';

import RouterModalDialog from './dialogs/RouterModalDialog';

const AppLibraryWatch = (props) => {
  useHotKeys()
  useEffect(() => {
    initWatchList()
  }, [])
  return (
    <div>
      <HeaderBar store={Store} />
      <div className="component-container">
         <BrowserContainer            
            useMsBrowser={useMsBrowser}
            useMsBrowserDynamic={useMsBrowserDynamic}
            useWatchList={useWatchList}
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
