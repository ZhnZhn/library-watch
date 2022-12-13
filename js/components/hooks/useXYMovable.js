"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _assign = Object.assign,
  _ref = _has.HAS_TOUCH_EVENTS ? ['touchstart', 'touchmove', 'touchcancel', 'touchend'] : ['mousedown', 'mousemove', 'mouseleave', 'mouseup'],
  INIT_EVENT = _ref[0],
  MOVE_EVENT = _ref[1],
  CANCEL_EVENT = _ref[2],
  RESET_EVENT = _ref[3];
var EVENT_OPTIONS = {
    passive: true
  },
  MOVE_EVENT_OPTIONS = {
    passive: false
  };
var _fGetIntStyleProperty = function _fGetIntStyleProperty(propName) {
    return function (style) {
      return parseInt(style[propName], 10);
    };
  },
  _getIntStyleTop = _fGetIntStyleProperty('top'),
  _getIntStyleLeft = _fGetIntStyleProperty('left');
var VALUE_GAP = 8;
var _crNextValue = function _crNextValue(value, maxValue) {
  return value > 0 ? value > maxValue ? maxValue - 2 * VALUE_GAP : value : VALUE_GAP;
};
var START_EVENT_GAP = 22;
var _isValueInGapRange = function _isValueInGapRange(from, to, value) {
  return value - from > START_EVENT_GAP && to - value > START_EVENT_GAP;
};
var _isInitEvent = function _isInitEvent(element, initialEvtClientX, initialEvtClientY) {
  if (!_has.HAS_TOUCH_EVENTS) {
    return true;
  }
  var _element$getClientRec = element.getClientRects()[0],
    left = _element$getClientRec.left,
    top = _element$getClientRec.top,
    right = _element$getClientRec.right,
    bottom = _element$getClientRec.bottom;
  return _isValueInGapRange(left, right, initialEvtClientX) && _isValueInGapRange(top, bottom, initialEvtClientY);
};
var useXYMovable = function useXYMovable(refElement) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var _element = (0, _uiApi.getRefValue)(refElement),
      _elementStyle = _element.style,
      _diffX = 0,
      _diffY = 0,
      _initialEvtClientX,
      _initialEvtClientY;
    function _moveDone() {
      var _prevTop = _getIntStyleTop(_elementStyle),
        _prevLeft = _getIntStyleLeft(_elementStyle),
        _nextLeft = _crNextValue(_prevLeft + _diffX, window.innerWidth - _element.clientWidth),
        _nextTop = _crNextValue(_prevTop + _diffY, window.innerHeight - _element.clientHeight);
      _assign(_elementStyle, {
        top: _nextTop + "px",
        left: _nextLeft + "px",
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
      var _translate = "translate(" + _diffX + "px," + _diffY + "px)";
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
    _element.addEventListener(INIT_EVENT, function (evt) {
      _initialEvtClientX = (0, _uiApi.getClientX)(evt);
      _initialEvtClientY = (0, _uiApi.getClientY)(evt);
      if (_isInitEvent(_element, _initialEvtClientX, _initialEvtClientY)) {
        _element.addEventListener(MOVE_EVENT, _hMove, MOVE_EVENT_OPTIONS);
        _element.addEventListener(CANCEL_EVENT, _hResetEvent, EVENT_OPTIONS);
        _element.addEventListener(RESET_EVENT, _hResetEvent, EVENT_OPTIONS);
      }
    }, EVENT_OPTIONS);
    return function () {
      clearEventListener();
      _elementStyle = null;
      _element = null;
    };
  }, []);
  //refElement
  /*eslint-enable react-hooks/exhaustive-deps */
};
var _default = useXYMovable;
exports["default"] = _default;
//# sourceMappingURL=useXYMovable.js.map