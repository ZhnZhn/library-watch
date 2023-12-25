import { useState } from '../uiApi';

import useShowHideComponent from './useShowHideComponent';
import useBrowserMenu from './useBrowserMenu';

const crInitialMenuItemsDf = () => [];

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
    hideBrowser,
    hKeyDown
  ] = useShowHideComponent(isShowInitial);
  return [
    menuItems,
    setMenuItems,
    isShowBrowser,
    showBrowser,
    hideBrowser,
    hKeyDown,
    useBrowserMenu(isShowBrowser, menuItems)
  ];
}

export default useBrowser
