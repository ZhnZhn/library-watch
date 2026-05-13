import {
  useRef,
  useCallback
} from '../uiApi';

const useRefItemCaption = () => {
  const _ref = useRef(null)
  , _setItemCaption = useCallback(item => {
    _ref.current = item?.caption || null
  }, []);
  return [_ref, _setItemCaption];
};

export default useRefItemCaption
