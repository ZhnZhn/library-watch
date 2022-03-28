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

const _isArr = Array.isArray;

const WatchItems = ({
  isModeEdit,
  items,
  groupCaption,
  listCaption
}) => _isArr(items) ? items
  .map((item, index) => {
    const { caption } = item
    , _className = (index % 2)
         ? 'row__topic__even not-selected'
         : 'row__topic__odd not-selected'
    return (
       <WatchItem
          key={caption}
          className={_className}
          isModeEdit={isModeEdit}
          item={item}
          option={{
            groupCaption,
            listCaption,
            caption
          }}
          onClick={showDialogWatchItem}
          onClose={removeWatchItem}
          onDragStart={hDragStartItem}
          onDragOver={hDragOverItem}
          onDragEnter={hDragEnterItem}
          onDragLeave={hDragLeaveItem}
          onDrop={hDropItem}
       />
    );
  }) : null;

export default WatchItems
