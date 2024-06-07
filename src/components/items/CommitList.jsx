import { crMemoCompList } from '../hoc/memoFn';
import { CL_ROW_ITEM } from '../styles/CL';

import formatStrDate from '../../utils/formatStrDate';
import { crDateAgo } from '../../utils/dateFn';

import Link from '../zhn/Link';
import DateAgo from '../zhn/Link';
import DivComments from './DivComments';

import {
  S_PB_8,
  S_PR_8
} from './Item.Style';

const CommitList = crMemoCompList((item, index) => {
  const {
    commit,
    html_url
  } = item
  , {
    message='',
    committer,
    comment_count
  } = commit || {}
  , {
    date,
    name=''
  } = committer || {}
  , _dateTime = formatStrDate(date)
  , _dateAgo = crDateAgo(date);

  return (
    <div key={index} className={CL_ROW_ITEM}>
       <Link href={html_url}>
         <div style={S_PB_8}>
           <span style={S_PR_8}>
             {name}
           </span>
           <DateAgo
              dateAgo={_dateAgo}
              date={_dateTime}
           />
         </div>
         <div>
           {message}
         </div>
         <DivComments n={comment_count} />
       </Link>
    </div>
  );
});

export default CommitList
