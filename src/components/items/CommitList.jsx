import A from '../zhn-atoms/A';
import CL from '../styles/CL';
import STYLE from './Item.Style';

import formatStrDate from '../../utils/formatStrDate';
import { crDateAgo } from '../../utils/dateFn';

const CommitList = ({ commits }) => (commits || [])
 .map((item, index) => {
    const { commit, html_url } = item
    , { message='', committer } = commit || {}
    , { date, name='' } = committer || {}
    , _dateTime = formatStrDate(date)
    , _dateAgo = crDateAgo(date);

    return (
      <div key={index} className={CL.ROW_ITEM}>
         <A.Link href={html_url}>
           <div style={STYLE.PB_8}>
             <span style={STYLE.PR_8}>
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
         </A.Link>
      </div>
   );
})

export default CommitList
