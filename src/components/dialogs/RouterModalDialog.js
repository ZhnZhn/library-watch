
import {
  MD_ALERT,
  MD_INFO,
  MD_SETTINGS,
  MD_LOAD_FILE,
  MD_ADD_ITEM,
  MD_LOAD_WATCH_ITEM,
  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST
} from '../../constants/Type';

import AlertDialog from './AlertDialog';
import InfoDialog from './InfoDialog';
import LoadFileDialog from './LoadFileDialog';

import SettingsDialog from '../header/SettingsDialog';

import AddToWatchDialog from '../browser-watch/AddToWatchDialog';
import LoadItemDialog from '../browser-watch/LoadItemDialog';
import EditGroupDialog from '../browser-watch/EditGroupDialog';
import EditListDialog from '../browser-watch/EditListDialog';

const RouterModalDialog = {
  [MD_ALERT] : AlertDialog,
  [MD_INFO] : InfoDialog,

  [MD_SETTINGS]: SettingsDialog,

  [MD_LOAD_FILE] : LoadFileDialog,

  [MD_ADD_ITEM] : AddToWatchDialog,
  [MD_LOAD_WATCH_ITEM] : LoadItemDialog,
  [MD_EDIT_WATCH_GROUP] : EditGroupDialog,
  [MD_EDIT_WATCH_LIST] : EditListDialog
};

export default RouterModalDialog
