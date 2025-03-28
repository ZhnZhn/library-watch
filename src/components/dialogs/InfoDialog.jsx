import { memoIsShow } from '../hoc/memoFn';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import Row from './rows/Row';

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
       <Row>
          <p style={S_CAPTION}>
            {caption}
          </p>
       </Row>
       <Row>
          <p style={S_DESCR}>{descr}</p>
       </Row>
    </ModalDialog>
  );
};

export default memoIsShow(InfoDialog)
