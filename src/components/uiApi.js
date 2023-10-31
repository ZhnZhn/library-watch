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

const _fReturnMethod = (
  methodName,
  dfValue
) => (ref) => {
  const _inputInst = getRefValue(ref);
  return _inputInst && _isFn(_inputInst[methodName])
    ? _inputInst[methodName]()
    : dfValue;
}

export const isRefInputValid = _fReturnMethod("isValid", false)
export const getRefInputValue = _fReturnMethod("getValue")

const _fCallMethod = (
  methodName
) => (ref, value) => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && _isFn(_inputInst[methodName])) {
    _inputInst[methodName](value)
  }
};

export const setRefInputValue = _fCallMethod("setValue")
export const focusRefInput = _fCallMethod("focus")

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
