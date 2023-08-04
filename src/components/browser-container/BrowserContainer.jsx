import {
  cloneElement,
  useState
} from '../uiApi';
import useToggle from '../hooks/useToggle';

import { BrowserType as BT } from '../../constants/Type';

import WatchBrowser from '../browser-watch/WatchBrowser';
import DialogStack from '../zhn-containers/DialogStack';

const CL = "hrz-container";

const BrowserContainer = ({
  useMsBrowser,
  useMsBrowserDynamic,
  useWatchList,
  updateWatchAction,
  useDgOption
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
  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic && msBrowserDynamic.elBrowser) {
      setElBrowsers(prevElBrowsers => [
        msBrowserDynamic.elBrowser,
        ...prevElBrowsers
      ])
    }
  })

  const _doubleWatch = isDoubleWatch
     ? (
        <WatchBrowser
          isShow={true}
          isEditMode={true}
          isDoubleWatch={true}
          caption="Watch 2"
          browserType={BT.WATCH_LIST}
          useMsBrowser={useMsBrowser}
          useWatchList={useWatchList}
        />
      )
    : null;

  return (
    <div className={CL}>
      <WatchBrowser
         caption="Watch"
         browserType={BT.WATCH_LIST}
         useMsBrowser={useMsBrowser}
         useWatchList={useWatchList}
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
