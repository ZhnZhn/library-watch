import {
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle
} from '../uiApi';
import focusHtmlElement from '../zhn-utils/focusHtmlElement';

const _getRefValue = ref => (ref || {}).current;

const useDialogFocus = (ref, isShow) => {
  const refRoot = useRef()
  , refBtMore = useRef()
  , _refPrevFocused = useRef()
  , _refIsShowPrev = useRef()
  , focus = useCallback(() => {
      _refPrevFocused.current = document.activeElement
      focusHtmlElement(_getRefValue(refBtMore) || _getRefValue(refRoot))
  }, [])
  , focusPrev = useCallback(()=>{
      focusHtmlElement(_getRefValue(_refPrevFocused))
      _refPrevFocused.current = null
  }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    const _isPrevShow = _getRefValue(_refIsShowPrev);
    if (isShow && !_isPrevShow) {
      focus()
    } else if (!isShow && _isPrevShow) {
      focusPrev()
    }
    _refIsShowPrev.current = isShow
  }, [isShow])
  //focus, focusPrev
  useImperativeHandle(ref, () => ({
    focus,
    focusPrev
  }), [])
  //focus, focusPrev
  /*eslint-enable react-hooks/exhaustive-deps */

  return [refRoot, refBtMore];
};

export default useDialogFocus
