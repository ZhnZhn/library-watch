import {
  hDragStartList,
  hDragEnterList,
  hDragOverList,
  hDragLeaveList,
  hDropList
} from './dnd-handlers/DnDListHandlers';

import Comp from '../Comp';
import WatchItems from './WatchItems';

const { OpenClose2 } = Comp
, S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 12,
  lineHeight: 2,
  borderLeft: '1px solid yellow',
}
, _isArr = Array.isArray;

const WatchLists = ({
  isModeEdit,
  groupCaption,
  lists
}) => _isArr(lists) ? lists
  .map(({ caption, items }) => (
    <OpenClose2
       key={caption}
       fillOpen="#80c040"
       style={S_LIST_DIV}       
       caption={caption}
       isClose={true}
       isDraggable={isModeEdit}
       option={{ groupCaption, caption }}
       onDragStart={hDragStartList}
       onDragEnter={hDragEnterList}
       onDragOver={hDragOverList}
       onDragLeave={hDragLeaveList}
       onDrop={hDropList}
    >
      <WatchItems
        isModeEdit={isModeEdit}
        items={items}
        groupCaption={groupCaption}
        listCaption={caption}
      />
    </OpenClose2>
  )) : null;

export default WatchLists
