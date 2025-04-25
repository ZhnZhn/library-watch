export { bindTo } from "../utils/bindTo";

export {
  memo,
  useRef,
  useState,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect,
  useSyncExternalStore,
  useImperativeHandle
} from "react";

export {
  isFn,
  isNumber
} from "../utils/isTypeFn";
import {
  isFn,
  isArr
} from "../utils/isTypeFn";

export const FN_NOOP = () => {}

export const cloneUiElement = (
  Element,
  overrideProps,
  key=Element.key
) => (<Element.type
  key={key}
  {...Element.props}
  {...overrideProps}
/>)

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
  return _inputInst && isFn(_inputInst[methodName])
    ? _inputInst[methodName]()
    : dfValue;
}

export const isRefInputValid = _fReturnMethod("isValid", false)
export const getRefInputValue = _fReturnMethod("getValue")

const _fCallMethod = (
  methodName
) => (ref, value) => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && isFn(_inputInst[methodName])) {
    _inputInst[methodName](value)
  }
};

export const setRefInputValue = _fCallMethod("setValue")
export const focusRefInput = _fCallMethod("focus")

export const focusHtmlElement = el => {
  if (el && isFn(el.focus)) {
    el.focus()
    return true;
  }
};

export const focusRefElement = (
  ref
) => focusHtmlElement(getRefValue(ref))

export const focusRefNextSiblingFirstChildElement = (
  ref
) => {
  focusHtmlElement(((getRefValue(ref) || {})
    .nextElementSibling || {})
    .firstElementChild
  )
}

export const focusElementById = (
  id
) => {
  focusHtmlElement(
    document.getElementById(id)
  )
}

export const stopDefaultFor = (evt) => {
  evt.stopPropagation()
  evt.preventDefault()
}

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

export const safeMap = (
  items,
  crElement
) => isArr(items) && items.length > 0
  ? items.map(crElement)
  : null
