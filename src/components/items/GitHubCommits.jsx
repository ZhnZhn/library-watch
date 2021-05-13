import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption';
import CommitList from './CommitList';
import CL from '../styles/CL';
import STYLE from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Repository Commits";

/*
repo, caption, commits, onCloseItem,
onWatchItem, requestType
*/

const GitHubCommits = (props) => {
  const { caption, repo, commits, onCloseItem, onWatchItem } = props
  , [isShow, _hToggle] = useToggle(true)
  , _hClickWatch = useWatchItem(onWatchItem, props, ITEM_DESCRIPTION);

  return (
    <div style={STYLE.ROOT}>
      <Caption onClose={onCloseItem}>
        <button
           className={CL.BT_ITEM}
           title={caption}
           style={STYLE.CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span>
            {repo}
          </span>
        </button>
        <A.ButtonCircle
           caption="W"
           title="Add to Watch"
           style={STYLE.BTN_CIRCLE}
           onClick={_hClickWatch}
        />
      </Caption>
      <A.ShowHide isShow={isShow}>
        <CommitList commits={commits} />
      </A.ShowHide>
    </div>
  );
};

export default GitHubCommits
