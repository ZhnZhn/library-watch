import { safeMap } from '../uiApi';
import { crDnDListHandlers } from './dnd-handlers/DnDListHandlers';

import OpenClose2 from '../zhn-atoms/OpenClose2';
import WatchItems from './WatchItems';

const S_LIST_DIV = {
  marginLeft: 8,
  lineHeight: 2,
  borderLeft: '1px solid yellow',
}
, S_CAPTION_ROW = { paddingLeft: 12 };

const WatchLists = ({
  isModeEdit,
  groupCaption,
  lists
}) => safeMap(lists, ({ caption, items }) => (
  <OpenClose2
     key={caption}
     fillOpen="#80c040"
     style={S_LIST_DIV}
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
