//import PropTypes from 'prop-types'
import {
  memoIsShow
} from '../hoc/memoFn';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import CardUiTheme from './CardUiTheme';

const TOKEN_USER_SETTINGS = "User Settings"
, S_MODAL = {
  position: 'static',
  width: 340,
  maxHeight: 460,
  margin: '70px auto 0px'
}
, S_DIV_BT = {
  margin: '26px 0 4px 0'
}
, S_TABS = {
  marginLeft: 24,
  textAlign: 'left'
}
, S_CARD_ROOT = {
  position: 'relative',
  maxHeight: 370,
}
, S_CARD_BUTTONS = {
  gap: 4
}
, S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
};

const SettingsDialog = memoIsShow((props) => {
  return (
    <ModalDialog
       isWithButton={true}
       style={S_MODAL}
       caption={TOKEN_USER_SETTINGS}
       isShow={props.isShow}
       onClose={props.onClose}
    >
      <CardUiTheme
        style={S_CARD_ROOT}
        onClose={props.onClose}
      />
   </ModalDialog>
  );
});

/*
SettingsDialog.propTypes = {
  isShow: PropTypes.bool,
  onClose: PropTypes.func
}
*/

export default SettingsDialog
