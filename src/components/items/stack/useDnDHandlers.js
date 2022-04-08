import {
  useRef,
  useMemo,
  getRefValue,
  setRefValue
} from '../../uiApi';

import has from '../../has';
import {
  styleDragStart,
  styleDragEnd,
  preventDefault
} from './dnd-handlers';

const { HAS_TOUCH } = has
, DELTA = HAS_TOUCH ? {
   MARK_REMOVE: 50,
   REMOVE_ITEM: 90,
   REMOVE_UNDER: 150
} : {
   MARK_REMOVE: 25,
   REMOVE_ITEM: 35,
   REMOVE_UNDER: 150
};

const _getTouchesClientX = (ev) =>
  (((ev || {}).touches || [])[0] || {}).clientX || 0;
const _getChangedTouches = (ev) =>
  (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;

const useDnDHandlers = (
  item,
  setIsClose,
  onRemoveItem,
  onRemoveUnder
) => {
  const _refClientX = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  return useMemo(() => {
    const _calcDeltaX = clientX =>
      Math.abs(getRefValue(_refClientX) - clientX)
    , onDragStart = (ev) => {
       setRefValue(_refClientX, ev.clientX)
       styleDragStart(ev)
       if (ev && ev.dataTransfer) {
         ev.dataTransfer.effectAllowed="move"
         ev.dataTransfer.dropEffect="move"
       }
    }
    , onTouchStart = (ev) => {
       const _clientX = _getTouchesClientX(ev);
       if (_clientX) {
         setRefValue(_refClientX, _clientX)
       }
    }
    , onTouchMove = (ev) => {
       const _clientX = _getTouchesClientX(ev);
       if (_clientX
         && _calcDeltaX(_clientX) > DELTA.MARK_REMOVE) {
         styleDragStart(ev)
       }
    }
    , _hEnd = (clientX) => {
       if (clientX) {
         const _deltaX = _calcDeltaX(clientX);
         if (_deltaX > DELTA.REMOVE_UNDER) {
           onRemoveUnder(item)
         } else if (_deltaX > DELTA.REMOVE_ITEM){
           onRemoveItem(item)
           setIsClose(true)
         }
       }
    }
  , onDragEnd = (ev) => {
     ev.preventDefault()
     styleDragEnd()
     _hEnd(ev.clientX)
  }
  , onTouchEnd = (ev) => {
     //ev.preventDefault()
     styleDragEnd()
     _hEnd(_getChangedTouches(ev))
  };
  return HAS_TOUCH
    ? {
        onTouchStart,
        onTouchMove,
        onTouchEnd
      }
    : {
        draggable: true,
        onDragStart,
        onDragEnd,
        onDrop: preventDefault,
        onDragOver: preventDefault,
        onDragEnter: preventDefault,
        onDragLeave: preventDefault
      }
  }, []);
  // item, onRemoveItem, setIsClose, onRemoveUnder
  /*eslint-disable react-hooks/exhaustive-deps */
};

export default useDnDHandlers
