import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption';
import CommitList from './CommitList';
import { CL_BT_ITEM } from '../styles/CL';
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
        <A.ButtonCircle
           caption="W"
           title="Add to Watch"
           style={S_BTN_CIRCLE}
           onClick={_hClickWatch}
        />
      </Caption>
      <A.ShowHide isShow={isShow}>
        <CommitList items={commits} />
      </A.ShowHide>
    </div>
  );
};

export default GitHubCommits
