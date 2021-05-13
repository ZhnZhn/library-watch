import { useState, useCallback } from 'react';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption';
import CommitList from './CommitList';
import CL from '../styles/CL';
import STYLE from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Repository Commits";

const _crItemWatch = (repo, requestType) => {
  const caption = `${repo}`;
  return {
    caption,
    config: {
      version: '', descr: ITEM_DESCRIPTION,
      repo, requestType, caption
    }
  };
};

const GitHubCommits = ({
  repo, caption,
  commits,
  requestType,
  onCloseItem,
  onWatchItem
}) => {
  const [isShow, setIsShow] = useState(true)
  , _hToggle = useCallback(() => setIsShow(is => !is), [])
  /*eslint-disable react-hooks/exhaustive-deps*/
  , _hClickWatch = useCallback(() => {
      onWatchItem(_crItemWatch(repo, requestType));
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps*/

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
