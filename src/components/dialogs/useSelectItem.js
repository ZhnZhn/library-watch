import {
  useRef,
  useCallback,
  setRefValue
} from '../uiApi';

const useSelectItem = (initialValue) => {
  const ref = useRef(initialValue || {})
  , setItem = useCallback(item => {
    setRefValue(ref, item)
  }, []);
  return [ref, setItem];
};

export default useSelectItem
