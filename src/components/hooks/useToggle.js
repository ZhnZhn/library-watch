import {
  useState,
  useCallback
} from '../uiApi';

const _isFn = fn => typeof fn === "function";

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
  , toggle = useCallback(event => {
      if (isEventStopPropagation && event) {
        event.stopPropagation()
      }
      setIs(is => !is)
  }, []);
  // isEventStopPropagation
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    is,
    toggle,
    setIs
  ];
};

export default useToggle
