import A from '../zhn-atoms/A';
import CL from '../styles/CL';
import STYLE from './Item.Style';

import formatDate from '../../utils/formatDate';

const CommitList = ({ commits }) => (commits || [])
 .map((item, index) => {
    const { commit, html_url } = item
    , { message='', committer } = commit || {}
    , { date='', name='' } = committer || {}
    , _dateTime = date.replace('T', ' ').replace('Z', '')
    , _dateAgo = formatDate(_dateTime);

    return (
      <div key={index} className={CL.ROW_ITEM}>
         <a href={html_url}>
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
         </a>
      </div>
   );
})

export default CommitList
