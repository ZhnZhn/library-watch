import { CL_BT_ITEM } from '../styleFn';

import useToggle from '../hooks/useToggle';
import useWatchItem from './hooks/useWatchItem';

import ShowHide from '../zhn/ShowHide';
import { Link } from '../zhn/Link';
import Caption from './ItemCaption';

import {
  S_CAPTION_OPEN,
  S_SPAN_VERSION, 
  S_PT_8,
  S_ML_8,
  Item,
  ButtonAddToWatch
} from './Item.Style';

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
          <span style={S_SPAN_VERSION}>
             {version}
          </span>
          <span>
             {published_at}
          </span>
        </button>
        <ButtonAddToWatch                              
           onClick={_hClickWatch}
        />
      </Caption>
      <ShowHide isShow={isShow} style={S_PT_8}>
        <SourceLink           
           style={S_ML_8}
           href={html_url}
        >
           Link to description of recent release tag
        </SourceLink>
      </ShowHide>
    </Item>
  );
};

export default GitHubRecentRelease
