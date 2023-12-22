import {
  hDragStartGroup,
  hDragEnterGroup,
  hDragOverGroup,
  hDragLeaveGroup,
  hDropGroup
} from './dnd-handlers/DnDGroupHandlers';

import Comp from '../Comp';
import WatchLists from './WatchLists';

const { OpenClose2 } = Comp
, _isArr = Array.isArray
, S_GROUP_DIV = { lineHeight: 2 }
, S_CAPTION_ROW = { paddingLeft: 6 };

const WatchGroups = ({
  refFirstItem,
  isModeEdit,
  groups
}) => _isArr(groups) ? groups
  .map(({caption, lists}, index) => (
      <OpenClose2
         refItem={index === 0 ? refFirstItem : void 0}
         key={caption}
         style={S_GROUP_DIV}
         styleCaptionRow={S_CAPTION_ROW}
         caption={caption}
         isClose={true}
         isDraggable={isModeEdit}
         option={{ caption }}
         onDragStart={hDragStartGroup}
         onDragEnter={hDragEnterGroup}
         onDragOver={hDragOverGroup}
         onDragLeave={hDragLeaveGroup}
         onDrop={hDropGroup}
       >
         <WatchLists
           isModeEdit={isModeEdit}
           groupCaption={caption}
           lists={lists}
         />
       </OpenClose2>
  )) : null;

export default WatchGroups
