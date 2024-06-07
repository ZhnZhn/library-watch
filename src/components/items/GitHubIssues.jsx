import { CL_BT_ITEM } from '../styles/CL';

import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import ButtonCircle from '../zhn/ButtonCircle';
import ShowHide from '../zhn/ShowHide';
import Caption from './ItemCaption';
import IssueList from './IssueList';

import {
  S_ROOT,
  S_CAPTION_OPEN,
  S_BTN_CIRCLE,
  S_PT_8,
  S_PR_8
} from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Repository Issues";

/*
repo, caption, issues, onCloseItem,
onWatchItem, requestType
*/

const GitHubIssues = (props) => {
  const {
    caption,
    repo,
    issues,
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
   )
  , _number = issues.length;
  return (
    <div style={S_ROOT}>
      <Caption style={S_PT_8} onClose={onCloseItem}>
        <button
           className={CL_BT_ITEM}
           title={caption}
           style={S_CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span style={S_PR_8}>
            {repo}
          </span>
          <span>
            {_number}
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
        <IssueList items={issues} />
      </ShowHide>
    </div>
  );
}

export default GitHubIssues
