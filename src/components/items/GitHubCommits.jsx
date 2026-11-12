import { CL_BT_ITEM } from '../styleFn';

import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import ShowHide from '../zhn/ShowHide';
import Caption from './ItemCaption';
import CommitList from './CommitList';

import {
  S_CAPTION_OPEN,
  S_PT_8,
  Item,
  ButtonAddToWatch
} from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Repository Commits";

/*
repo, caption, commits, onCloseItem,
onWatchItem, requestType
*/

const GitHubCommits = (props) => {
  const {
    caption,
    repo,
    commits,
    onCloseItem,
    onWatchItem
  } = props
  , [
    isShow,
    _hToggle
  ] = useToggle(true)
  , _hClickWatch = useWatchItem(
     onWatchItem,
     props,
     ITEM_DESCRIPTION
   );

  return (
    <Item>
      <Caption style={S_PT_8} onClose={onCloseItem}>
        <button
           type="button"
           className={CL_BT_ITEM}
           title={caption}
           style={S_CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span>
            {repo}
          </span>
        </button>
        <ButtonAddToWatch           
           onClick={_hClickWatch}
        />
      </Caption>
      <ShowHide isShow={isShow}>
        <CommitList items={commits} />
      </ShowHide>
    </Item>
  );
};

export default GitHubCommits
