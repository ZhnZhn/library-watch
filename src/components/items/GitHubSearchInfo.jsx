import {
  CL_BT_ITEM,
  CL_LIB,
  CL_LIB_TITLE,
  CL_LIB_VALUE,
  CL_LIB_VALUE_TITLE
} from '../styleFn';

import useToggle from '../hooks/useToggle'

import formatStrDate from '../../utils/formatStrDate';

import ShowHide from '../zhn/ShowHide';
import { SourceLink } from '../zhn/Link';
import Caption from './ItemCaption';

import { 
  S_CAPTION_OPEN,
  S_SPAN_VERSION,
  S_PT_8,
  Item
} from './Item.Style';

const ItemDescription = ({
  library
}) => {
  const {
    name,
    description,
    size,
    created_at,
    pushed_at,
    stargazers_count,
    open_issues,
    watchers_count,
    html_url
  } = library || {}
  , _dateCreatedAt = formatStrDate(created_at)
  , _datePushedAt = formatStrDate(pushed_at);
  return (
    <div className={CL_LIB}>
          <div>
             <span className={CL_LIB_TITLE}>
               {name}
             </span>
          </div>
          <div>
            <span>
              {description}
            </span>
          </div>
          <div>
            <span className={CL_LIB_VALUE_TITLE}>
              Size:
            </span>
            <span className={CL_LIB_VALUE}>
              {size}
            </span>
          </div>
          <div>
             <span className={CL_LIB_VALUE_TITLE}>
               Created At:
             </span>
             <span className={CL_LIB_VALUE}>
               {_dateCreatedAt}
             </span>
             <span className={CL_LIB_VALUE_TITLE}>
              Pushed At:
             </span>
             <span className={CL_LIB_VALUE}>
               {_datePushedAt}
             </span>
          </div>
          <div>
            <span className={CL_LIB_VALUE_TITLE}>
              Stars:
            </span>
            <span className={CL_LIB_VALUE}>
              {stargazers_count}
            </span>
            <span className={CL_LIB_VALUE_TITLE}>
              Issues:
            </span>
            <span className={CL_LIB_VALUE}>
              {open_issues}
            </span>
            <span className={CL_LIB_VALUE_TITLE}>
              Watchers:
            </span>
            <span className={CL_LIB_VALUE}>
              {watchers_count}
            </span>
          </div>
          <div>
             <SourceLink href={html_url}>
                Link to GitHub Repository
             </SourceLink>
          </div>
        </div>
  );
};


const GitHubSearchInfo = ({
  repo,
  stars_count,
  pushed_at,
  caption,
  library,
  onCloseItem
}) => {
  const [
    isShow,
    _hToggle
  ] = useToggle(true);

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
            {stars_count}
          </span>
          <span>
            {pushed_at}
          </span>
        </button>
      </Caption>
      <ShowHide isShow={isShow}>
        <ItemDescription
          library={library}
        />
      </ShowHide>
    </Item>
  );
};

export default GitHubSearchInfo
