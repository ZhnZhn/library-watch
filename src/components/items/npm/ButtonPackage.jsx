import CL from '../../styles/CL';
import STYLE from '../Item.Style';

import A from '../../zhn-atoms/A';

const S_CAPTION_OPEN = {
  ...STYLE.CAPTION_OPEN,
  position: 'relative',
  top: -3
}, S_SPAN_SUM = {
  color: '#80c040',
  padding: '0 10'
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
     className={CL.BT_ITEM}
     style={S_CAPTION_OPEN}
     title={caption}
     onClick={onClick}
  >
    <span>
      {packageName}
    </span>
    <A.FormattedInteger
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
