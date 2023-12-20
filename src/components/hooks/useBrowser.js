import { useState } from '../uiApi';

import useBool from './useBool';
import useKeyEscape from './useKeyEscape';
import useBrowserMenu from './useBrowserMenu';

const crInitialMenuItemsDf = () => []

const useBrowser = (
  isShowInitial,
  crInitialMenuItems=crInitialMenuItemsDf
) => {
  const [
    menuItems,
    setMenuItems
  ] = useState(crInitialMenuItems)
  , [
     isShowBrowser,
     showBrowser,
     hideBrowser
   ] = useBool(isShowInitial);
  return [
    menuItems,
    setMenuItems,
    isShowBrowser,
    showBrowser,
    hideBrowser,
    useKeyEscape(hideBrowser),
    useBrowserMenu(isShowBrowser, menuItems)
  ];
}

export default useBrowser
