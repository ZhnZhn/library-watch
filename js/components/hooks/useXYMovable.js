"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _has = require("../has");
const _assign = Object.assign,
  [INIT_EVENT, MOVE_EVENT, CANCEL_EVENT, RESET_EVENT] = _has.HAS_TOUCH_EVENTS ? ['touchstart', 'touchmove', 'touchcancel', 'touchend'] : ['mousedown', 'mousemove', 'mouseleave', 'mouseup'];
const EVENT_OPTIONS = {
    passive: true
  },
  MOVE_EVENT_OPTIONS = {
    passive: false
  };
const _fGetIntStyleProperty = propName => style => parseInt(style[propName], 10),
  _getIntStyleTop = _fGetIntStyleProperty('top'),
  _getIntStyleLeft = _fGetIntStyleProperty('left');
const VALUE_GAP = 8;
const _crNextValue = (value, maxValue) => value > 0 ? value > maxValue ? maxValue - 2 * VALUE_GAP : value : VALUE_GAP;
const START_EVENT_GAP = 22;
const _isValueInGapRange = (from, to, value) => value - from > START_EVENT_GAP && to - value > START_EVENT_GAP;
const _getComposedPath = evt => (0, _isTypeFn.isFn)(evt.composedPath) ? evt.composedPath() : void 0;
const _isExcludeElement = element => element.tagName === 'BUTTON' || (element.dataset || {}).scrollable;
const _isInitEvent = (evt, initialEvtClientX, initialEvtClientY, element) => {
  const _composedPath = _getComposedPath(evt);
  if ((0, _isTypeFn.isArr)(_composedPath)) {
    for (let i = 0; i < _composedPath.length; i++) {
      const _el = _composedPath[i];
      if (_isExcludeElement(_el)) {
        return false;
      }
      if (_el === element) {
        break;
      }
    }
  }
  if (!_has.HAS_TOUCH_EVENTS) {
    return true;
  }
  const {
    left,
    top,
    right,
    bottom
  } = element.getClientRects()[0];
  return _isValueInGapRange(left, right, initialEvtClientX) && _isValueInGapRange(top, bottom, initialEvtClientY);
};
const useXYMovable = refElement => {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    let _element = (0, _uiApi.getRefValue)(refElement),
      _elementStyle = _element.style,
      _diffX = 0,
      _diffY = 0,
      _initialEvtClientX,
      _initialEvtClientY;
    function _moveDone() {
      const _prevTop = _getIntStyleTop(_elementStyle),
        _prevLeft = _getIntStyleLeft(_elementStyle),
        _nextLeft = _crNextValue(_prevLeft + _diffX, window.innerWidth - _element.clientWidth),
        _nextTop = _crNextValue(_prevTop + _diffY, window.innerHeight - _element.clientHeight);
      _assign(_elementStyle, {
        top: `${_nextTop}px`,
        left: `${_nextLeft}px`,
        webkitTransform: '',
        transform: ''
      });
      _diffX = 0;
      _diffY = 0;
    }
    function _hMove(evt) {
      if (evt.cancelable) {
        evt.stopPropagation();
        evt.preventDefault();
      }
      if (_diffX === 0 && _diffY === 0) {
        _elementStyle.cursor = 'move';
      }
      _diffX = (0, _uiApi.getClientX)(evt) - _initialEvtClientX;
      _diffY = (0, _uiApi.getClientY)(evt) - _initialEvtClientY;
      const _translate = `translate(${_diffX}px,${_diffY}px)`;
      _assign(_elementStyle, {
        webkitTransform: _translate,
        transform: _translate
      });
    }
    function _hResetEvent() {
      clearEventListener();
      _moveDone();
    }
    function clearEventListener() {
      _elementStyle.cursor = '';
      _element.removeEventListener(MOVE_EVENT, _hMove, MOVE_EVENT_OPTIONS);
      _element.removeEventListener(CANCEL_EVENT, _hResetEvent, EVENT_OPTIONS);
      _element.removeEventListener(RESET_EVENT, _hResetEvent, EVENT_OPTIONS);
    }
    _element.addEventListener(INIT_EVENT, evt => {
      _initialEvtClientX = (0, _uiApi.getClientX)(evt);
      _initialEvtClientY = (0, _uiApi.getClientY)(evt);
      if (_element && _isInitEvent(evt, _initialEvtClientX, _initialEvtClientY, _element)) {
        _element.addEventListener(MOVE_EVENT, _hMove, MOVE_EVENT_OPTIONS);
        _element.addEventListener(CANCEL_EVENT, _hResetEvent, EVENT_OPTIONS);
        _element.addEventListener(RESET_EVENT, _hResetEvent, EVENT_OPTIONS);
      }
    }, EVENT_OPTIONS);
    return () => {
      clearEventListener();
      _elementStyle = null;
      _element = null;
    };
  }, []);
  //refElement
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = exports.default = useXYMovable;
//# sourceMappingURL=useXYMovable.js.map