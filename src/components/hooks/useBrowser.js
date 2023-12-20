import useBool from './useBool';
import useKeyEscape from './useKeyEscape';
import useBrowserMenu from './useBrowserMenu';

const useBrowser = (
  isShowInitial,
  menuItems
) => {
  const [
     isShowBrowser,
     showBrowser,
     hideBrowser
   ] = useBool(isShowInitial);
  return [
    isShowBrowser,
    showBrowser,
    hideBrowser,
    useKeyEscape(hideBrowser),
    useBrowserMenu(isShowBrowser, menuItems)
  ];
}

export default useBrowser
