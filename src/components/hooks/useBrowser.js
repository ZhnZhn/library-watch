import useBool from './useBool';
import useKeyEscape from './useKeyEscape';

const useBrowser = (
  isShowInitial
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
    useKeyEscape(hideBrowser)
  ];
}

export default useBrowser
