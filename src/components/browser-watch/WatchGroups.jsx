import { crDnDGroupHandlers } from './dnd-handlers/DnDGroupHandlers';

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
         dndHandlers={crDnDGroupHandlers(isModeEdit, { caption })}
       >
         <WatchLists
           isModeEdit={isModeEdit}
           groupCaption={caption}
           lists={lists}
         />
       </OpenClose2>
  )) : null;

export default WatchGroups
