import {
  cloneElement,
  useState
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import useListen from '../hooks/useListen';

import { BrowserType as BT } from '../../constants/Type';

import WatchBrowser from '../browser-watch/WatchBrowser';
import DialogStack from '../zhn-containers/DialogStack';

const CL = "hrz-container";

const BrowserContainer = ({
  store,
  useMsBrowser,
  updateWatchAction,
  useDgOption,
  initBrowserAction,
}) => {
  const [
    isDoubleWatch,
    toggleIsDoubleWatch
  ] = useToggle(false)
  , [
    elBrowsers,
    setElBrowsers
  ] = useState([]);

  useMsBrowser(msBrowser => {
    if (msBrowser && msBrowser.id === BT.WATCH_LIST_DB) {
      toggleIsDoubleWatch()
    }
  })

  useListen(store, (actionType, data) => {
    if (actionType === initBrowserAction){
      setElBrowsers(prevElBrowsers => [data, ...prevElBrowsers])
    }
  })

  const _doubleWatch = isDoubleWatch
     ? (
        <WatchBrowser
          isShow={true}
          isEditMode={true}
          isDoubleWatch={true}
          browserType={BT.WATCH_LIST}
          useMsBrowser={useMsBrowser}
          caption="Watch 2"
          store={store}
          updateAction={updateWatchAction}
        />
      )
    : null;

  return (
    <div className={CL}>
      <WatchBrowser
         browserType={BT.WATCH_LIST}
         caption="Watch"
         store={store}
         useMsBrowser={useMsBrowser}
         updateAction={updateWatchAction}
      />
      {_doubleWatch}
      {elBrowsers.map(el => cloneElement(el))}
      <DialogStack
         maxDialog={3}
         useDgOption={useDgOption}
      />
    </div>
  );
};

export default BrowserContainer
