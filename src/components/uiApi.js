export {
  Component,
  cloneElement,
  createElement,
  memo,
  forwardRef,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect,
  useImperativeHandle
} from 'react';

const _isFn = fn => typeof fn === 'function';

export const getRefValue = ref => (ref || {}).current
export const setRefValue = (
  ref,
  value
) => {
  if (ref) {
    ref.current = value
  }
}

export const focusRefElement = ref => {
  const _element = getRefValue(ref);
  if (_element && _isFn(_element.focus)) {
    _element.focus()
  }
};
