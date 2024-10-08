import {
  useState,
  useCallback
} from '../uiApi';

import { CL_BT_ITEM } from '../styleFn';

import useToggle from '../hooks/useToggle';
import formatStrDate from '../../utils/formatStrDate';

import ButtonCircle from '../zhn/ButtonCircle';
import ShowHide from '../zhn/ShowHide';
import Caption from './ItemCaption';
import TagDetail from './TagDetail';

import {
  S_ROOT,
  S_CAPTION_OPEN,
  S_SPAN_VERSION,
  S_BTN_CIRCLE,
  S_PT_8
} from './Item.Style';

const ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

const _getTagDate = json => {
  const { commit } = json || {}
  , { committer } = commit || {}
  , { date } = committer || {};
  return formatStrDate(date);
};

const GitHubRecentTag = ({
  repo,
  version,
  caption,
  requestType,
  onCloseItem,
  onClickDetail,
  onWatchItem
}) => {
  const [
    json,
    setJson
  ] = useState()
  , [
    isShow,
    toggleIsShow,
    setIsShow
  ] = useToggle(true)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickDetail = useCallback(() => {
     onClickDetail().then(json => {
        setIsShow(true)
        setJson(json)
     })
     .catch(err => console.log(err));
  }, [onClickDetail])
  // toggleIsShow
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hClickWatch = useCallback(() => {
    const tagDate = _getTagDate(json)
    , caption = `${repo} ${version}`;
    onWatchItem({
       caption,
       config: {
         repo,
         requestType,
         version,
         caption,
         descr: ITEM_DESCRIPTION,
         date: tagDate
       }
    });
  //onWatchItem, repo, version, requestType
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [json]);

  return (
    <div style={S_ROOT}>
      <Caption style={S_PT_8} onClose={onCloseItem}>
        <button
           className={CL_BT_ITEM}
           title={caption}
           style={S_CAPTION_OPEN}
           onClick={toggleIsShow}
        >
          <span>
            {repo}
          </span>
          <span style={S_SPAN_VERSION}>
            {version}
          </span>
        </button>
        <ButtonCircle
           caption="W"
           title="Add to Watch"
           style={S_BTN_CIRCLE}
           onClick={_hClickWatch}
        />
        <ButtonCircle
           caption="D"
           title="Load Tag Details"
           style={S_BTN_CIRCLE}
           onClick={_hClickDetail}
        />
      </Caption>
      <ShowHide isShow={isShow}>
        <TagDetail json={json} />
      </ShowHide>
    </div>
  );
}

export default GitHubRecentTag
