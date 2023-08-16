import A from '../zhn-atoms/A';
import CL from '../styles/CL';
import STYLE from './Item.Style';

import { crDateAgo } from '../../utils/dateFn';

const S_STATE = {
  ...STYLE.PR_8,
  color: '#d7bb52'
}
, S_NUMBER = {
  ...STYLE.PR_8,
  color: '#80c040'
}
, S_DATE = {
  ...STYLE.PR_8,
  color: 'gray'
};

const IssueList = ({ issues }) => (issues || [])
  .map((item, index) => {
    const {
      state,
      number,
      created_at,
      updated_at,
      title,
      html_url
    } = item
    , _creadedAt = crDateAgo(created_at)
    , _updated = created_at === updated_at
        ? ''
        : crDateAgo(updated_at)
    , _updatedAt = _creadedAt === _updated
        ? ''
        : _updated;

   return (
      <div key={index} className={CL.ROW_ITEM}>
        <A.Link href={html_url}>
           <div style={STYLE.PB_8}>
             <span style={S_STATE}>
               {state}
             </span>
             <span style={S_NUMBER}>
               {`(#${number})`}
             </span>
             <span style={S_DATE}>
               {_creadedAt}
             </span>
             <span style={S_DATE}>
               {_updatedAt}
             </span>
           </div>
           <div>
             {title}
           </div>
        </A.Link>
      </div>
   );
})

export default IssueList
