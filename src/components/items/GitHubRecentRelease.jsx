import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption'
import {
  CL_BT_ITEM,
  CL_SOURCE_LINK
} from '../styles/CL';
import STYLE from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Repository Recent Release";

const _crCaption = ({
  repo,
  version
}) => `${repo} ${version}`;

/*
caption, repo, version,
published_at, html_url,
onCloseItem,
onWatchItem, requestType
*/

const GitHubRecentRelease = (props) => {
  const {
    caption,
    repo,
    version,
    published_at,
    html_url,
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
    ITEM_DESCRIPTION,
    _crCaption
  );

  return (
    <div style={STYLE.ROOT}>
      <Caption style={STYLE.PT_8} onClose={onCloseItem}>
        <button
           className={CL_BT_ITEM}
           title={caption}
           style={STYLE.CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span>
            {repo}
          </span>
          <span style={STYLE.SPAN_VERSION}>
             {version}
          </span>
          <span>
             {published_at}
          </span>
        </button>
        <A.ButtonCircle
           caption="W"
           title="Add to Watch"
           style={STYLE.BTN_CIRCLE}
           onClick={_hClickWatch}
        />
      </Caption>
      <A.ShowHide isShow={isShow} style={STYLE.PT_8}>
        <A.Link
           className={CL_SOURCE_LINK}
           style={STYLE.ML_8}
           href={html_url}
        >
           Link to description of recent release tag
        </A.Link>
      </A.ShowHide>
    </div>
  );
};

export default GitHubRecentRelease
