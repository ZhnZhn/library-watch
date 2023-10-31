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

export const getRefInputValue = (ref) => {
  const _inputInst = getRefValue(ref)
  return _inputInst && _isFn(_inputInst.getValue)
    ? _inputInst.getValue()
    : void 0;
}

export const focusHtmlElement = el => {
  if (el && _isFn(el.focus)) {
    el.focus()
  }
};

export const focusRefElement = ref => {
  focusHtmlElement(getRefValue(ref));
};

const _getFirstTouches = (
  touches
) => (touches && touches[0]) || {};

const _getTouchClientX = (
  touches
) => _getFirstTouches(touches).clientX;

const _getTouchClientY = (
  touches
) => _getFirstTouches(touches).clientY;

export const getClientX = (
  evt
) => evt.clientX
  || _getTouchClientX(evt.targetTouches)
  || _getTouchClientX(evt.changedTouches)
  || 0;

export const getClientY = (
  evt
) => evt.clientY
  || _getTouchClientY(evt.targetTouches)
  || _getTouchClientY(evt.changedTouches)
  || 0;
