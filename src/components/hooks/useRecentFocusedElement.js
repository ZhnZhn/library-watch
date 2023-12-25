import {
  FN_NOOP,
  useRef,
  useMemo,
  setRefValue,
  focusRefElement
} from '../uiApi';

import { HAS_KEYBOARD_FOCUS } from '../has';

const DF_TUPLE = [void 0, FN_NOOP];

const useRecentFocusedElement = () => {
  const _refRecentFocusedElement = useRef();
  /*eslint-disable react-hooks/rules-of-hooks */
  return HAS_KEYBOARD_FOCUS ? useMemo(() => [
    (evt) => {
      setRefValue(_refRecentFocusedElement, evt.target)
    },
    () => focusRefElement(_refRecentFocusedElement)
  ], []) : DF_TUPLE;
  /*eslint-enable react-hooks/rules-of-hooks */
};

export default useRecentFocusedElement
