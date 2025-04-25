"use strict";

exports.__esModule = true;
exports.useSyncExternalStore = exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useId = exports.useEffect = exports.useCallback = exports.stopDefaultFor = exports.setRefValue = exports.setRefInputValue = exports.safeMap = exports.memo = exports.isRefInputValid = exports.getRefValue = exports.getRefInputValue = exports.getClientY = exports.getClientX = exports.focusRefNextSiblingFirstChildElement = exports.focusRefInput = exports.focusRefElement = exports.focusHtmlElement = exports.focusElementById = exports.cloneUiElement = exports.bindTo = exports.FN_NOOP = void 0;
var _bindTo = require("../utils/bindTo");
exports.bindTo = _bindTo.bindTo;
var _react = require("react");
exports.memo = _react.memo;
exports.useId = _react.useId;
exports.useRef = _react.useRef;
exports.useState = _react.useState;
exports.useReducer = _react.useReducer;
exports.useCallback = _react.useCallback;
exports.useMemo = _react.useMemo;
exports.useLayoutEffect = _react.useLayoutEffect;
exports.useEffect = _react.useEffect;
exports.useSyncExternalStore = _react.useSyncExternalStore;
exports.useImperativeHandle = _react.useImperativeHandle;
var _isTypeFn = require("../utils/isTypeFn");
exports.isFn = _isTypeFn.isFn;
var _jsxRuntime = require("react/jsx-runtime");
const FN_NOOP = () => {};
exports.FN_NOOP = FN_NOOP;
const cloneUiElement = function (Element, overrideProps, key) {
  if (key === void 0) {
    key = Element.key;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Element.type, {
    ...Element.props,
    ...overrideProps
  }, key);
};
exports.cloneUiElement = cloneUiElement;
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
  return _inputInst && (0, _isTypeFn.isFn)(_inputInst[methodName]) ? _inputInst[methodName]() : dfValue;
};
const isRefInputValid = exports.isRefInputValid = _fReturnMethod("isValid", false);
const getRefInputValue = exports.getRefInputValue = _fReturnMethod("getValue");
const _fCallMethod = methodName => (ref, value) => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && (0, _isTypeFn.isFn)(_inputInst[methodName])) {
    _inputInst[methodName](value);
  }
};
const setRefInputValue = exports.setRefInputValue = _fCallMethod("setValue");
const focusRefInput = exports.focusRefInput = _fCallMethod("focus");
const focusHtmlElement = el => {
  if (el && (0, _isTypeFn.isFn)(el.focus)) {
    el.focus();
    return true;
  }
};
exports.focusHtmlElement = focusHtmlElement;
const focusRefElement = ref => focusHtmlElement(getRefValue(ref));
exports.focusRefElement = focusRefElement;
const focusRefNextSiblingFirstChildElement = ref => {
  focusHtmlElement(((getRefValue(ref) || {}).nextElementSibling || {}).firstElementChild);
};
exports.focusRefNextSiblingFirstChildElement = focusRefNextSiblingFirstChildElement;
const focusElementById = id => {
  focusHtmlElement(document.getElementById(id));
};
exports.focusElementById = focusElementById;
const stopDefaultFor = evt => {
  evt.stopPropagation();
  evt.preventDefault();
};
exports.stopDefaultFor = stopDefaultFor;
const _getFirstTouches = touches => touches && touches[0] || {};
const _getTouchClientX = touches => _getFirstTouches(touches).clientX;
const _getTouchClientY = touches => _getFirstTouches(touches).clientY;
const getClientX = evt => evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
exports.getClientX = getClientX;
const getClientY = evt => evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
exports.getClientY = getClientY;
const safeMap = (items, crElement) => (0, _isTypeFn.isArr)(items) && items.length > 0 ? items.map(crElement) : null;
exports.safeMap = safeMap;
//# sourceMappingURL=uiApi.js.map