import { memoIsShow } from '../hoc/memoFn';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import D from './DialogCell';

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
  color: '#a487d4',
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

const AlertDialog = memoIsShow(({
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
       <D.Row>
          <span style={S_CAPTION}>
            <span>{_caption}</span>
            <span>:</span>
            <span style={S_ITEM_ID} title={_itemId}>
              {_itemId}
            </span>
          </span>
       </D.Row>
       <D.Row>
          <p style={S_DESCR}>{_descr}</p>
       </D.Row>
    </ModalDialog>
  );
});

export default AlertDialog
