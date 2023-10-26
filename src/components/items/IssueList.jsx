import A from '../zhn-atoms/A';
import { CL_ROW_ITEM } from '../styles/CL';
import {
  S_COLOR_GREY,
  S_PR_8,
  S_PB_8
} from './Item.Style';
import DivComments from './DivComments';

import { crDateAgo } from '../../utils/dateFn';

const S_STATE = {
  ...S_PR_8,
  color: '#d7bb52'
}
, S_NUMBER = {
  ...S_PR_8,
  color: '#80c040'
}
, S_DATE = {
  ...S_PR_8,
  ...S_COLOR_GREY
};

const IssueList = ({ issues }) => (issues || [])
  .map((item, index) => {
    const {
      state,
      number,
      created_at,
      updated_at,
      title,
      comments,
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
      <div key={index} className={CL_ROW_ITEM}>
        <A.Link href={html_url}>
           <div style={S_PB_8}>
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
           <DivComments n={comments} />
        </A.Link>
      </div>
   );
})

export default IssueList
