import CL from '../styles/CL';
import STYLE from './Item.Style';

const S = {
  STATE: {
    ...STYLE.PR_8,
    color: '#d7bb52'
  },
  NUMBER: {
    ...STYLE.PR_8,
    color: '#80c040'
  },
  DATE: {
    ...STYLE.PR_8,
    color: 'gray'
  }
};

const _toDate = strDate => (''+strDate)
  .replace('T', ' ')
  .replace('Z', '');

const IssueList = ({ issues }) => (issues || [])
  .map((item, index) => {
    const { state, number, created_at, updated_at, title, html_url } = item
    , _creadedAt = _toDate(created_at)
    , _updatedAt = created_at !== updated_at
        ? _toDate(updated_at)
        : '';
   return (
      <div key={index} className={CL.ROW_ITEM}>
        <a href={html_url}>
           <div style={STYLE.PB_8}>
             <span style={S.STATE}>
               {state}
             </span>
             <span style={S.NUMBER}>
               {`(#${number})`}
             </span>
             <span style={S.DATE}>
               {_creadedAt}
             </span>
             <span style={S.DATE}>
               {_updatedAt}
             </span>
           </div>
           <div>
             {title}
           </div>
        </a>
      </div>
   );
})

export default IssueList
