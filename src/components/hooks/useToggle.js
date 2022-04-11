import {
  useState,
  useCallback
} from '../uiApi';

const _isFn = fn => typeof fn === "function";
const _isBool = v => typeof v === "boolean";

const useToggle = (
  initialValue,
  isEventStopPropagation
) => {
  const [
    is,
    setIs
  ] = useState(() => _isFn(initialValue)
     ? initialValue()
     : !!initialValue
   )
   /*eslint-disable react-hooks/exhaustive-deps */
  , toggle = useCallback(valueOrEvent => {
     if (_isBool(valueOrEvent)) {
       setIs(valueOrEvent)
     } else {
       if (isEventStopPropagation) {
         valueOrEvent.stopPropagation()
       }
       setIs(is => !is)
     }
  }, []);
  // isEventStopPropagation
  /*eslint-enable react-hooks/exhaustive-deps */

  return [is, toggle];
};

export default useToggle
