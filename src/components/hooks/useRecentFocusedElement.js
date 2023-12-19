import {
  useRef,
  useMemo,
  setRefValue,
  focusRefElement
} from '../uiApi';

const useRecentFocusedElement = () => {
  const _refRecentFocusedElement = useRef();
  return useMemo(() => [
    (evt) => {
      setRefValue(_refRecentFocusedElement, evt.target)
    },
    () => focusRefElement(_refRecentFocusedElement)
  ], []);
};

export default useRecentFocusedElement
