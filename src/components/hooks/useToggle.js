import {
  useState,
  useCallback
} from '../uiApi';

const _isFn = fn => typeof fn === "function";
const _isBool = v => typeof v === "boolean";

const useToggle = initialValue => {
  const [
    is,
    setIs
  ] = useState(() => _isFn(initialValue)
     ? initialValue()
     : !!initialValue
   )
  , toggle = useCallback(v => {
     if (_isBool(v)) {
       setIs(v)
     } else {
       setIs(is => !is)
     }
  }, []);
  return [is, toggle];
};

export default useToggle
