import useToggle from '../hooks/useToggle'

import formatStrDate from '../../utils/formatStrDate';

import A from '../zhn-atoms/A';
import Caption from './ItemCaption';
import CL from '../styles/CL';
import STYLE from './Item.Style';

const ItemDescription = ({ library }) => {
  const {
    name, description, size, created_at, pushed_at, stargazers_count,
    open_issues, watchers_count, html_url
  } = library || {}
  , _dateCreatedAt = formatStrDate(created_at)
  , _datePushedAt = formatStrDate(pushed_at);
  return (
    <div className={CL.LIB}>
          <div>
             <span className={CL.LIB_T}>
               {name}
             </span>
          </div>
          <div>
            <span>
              {description}
            </span>
          </div>
          <div>
            <span className={CL.LIB_VT}>
              Size:
            </span>
            <span className={CL.LIB_V}>
              {size}
            </span>
          </div>
          <div>
             <span className={CL.LIB_VT}>
               Created At:
             </span>
             <span className={CL.LIB_V}>
               {_dateCreatedAt}
             </span>
             <span className={CL.LIB_VT}>
              Pushed At:
             </span>
             <span className={CL.LIB_V}>
               {_datePushedAt}
             </span>
          </div>
          <div>
            <span className={CL.LIB_VT}>
              Stars:
            </span>
            <span className={CL.LIB_V}>
              {stargazers_count}
            </span>
            <span className={CL.LIB_VT}>
              Issues:
            </span>
            <span className={CL.LIB_V}>
              {open_issues}
            </span>
            <span className={CL.LIB_VT}>
              Watchers:
            </span>
            <span className={CL.LIB_V}>
              {watchers_count}
            </span>
          </div>
          <div>
             <A.Link
                className={CL.SOURCE_LINK}
                href={html_url}
              >
                Link to GitHub Repository
             </A.Link>
          </div>
        </div>
  );
};


const GitHubSearchInfo = ({
  repo,
  stars_count, pushed_at, caption,
  library,
  onCloseItem
}) => {
  const [isShow, _hToggle] = useToggle(true);

  return (
    <div style={STYLE.ROOT}>
      <Caption style={STYLE.PT_8} onClose={onCloseItem}>
        <button
           className={CL.BT_ITEM}
           title={caption}
           style={STYLE.CAPTION_OPEN}
           onClick={_hToggle}
        >
          <span>
            {repo}
          </span>
          <span style={STYLE.SPAN_VERSION}>
            {stars_count}
          </span>
          <span>
            {pushed_at}
          </span>
        </button>
      </Caption>
      <A.ShowHide isShow={isShow}>
        <ItemDescription
          library={library}
        />
      </A.ShowHide>
    </div>
  );
};

export default GitHubSearchInfo
