import Rows from './rows/Rows'
import Toolbar from './widgets/Toolbar'

import ShowHide from '../zhn-atoms/ShowHide';
import DraggableDialog from '../zhn-moleculs/DraggableDialog';

const DialogCell = {
  ...Rows,
  Toolbar,
  ShowHide,
  DraggableDialog
};

export default DialogCell
