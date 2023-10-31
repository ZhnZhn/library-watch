"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.setRefValue = exports.setRefInputValue = exports.memo = exports.getRefValue = exports.getRefInputValue = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefInput = exports.focusRefElement = exports.focusHtmlElement = exports.createElement = exports.cloneElement = exports.Component = void 0;
var _react = require("react");
exports.Component = _react.Component;
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
const getRefInputValue = ref => {
  const _inputInst = getRefValue(ref);
  return _inputInst && _isFn(_inputInst.getValue) ? _inputInst.getValue() : void 0;
};
exports.getRefInputValue = getRefInputValue;
const setRefInputValue = (ref, value) => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && _isFn(_inputInst.setValue)) {
    _inputInst.setValue(value);
  }
};
exports.setRefInputValue = setRefInputValue;
const focusRefInput = ref => {
  const _inputInst = getRefValue(ref);
  if (_inputInst && _isFn(_inputInst.focus)) {
    _inputInst.focus();
  }
};
exports.focusRefInput = focusRefInput;
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
const _getFirstTouches = touches => touches && touches[0] || {};
const _getTouchClientX = touches => _getFirstTouches(touches).clientX;
const _getTouchClientY = touches => _getFirstTouches(touches).clientY;
const getClientX = evt => evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
exports.getClientX = getClientX;
const getClientY = evt => evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map