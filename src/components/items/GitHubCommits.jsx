import { CL_BT_ITEM } from '../styleFn';

import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import ButtonCircle from '../zhn/ButtonCircle';
import ShowHide from '../zhn/ShowHide';
import Caption from './ItemCaption';
import CommitList from './CommitList';

import {
  S_ROOT,
  S_CAPTION_OPEN,
  S_BTN_CIRCLE,
  S_PT_8
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
    <div style={S_ROOT}>
      <Caption style={S_PT_8} onClose={onCloseItem}>
        <button
           className={CL_BT_ITEM}
           title={caption}
           style={S_CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span>
            {repo}
          </span>
        </button>
        <ButtonCircle
           caption="W"
           title="Add to Watch"
           style={S_BTN_CIRCLE}
           onClick={_hClickWatch}
        />
      </Caption>
      <ShowHide isShow={isShow}>
        <CommitList items={commits} />
      </ShowHide>
    </div>
  );
};

export default GitHubCommits
