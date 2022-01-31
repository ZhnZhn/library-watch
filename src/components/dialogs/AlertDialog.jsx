import memoIsShow from './memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import STYLE from '../styles/DialogStyles';

const S_CAPTION = {
  color: '#f44336',
  display: 'inline-block',
  width: 400,
  paddingLeft: 10,
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold',
}
, S_ITEM_ID = {
  color: 'rgba(164, 135, 212, 1)',
  fontWeight: 'bold'
}
, S_DESCR = {
  color: 'gray',
  width: 400,
  paddingLeft: 10,
  lineHeight: 1.4,
  whiteSpace: 'pre-line',
  fontWeight: 'bold'
};


const ELLIPSIS = '...';
const _crItemId = str => str
  ? str.substring(0,20) + ELLIPSIS
  : '';

const FN_NOOP = () => {};

const AlertDialog = ({
  isShow,
  data,
  onClose=FN_NOOP
}) => {
  const {
    alertCaption,
    alertItemId,
    alertDescr,
    caption,
    itemId,
    descr
  } = data || {}
  , _caption = alertCaption || caption || ''
  , _itemId = _crItemId(alertItemId || itemId)
  , _descr = alertDescr || descr || '';
  return (
    <ModalDialog
      caption="Alert"
      isShow={isShow}
      onClose={onClose}
    >
       <div style={STYLE.rowDiv}>
          <span style={S_CAPTION}>
            <span>{_caption}</span>
            <span>:</span>
            <span style={S_ITEM_ID} title={_itemId}>
              {_itemId}
            </span>
          </span>
       </div>
       <div style={STYLE.rowDiv}>
          <p style={S_DESCR}>{_descr}</p>
       </div>
    </ModalDialog>
  );
};

/*
AlertDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    alertCaption: PropTypes.string,
    alertItemId: PropTypes.string,
    alertDescr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

export default memoIsShow(AlertDialog)
