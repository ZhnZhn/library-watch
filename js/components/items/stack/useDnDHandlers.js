"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _has = require("../../has");
var _dndHandlers = require("./dnd-handlers");
const DELTA = _has.HAS_TOUCH_EVENTS ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};
const _getTouchesClientX = ev => (((ev || {}).touches || [])[0] || {}).clientX || 0;
const _getChangedTouches = ev => (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
const useDnDHandlers = (item, setIsClose, onRemoveItem, onRemoveUnder) => {
  const _refClientX = (0, _uiApi.useRef)();
  /*eslint-disable react-hooks/exhaustive-deps */
  return (0, _uiApi.useMemo)(() => {
    const _calcDeltaX = clientX => Math.abs((0, _uiApi.getRefValue)(_refClientX) - clientX),
      onDragStart = ev => {
        (0, _uiApi.setRefValue)(_refClientX, ev.clientX);
        (0, _dndHandlers.styleDragStart)(ev);
        if (ev && ev.dataTransfer) {
          ev.dataTransfer.effectAllowed = "move";
          ev.dataTransfer.dropEffect = "move";
        }
      },
      onTouchStart = ev => {
        const _clientX = _getTouchesClientX(ev);
        if (_clientX) {
          (0, _uiApi.setRefValue)(_refClientX, _clientX);
        }
      },
      onTouchMove = ev => {
        const _clientX = _getTouchesClientX(ev);
        if (_clientX && _calcDeltaX(_clientX) > DELTA.MARK_REMOVE) {
          (0, _dndHandlers.styleDragStart)(ev);
        }
      },
      _hEnd = clientX => {
        if (clientX) {
          const _deltaX = _calcDeltaX(clientX);
          if (_deltaX > DELTA.REMOVE_UNDER) {
            onRemoveUnder(item);
          } else if (_deltaX > DELTA.REMOVE_ITEM) {
            onRemoveItem(item);
            setIsClose(true);
          }
        }
      },
      onDragEnd = ev => {
        ev.preventDefault();
        (0, _dndHandlers.styleDragEnd)();
        _hEnd(ev.clientX);
      },
      onTouchEnd = ev => {
        //ev.preventDefault()
        (0, _dndHandlers.styleDragEnd)();
        _hEnd(_getChangedTouches(ev));
      };
    return _has.HAS_TOUCH_EVENTS ? {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    } : {
      draggable: true,
      onDragStart,
      onDragEnd,
      onDrop: _dndHandlers.preventDefault,
      onDragOver: _dndHandlers.preventDefault,
      onDragEnter: _dndHandlers.preventDefault,
      onDragLeave: _dndHandlers.preventDefault
    };
  }, []);
  // item, onRemoveItem, setIsClose, onRemoveUnder
  /*eslint-disable react-hooks/exhaustive-deps */
};
var _default = exports.default = useDnDHandlers;
//# sourceMappingURL=useDnDHandlers.js.map