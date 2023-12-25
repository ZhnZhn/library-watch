import {
  useRef,
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

const S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
};

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
        {
          menuItems.map((menuPart, index) => (
            <MenuPart
               {...menuPart}
               key={index}
               rowClass={rowClass}
               refFirstItem={index === 0 ? _refFirstItem : void 0}
            />)
          )
        }
        {children}
      </ScrollPane>
    </Browser>
  );
};

export default MenuBrowserDynamic
