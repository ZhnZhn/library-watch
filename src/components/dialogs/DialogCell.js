import Rows from './rows/Rows'
import Widgets from './widgets/Widgets'

import ShowHide from '../zhnAtoms/ShowHide'

const DialogCell = {
  ...Rows,
  ...Widgets,
  ShowHide
};

export default DialogCell
