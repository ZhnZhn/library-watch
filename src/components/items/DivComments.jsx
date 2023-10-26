import { S_COLOR_GREY } from './Item.Style';

const _isNumber = n => typeof n == "number"
 && n-n === 0;

const COMMENT = "Comment";
const DivComments = ({
  n
}) => _isNumber(n) && n
  ? (
    <div style={S_COLOR_GREY}>
      {`${n===1 ? COMMENT : COMMENT + "s"} ${n}`}
    </div>
   )
  : null;

export default DivComments  
