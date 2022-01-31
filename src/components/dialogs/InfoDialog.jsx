import memoIsShow from './memoIsShow';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import STYLE from '../styles/DialogStyles';

const S_CAPTION = {
  color: 'rgba(164, 135, 212, 1)',
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
  const { caption, descr } = data;
  return (
    <ModalDialog
      caption="Information"
      isShow={isShow}
      onClose={onClose}
    >
       <div style={STYLE.rowDiv}>
          <p style={S_CAPTION}>
            {caption}
          </p>
       </div>
       <div style={STYLE.rowDiv}>
          <p style={S_DESCR}>{descr}</p>
       </div>
    </ModalDialog>
  );
};

/*
InfoDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    caption: PropTypes.string,
    descr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

export default memoIsShow(InfoDialog)
