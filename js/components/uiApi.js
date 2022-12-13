"use strict";

exports.__esModule = true;
exports.useState = exports.useRef = exports.useReducer = exports.useMemo = exports.useLayoutEffect = exports.useImperativeHandle = exports.useEffect = exports.useCallback = exports.setRefValue = exports.memo = exports.getRefValue = exports.getClientY = exports.getClientX = exports.forwardRef = exports.focusRefElement = exports.createElement = exports.cloneElement = exports.Component = void 0;
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
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var getRefValue = function getRefValue(ref) {
  return (ref || {}).current;
};
exports.getRefValue = getRefValue;
var setRefValue = function setRefValue(ref, value) {
  if (ref) {
    ref.current = value;
  }
};
exports.setRefValue = setRefValue;
var focusRefElement = function focusRefElement(ref) {
  var _element = getRefValue(ref);
  if (_element && _isFn(_element.focus)) {
    _element.focus();
  }
};
exports.focusRefElement = focusRefElement;
var _getFirstTouches = function _getFirstTouches(touches) {
  return touches && touches[0] || {};
};
var _getTouchClientX = function _getTouchClientX(touches) {
  return _getFirstTouches(touches).clientX;
};
var _getTouchClientY = function _getTouchClientY(touches) {
  return _getFirstTouches(touches).clientY;
};
var getClientX = function getClientX(evt) {
  return evt.clientX || _getTouchClientX(evt.targetTouches) || _getTouchClientX(evt.changedTouches) || 0;
};
exports.getClientX = getClientX;
var getClientY = function getClientY(evt) {
  return evt.clientY || _getTouchClientY(evt.targetTouches) || _getTouchClientY(evt.changedTouches) || 0;
};
exports.getClientY = getClientY;
//# sourceMappingURL=uiApi.js.map