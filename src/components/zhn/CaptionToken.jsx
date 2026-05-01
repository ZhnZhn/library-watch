import {
  CL_NOT_SELECTED,
  crStyle2
} from '../styleFn';
import {
  S_CAPTION
} from './CaptionRow.Style';

const CaptionToken = (props) => (
  <span
     className={CL_NOT_SELECTED}
     style={crStyle2(
       S_CAPTION,
       props.style
     )}
  >
    {props.caption ?? ''}
 </span>
);

export default CaptionToken
