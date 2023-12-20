import {
  useRef,
  useState,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';

import useBrowser from '../hooks/useBrowser';
import useRecentFocusedElement from '../hooks/useRecentFocusedElement';

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
  browserType,
  useMsBrowserDynamic,
  sourceMenuUrl,
  onLoadMenu,
  children
}) => {
  const _refIsLoaded = useRef(false)
  , _refIsMounted = useRef(false)
  , [
    menuItems,
    setMenuItems
  ] = useState([])
  , [
    isShow,
    _hShow,
    _hHide,
    _hKeyDown,
    _refFirstItem
  ] = useBrowser(isInitShow, menuItems)
  , [
    _hFocusElement,
    _focusPrevElement
  ] = useRecentFocusedElement();

  useMsBrowserDynamic(msBrowserDynamic => {
    if (msBrowserDynamic) {
      if (msBrowserDynamic.browserType === browserType) {
        const { menuItems } = msBrowserDynamic;
        if (menuItems) {
          setRefValue(_refIsLoaded, true)
          setMenuItems([...menuItems])
        } else {
          _hShow()
          _focusPrevElement()
        }
      }
    }
  })

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
       onKeyDown={_hKeyDown}
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
               refFirstItem={index === 0 ? _refFirstItem : void 0}
               onFocus={_hFocusElement}
            />)
          )
        }
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default MenuBrowserDynamic
