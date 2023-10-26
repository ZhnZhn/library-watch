import A from '../zhn-atoms/A';
import { CL_ROW_ITEM } from '../styles/CL';
import {
  S_PB_8,
  S_PR_8
} from './Item.Style';

import formatStrDate from '../../utils/formatStrDate';
import { crDateAgo } from '../../utils/dateFn';

import DivComments from './DivComments';

const CommitList = ({ commits }) => (commits || [])
 .map((item, index) => {
    const { commit, html_url } = item
    , { message='', committer, comment_count } = commit || {}
    , { date, name='' } = committer || {}
    , _dateTime = formatStrDate(date)
    , _dateAgo = crDateAgo(date);

    return (
      <div key={index} className={CL_ROW_ITEM}>
         <A.Link href={html_url}>
           <div style={S_PB_8}>
             <span style={S_PR_8}>
               {name}
             </span>
             <A.DateAgo
                dateAgo={_dateAgo}
                date={_dateTime}
             />
           </div>
           <div>
             {message}
           </div>
           <DivComments n={comment_count} />
         </A.Link>
      </div>
   );
})

export default CommitList
