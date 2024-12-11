import {
  useRef,
  useEffect,
  getRefValue,
  setRefValue,
  safeMap
} from '../uiApi';

import useBrowser from '../hooks/useBrowser';
import useRecentFocusedElement from '../hooks/useRecentFocusedElement';

import Browser from '../zhn/Browser';
import CaptionRow from '../zhn/CaptionRow';
import ScrollPane from '../zhn/ScrollPane';
import MenuPart from './MenuPart';

const S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
};

const BrowserMenu = ({
  menuItems,
  rowClass,
  refFirstItem
}) => safeMap(menuItems, (menuPart, index) => (<MenuPart
     key={index}
     refFirstItem={index === 0 ? refFirstItem : void 0}
     isInitClose={menuPart.isInitClose}
     caption={menuPart.caption}
     items={menuPart.items}
     rowClass={rowClass}
  />)
);

const MenuBrowserDynamic = ({
  isShowInitial,
  caption,
  rowClass,
  browserType,
  useMsBrowserDynamic,
  onLoadMenu,
  children
}) => {
  const _refIsLoaded = useRef(false)
  , [
    menuItems,
    setMenuItems,
    isShow,
    _hShow,
    _hHide,
    _hKeyDown,
    _refFirstItem
  ] = useBrowser(isShowInitial)
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

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShow && !getRefValue(_refIsLoaded)) {
      onLoadMenu()
    }
  }, [isShow])
  //onLoadMenu
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <Browser
       isShow={isShow}
       onKeyDown={_hKeyDown}
    >
      <CaptionRow
         caption={caption}
         onClose={_hHide}
      />
      <ScrollPane
         style={S_SCROLL_DIV}
         onFocusIn={_hFocusElement}
      >
        <BrowserMenu
           menuItems={menuItems}
           rowClass={rowClass}
           refFirstItem={_refFirstItem}
        />
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default MenuBrowserDynamic
