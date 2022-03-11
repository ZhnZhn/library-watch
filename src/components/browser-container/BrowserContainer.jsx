import {
  cloneElement,
  useState
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useListen from '../hooks/useListen';

import { BrowserType } from '../../constants/Type';

import WatchBrowser from '../browser-watch/WatchBrowser';
import DialogStack from '../zhn-containers/DialogStack';

const CL = "hrz-container";

const BrowserContainer = ({
  store,
  showBrowserAction,
  updateWatchAction,
  initDialogAction,
  showDialogAction,
  initBrowserAction,
  toggleWatchDbBrowserAction
}) => {
  const [isDoubleWatch, toggleIsDoubleWatch] = useToggle(false)
  , [elBrowsers, setElBrowsers] = useState([]);

  useListen(store, (actionType, data) => {
    if (actionType === initBrowserAction){
      setElBrowsers(prevElBrowsers => [data, ...prevElBrowsers])
    } else if (actionType === toggleWatchDbBrowserAction){
      toggleIsDoubleWatch()
    }
  })

  const _doubleWatch = isDoubleWatch
     ? (
        <WatchBrowser
          isShow={true}
          isEditMode={true}
          isDoubleWatch={true}
          browserType={BrowserType.WATCH_LIST}
          caption="Watch 2"
          store={store}
          showAction={showBrowserAction}
          updateAction={updateWatchAction}
        />
      )
    : null;

  return (
    <div className={CL}>
      <WatchBrowser
         browserType={BrowserType.WATCH_LIST}
         caption="Watch"
         store={store}
         showAction={showBrowserAction}
         updateAction={updateWatchAction}
      />
      {_doubleWatch}
      {elBrowsers.map(el => cloneElement(el))}
      <DialogStack
         maxDialog={3}
         store={store}
         initAction={initDialogAction}
         showAction={showDialogAction}
      />
    </div>
  );
};

export default BrowserContainer
