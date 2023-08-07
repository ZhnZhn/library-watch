import memoIsShow from '../dialogs/memoIsShow';

import { loadItem  } from '../../flux/itemStore';
import {
  BrowserType,
  ChartType
} from '../../constants/Type';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import FlatButton from '../zhn-m/FlatButton';
import RowText from './RowText';

const DIALOG_CAPTION = "Load Watch Item"
, S_ITEM_DESCRIPTION = {
  fontWeight: 'bold',
  color: 'gray',
  padding: '8px 8px 0 8px'
}
, S_LH_2 = { lineHeight: 2 }
, S_LH_1_5 = { lineHeight: 1.5 }
, S_BOLD = { fontWeight: 'bold' };

const LoadItemDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const _hLoad = () => {
    loadItem(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, data);
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
      <RowText
        key="1"
        style={S_LH_1_5}
        isCaption={false}
        text={descr}
        textStyle={S_ITEM_DESCRIPTION}
      />
      <RowText
        key="2"
        style={S_LH_2}
        caption="Item"
        text={caption}
        textStyle={S_BOLD}
      />
      { date && <RowText
          key="3"
          style={S_LH_2}
          caption="Date"
          text={date}
          textStyle={S_BOLD}
        />
      }
    </ModalDialog>
  );
});

export default LoadItemDialog
