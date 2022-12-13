"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../../uiApi");
var _has = require("../../has");
var _dndHandlers = require("./dnd-handlers");
var DELTA = _has.HAS_TOUCH_EVENTS ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};
var _getTouchesClientX = function _getTouchesClientX(ev) {
  return (((ev || {}).touches || [])[0] || {}).clientX || 0;
};
var _getChangedTouches = function _getChangedTouches(ev) {
  return (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
};
var useDnDHandlers = function useDnDHandlers(item, setIsClose, onRemoveItem, onRemoveUnder) {
  var _refClientX = (0, _uiApi.useRef)();
  /*eslint-disable react-hooks/exhaustive-deps */
  return (0, _uiApi.useMemo)(function () {
    var _calcDeltaX = function _calcDeltaX(clientX) {
        return Math.abs((0, _uiApi.getRefValue)(_refClientX) - clientX);
      },
      onDragStart = function onDragStart(ev) {
        (0, _uiApi.setRefValue)(_refClientX, ev.clientX);
        (0, _dndHandlers.styleDragStart)(ev);
        if (ev && ev.dataTransfer) {
          ev.dataTransfer.effectAllowed = "move";
          ev.dataTransfer.dropEffect = "move";
        }
      },
      onTouchStart = function onTouchStart(ev) {
        var _clientX = _getTouchesClientX(ev);
        if (_clientX) {
          (0, _uiApi.setRefValue)(_refClientX, _clientX);
        }
      },
      onTouchMove = function onTouchMove(ev) {
        var _clientX = _getTouchesClientX(ev);
        if (_clientX && _calcDeltaX(_clientX) > DELTA.MARK_REMOVE) {
          (0, _dndHandlers.styleDragStart)(ev);
        }
      },
      _hEnd = function _hEnd(clientX) {
        if (clientX) {
          var _deltaX = _calcDeltaX(clientX);
          if (_deltaX > DELTA.REMOVE_UNDER) {
            onRemoveUnder(item);
          } else if (_deltaX > DELTA.REMOVE_ITEM) {
            onRemoveItem(item);
            setIsClose(true);
          }
        }
      },
      onDragEnd = function onDragEnd(ev) {
        ev.preventDefault();
        (0, _dndHandlers.styleDragEnd)();
        _hEnd(ev.clientX);
      },
      onTouchEnd = function onTouchEnd(ev) {
        //ev.preventDefault()
        (0, _dndHandlers.styleDragEnd)();
        _hEnd(_getChangedTouches(ev));
      };
    return _has.HAS_TOUCH_EVENTS ? {
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd
    } : {
      draggable: true,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onDrop: _dndHandlers.preventDefault,
      onDragOver: _dndHandlers.preventDefault,
      onDragEnter: _dndHandlers.preventDefault,
      onDragLeave: _dndHandlers.preventDefault
    };
  }, []);
  // item, onRemoveItem, setIsClose, onRemoveUnder
  /*eslint-disable react-hooks/exhaustive-deps */
};
var _default = useDnDHandlers;
exports["default"] = _default;
//# sourceMappingURL=useDnDHandlers.js.map