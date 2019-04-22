import Rows from './rows/Rows'
import Widgets from './widgets/Widgets'

import ShowHide from '../zhn-atoms/ShowHide';
import DraggableDialog from '../zhn-moleculs/DraggableDialog';

const DialogCell = {
  ...Rows,
  ...Widgets,
  ShowHide,
  DraggableDialog
};

export default DialogCell
