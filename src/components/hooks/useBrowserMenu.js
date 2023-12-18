import {
  useRef,
  useEffect,
  focusRefElement
} from '../uiApi';

const useBrowserMenu = (
  isShow,
  menu
) => {
  const refFirstItem = useRef();

  useEffect(() => {    
    if (menu && isShow) {
      focusRefElement(refFirstItem)
    }
  }, [isShow, menu])

  return refFirstItem;
}

export default useBrowserMenu
