export {
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

export const getRefValue = ref => ref.current
export const setRefValue = (ref, value) => ref.current = value
