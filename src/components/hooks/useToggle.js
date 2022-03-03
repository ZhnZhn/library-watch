import {
  useState,
  useCallback
} from '../uiApi';

const _isBool = v => typeof v === "boolean";

const useToggle = initialValue => {
  const [
    is,
    setIs
  ] = useState(()=>!!initialValue)
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
