
import { ModalDialog } from '../../constants/Type';

import AlertDialog from './AlertDialog';
import InfoDialog from './InfoDialog';
import LoadFileDialog from './LoadFileDialog';

import AddToWatchDialog from '../browser-watch/AddToWatchDialog';
import LoadItemDialog from '../browser-watch/LoadItemDialog';
import EditGroupDialog from '../browser-watch/EditGroupDialog';
import EditListDialog from '../browser-watch/EditListDialog';

const RouterModalDialog = {
  [ModalDialog.ALERT] : AlertDialog,
  [ModalDialog.INFO] : InfoDialog,

  [ModalDialog.LOAD_FILE] : LoadFileDialog,

  [ModalDialog.ADD_ITEM] : AddToWatchDialog,
  [ModalDialog.LOAD_WATCH_ITEM] : LoadItemDialog,
  [ModalDialog.EDIT_WATCH_GROUP] : EditGroupDialog,
  [ModalDialog.EDIT_WATCH_LIST] : EditListDialog
};

export default RouterModalDialog
