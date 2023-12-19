"use strict";

exports.__esModule = true;
exports.useSyncExternalStore = exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.setRefValue = exports.setRefInputValue = exports.memo = exports.isRefInputValid = exports.getRefValue = exports.getRefInputValue = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefNextSiblingFirstChildElement = exports.focusRefInput = exports.focusRefElement = exports.focusHtmlElement = exports.createElement = exports.cloneElement = exports.bindTo = void 0;
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _react = require("react");
exports.cloneElement = _react.cloneElement;
exports.createElement = _react.createElement;
exports.memo = _react.memo;
exports.forwardRef = _react.forwardRef;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useLayoutEffect = _react.useLayoutEffect;
exports.useEffect = _react.useEffect;
exports.useSyncExternalStore = _react.useSyncExternalStore;
exports.useImperativeHandle = _react.useImperativeHandle;
const _isFn = fn => typeof fn === 'function';
const getRefValue = ref => (ref || {}).current;
exports.getRefValue = getRefValue;
const setRefValue = (ref, value) => {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
const _fReturnMethod = (methodName, dfValue) => ref => {
  const _inputInst = getRefValue(ref);
  return _inputInst && _isFn(_inputInst[methodName]) ? _inputInst[methodName]() : dfValue;
};
const isRefInputValid = exports.isRefInputValid = _fReturnMethod("isValid", false);
const getRefInputValue = exports.getRefInputValue = _fReturnMethod("getValue");
const _fCallMethod = methodName => (ref, value) => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && _isFn(_inputInst[methodName])) {
    _inputInst[methodName](value);
  }
};
const setRefInputValue = exports.setRefInputValue = _fCallMethod("setValue");
const focusRefInput = exports.focusRefInput = _fCallMethod("focus");
const focusHtmlElement = el => {
  if (el && _isFn(el.focus)) {
    el.focus();
  }
};
exports.focusHtmlElement = focusHtmlElement;
const focusRefElement = ref => {
  focusHtmlElement(getRefValue(ref));
};
exports.focusRefElement = focusRefElement;
const focusRefNextSiblingFirstChildElement = ref => {
  focusHtmlElement(((getRefValue(ref) || {}).nextElementSibling || {}).firstElementChild);
};
exports.focusRefNextSiblingFirstChildElement = focusRefNextSiblingFirstChildElement;
const _getFirstTouches = touches => touches && touches[0] || {};
const _getTouchClientX = touches => _getFirstTouches(touches).clientX;
const _getTouchClientY = touches => _getFirstTouches(touches).clientY;
const getClientX = evt => evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
exports.getClientX = getClientX;
const getClientY = evt => evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map