import { isNumber } from '../../utils/isTypeFn';
import { S_COLOR_GREY } from './Item.Style';

const COMMENT = "Comment";
const DivComments = ({
  n
}) => isNumber(n) && n
  ? (
     <div style={S_COLOR_GREY}>
       {`${n===1 ? COMMENT : COMMENT + "s"} ${n}`}
     </div>
    )
  : null;

export default DivComments
