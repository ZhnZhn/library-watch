import { CL_BT_ITEM } from '../../styleFn';
import { S_CAPTION_OPEN } from '../Item.Style';

import FormattedInteger from '../../zhn/FormattedInteger';

const _S_CAPTION_OPEN = {
  ...S_CAPTION_OPEN,
  position: 'relative',
  top: -3
}, S_SPAN_SUM = {
  color: '#80c040',
  padding: '0 10px'
}
, S_SPAN_FD = { paddingRight: 10 };

const ButtonPackage = ({
  caption,
  packageName,
  sumDownloads,
  fromDate,
  toDate,
  onClick
}) => (
  <button
     className={CL_BT_ITEM}
     style={_S_CAPTION_OPEN}
     title={caption}
     onClick={onClick}
  >
    <span>
      {packageName}
    </span>
    <FormattedInteger
       style={S_SPAN_SUM}
       value={sumDownloads}
    />
    <span style={S_SPAN_FD}>
      {fromDate}
    </span>
    <span>
      {toDate}
    </span>
  </button>
);

export default ButtonPackage
