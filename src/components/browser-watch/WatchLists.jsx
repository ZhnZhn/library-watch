import { safeMap } from '../uiApi';
import { crDnDListHandlers } from './dnd-handlers/DnDListHandlers';

import OpenClose2 from '../zhn/OpenClose2';
import WatchItems from './WatchItems';

const FILL_OPEN = '#80c040'
, S_LIST_DIV = {
  marginLeft: 8,
  lineHeight: 2
}
, S_CAPTION_ROW = {
  paddingLeft: 12
};

const WatchLists = ({
  isModeEdit,
  groupCaption,
  lists,
  color
}) => safeMap(lists, ({ caption, items }) => (
  <OpenClose2
     key={caption}
     fillOpen={FILL_OPEN}
     style={{
       ...S_LIST_DIV,
       borderLeft: `2px solid ${color}`
     }}
     styleCaptionRow={S_CAPTION_ROW}
     caption={caption}
     dndHandlers={crDnDListHandlers(isModeEdit, { groupCaption, caption })}
  >
    <WatchItems
      isModeEdit={isModeEdit}
      items={items}
      groupCaption={groupCaption}
      listCaption={caption}
    />
  </OpenClose2>
));

export default WatchLists
