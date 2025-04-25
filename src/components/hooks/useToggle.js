import { isFn } from '../../utils/isTypeFn';

import {
  useState,
  useCallback
} from '../uiApi';

const useToggle = (
  initialValue,
  isEventStopPropagation
) => {
  const [
    is,
    setIs
  ] = useState(() => isFn(initialValue)
     ? initialValue()
     : !!initialValue
   )
   /*eslint-disable react-hooks/exhaustive-deps */
  , toggle = useCallback(evt => {
      if (isEventStopPropagation && evt) {
        evt.stopPropagation()
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
