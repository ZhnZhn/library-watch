import { memo } from '../uiApi';

import ChartActions from '../../flux/actions/ChartActions';
import {
  BrowserType,
  ChartType
} from '../../constants/Type';
import ModalDialog from '../zhn-moleculs/ModalDialog';
import FlatButton from '../zhn-m/FlatButton';

import styles from '../styles/DialogStyles';

const DIALOG_CAPTION = "Load Watch Item"
, S_ITEM_DESCRIPTION = {
  fontWeight: 'bold',
  color: 'gray',
  padding: '8 8 0 8'
}
, S_LH_2 = { lineHeight: 2 }
, S_LH_1_5 = { lineHeight: 1.5 }
, S_BOLD = { fontWeight: 'bold' };

const _isNotShouldRerender = (props, nextProps) =>
  props.isShow === nextProps.isShow;

const LoadItemDialog = memo(({
  isShow,
  data,
  onClose
}) => {
  const _hLoad = () => {
    ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, data);
    onClose();
  }
  , _commandButtons = [
    <FlatButton
      key="load"
      isPrimary={true}
      caption="Load"
      onClick={_hLoad}
    />
   ]
  , {
    caption,
    descr,
    date
  } = data;

  return (
    <ModalDialog
       caption={DIALOG_CAPTION}
       isShow={isShow}
       commandButtons={_commandButtons}
       onClose={onClose}
    >
      <div style={{...styles.rowDiv, ...S_LH_1_5}} key="1">
        <span style={S_ITEM_DESCRIPTION}>
           {descr}
        </span>
      </div>
      <div style={{...styles.rowDiv, ...S_LH_2}} key="2">
        <span style={styles.labelSpan}>
          Item:
        </span>
        <span style={S_BOLD}>
           {caption}
        </span>
      </div>
      { date && <div style={{...styles.rowDiv, ...S_LH_2}} key="3">
          <span style={styles.labelSpan}>
             Date:
          </span>
          <span style={S_BOLD}>
             {date}
          </span>
        </div>
      }
    </ModalDialog>
  );
}, _isNotShouldRerender);

export default LoadItemDialog
