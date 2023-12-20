import { bindTo } from '../uiApi';
import { crClNotSelected } from '../styleFn';

import {
  showDialogWatchItem,
  removeWatchItem
} from './Handlers';

import {
  hDragStartItem,
  hDragOverItem,
  hDragEnterItem,
  hDragLeaveItem,
  hDropItem
} from './dnd-handlers/DnDItemHandlers';

import WatchItem from './WatchItem';

const _isArr = Array.isArray
, CL_WATCH_ITEM = crClNotSelected('row__topic');

const WatchItems = ({
  isModeEdit,
  items,
  groupCaption,
  listCaption
}) => _isArr(items) ? items
  .map(item => {
    const {
      caption
    } = item
    , option = {
      groupCaption,
      listCaption,
      caption
    }
    , ddItemHandlers = isModeEdit ? {
         onDragStart: bindTo(hDragStartItem, option),
         onDrop: bindTo(hDropItem, option),
         onDragOver: hDragOverItem,
         onDragEnter: hDragEnterItem,
         onDragLeave: hDragLeaveItem
    } : void 0;
    return (
       <WatchItem
          key={caption}
          className={CL_WATCH_ITEM}
          item={item}
          isModeEdit={isModeEdit}
          onClick={bindTo(showDialogWatchItem, item)}
          onClose={bindTo(removeWatchItem, option)}
          ddItemHandlers={ddItemHandlers}
       />
    );
  }) : null;

export default WatchItems
