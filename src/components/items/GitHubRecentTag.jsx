import {
  useState,
  useCallback
} from '../uiApi';
import useToggle from '../hooks/useToggle';
import formatStrDate from '../../utils/formatStrDate';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption';
import TagDetail from './TagDetail';
import CL from '../styles/CL';
import STYLE from './Item.Style';

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
    <div style={STYLE.ROOT}>
      <Caption style={STYLE.PT_8} onClose={onCloseItem}>
        <button
           className={CL.BT_ITEM}
           title={caption}
           style={STYLE.CAPTION_OPEN}
           onClick={toggleIsShow}
        >
          <span>
            {repo}
          </span>
          <span style={STYLE.SPAN_VERSION}>
            {version}
          </span>
        </button>
        <A.ButtonCircle
           caption="W"
           title="Add to Watch"
           style={STYLE.BTN_CIRCLE}
           onClick={_hClickWatch}
        />
        <A.ButtonCircle
           caption="D"
           title="Load Tag Details"
           style={STYLE.BTN_CIRCLE}
           onClick={_hClickDetail}
        />
      </Caption>
      <A.ShowHide isShow={isShow}>
        <TagDetail json={json} />
      </A.ShowHide>
    </div>
  );
}

export default GitHubRecentTag
