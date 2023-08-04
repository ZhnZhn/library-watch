import {
  useRef,
  useState,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';
import useBool from '../hooks/useBool';
//import useListen from '../hooks/useListen';

import Browser from '../zhn-atoms/Browser';
import CaptionRow from '../zhn-atoms/CaptionRow';
import ScrollPane from '../zhn-atoms/ScrollPane';
import MenuPart from './MenuPart';

const S_BROWSER = { paddingRight: 0 }
, S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
};

const MenuBrowserDynamic = ({
  isInitShow,
  caption,
  rowClass,
  //store,
  browserType,
  //showAction,
  //updateAction,
  useMsBrowserDynamic,
  //loadCompletedAction,
  sourceMenuUrl,
  onLoadMenu,
  children
}) => {
  const _refIsLoaded = useRef(false)
  , _refIsMounted = useRef(false)
  , [
    isShow,
    _hShow,
    _hHide
  ] = useBool(isInitShow)
  , [
    menuItems,
    setMenuItems
  ] = useState([]);

  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic) {
      if (msBrowserDynamic.browserType === browserType) {
        const { menuItems } = msBrowserDynamic;
        if (menuItems) {
          setRefValue(_refIsLoaded, true)
          setMenuItems([...menuItems])
        } else {
          _hShow()
        }
      }
    }
  })

  /*
  useListen(store, (actionType, data) => {
    if (actionType === showAction && data === browserType){
      _hShow();
    } else if (actionType === loadCompletedAction && data.browserType === browserType){
      setRefValue(_refIsLoaded, true)
      setMenuItems([...data.menuItems])
    } else if (actionType === updateAction && data === browserType){
      setMenuItems([...store.getBrowserMenu(browserType)])
    }
  })
  */

  useEffect(() => {
    setRefValue(_refIsMounted, true)
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (getRefValue(_refIsMounted)
     || (!getRefValue(_refIsLoaded) && isShow)) {
      setRefValue(_refIsMounted, false)
      onLoadMenu({
        browserType,
        caption,
        sourceMenuUrl
      })
    }
  }, [isShow])
  //onLoadMenu, browserType, caption, sourceMenuUrl
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <Browser
       isShow={isShow}
       style={S_BROWSER}
    >
      <CaptionRow
         caption={caption}
         onClose={_hHide}
      />
      <ScrollPane style={S_SCROLL_DIV}>
        {
          menuItems.map((menuPart, index) => (
            <MenuPart
               {...menuPart}
               key={index}
               rowClass={rowClass}
            />)
          )
        }
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default MenuBrowserDynamic
