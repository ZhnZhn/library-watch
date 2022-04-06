import memoIsShow from './memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import D from './DialogCell';

const S_CAPTION = {
  color: '#a487d4',
  width: 400,
  paddingLeft: 10,
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold'
}
, S_DESCR = {
  color: 'gray',
  width: 400,
  paddingLeft: 10,
  lineHeight: 1.4,
  whiteSpace: 'pre',
  fontWeight: 'bold',
};

const InfoDialog = ({
  isShow,
  data,
  onClose
}) => {
  const {
    caption,
    descr
  } = data;
  return (
    <ModalDialog
      caption="Information"
      isShow={isShow}
      onClose={onClose}
    >
       <D.Row>
          <p style={S_CAPTION}>
            {caption}
          </p>
       </D.Row>
       <D.Row>
          <p style={S_DESCR}>{descr}</p>
       </D.Row>
    </ModalDialog>
  );
};

export default memoIsShow(InfoDialog)
