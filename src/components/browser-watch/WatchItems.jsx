import { bindTo, safeMap } from '../uiApi';
import { crClNotSelected } from '../styleFn';

import {
  showDialogWatchItem,
  removeWatchItem
} from './Handlers';

import { crDnDItemHandlers } from './dnd-handlers/DnDItemHandlers';

import WatchItem from './WatchItem';

const CL_WATCH_ITEM = crClNotSelected('row__topic');

const WatchItems = ({
  isModeEdit,
  items,
  groupCaption,
  listCaption
}) => safeMap(items, item => {
  const {
    caption
  } = item
  , option = {
    groupCaption,
    listCaption,
    caption
  };
  return (
     <WatchItem
        key={caption}
        className={CL_WATCH_ITEM}
        isModeEdit={isModeEdit}
        item={item}
        onClick={bindTo(showDialogWatchItem, item)}
        onClose={bindTo(removeWatchItem, option)}
        dndItemHandlers={crDnDItemHandlers(isModeEdit, option)}
     />
  );
});

export default WatchItems
