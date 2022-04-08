import {
  useRef,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

const _removeClickListener = (
  listener,
  ref
) => {
  if (getRefValue(ref)) {
    document.removeEventListener('click', listener, true);
    ref.current = null
  }
};

const useClickOutside = (
  isShow,
  onClickOutside
) => {
  const _ref = useRef(null)
  , _refIs = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickOutside = useCallback(event => {
      const _el = getRefValue(_ref);
      if ( _el && _el.contains
        && !_el.contains(event.target)
      ){
        event.stopPropagation()
        onClickOutside(event)
      }
  }, []);
  // onClickOutside
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (isShow && !getRefValue(_refIs)) {
      document.addEventListener('click', _hClickOutside, true)
      _refIs.current = true
    } else if (!isShow) {
      _removeClickListener(_hClickOutside, _refIs)
    }
  })

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    return () => _removeClickListener(_hClickOutside, _refIs)
  }, [])
  // _hClickOutside
  /*eslint-enable react-hooks/exhaustive-deps */

  return _ref;
};


export default useClickOutside
