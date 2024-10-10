export {
  getWatchList,
  saveWatchList
} from '../../flux/watch-list/watchListStore';

import { bindTo } from '../uiApi';

import { ModalDialog } from '../../constants/Type';
import { showDbWatch } from '../../flux/browserStore';
import { showModalDialog } from '../../flux/compStore';
import {
  deleteWatchItem,
  backupToJson,
  loadFromJson
} from '../../flux/watch-list/watchListStore';


export const showDialogEditGroups = () =>
  showModalDialog(ModalDialog.EDIT_WATCH_GROUP);

export const showDialogEditLists = () =>
  showModalDialog(ModalDialog.EDIT_WATCH_LIST);

export const toggleWatchDbBrowser = showDbWatch

export const showDialogWatchItem = (item) =>
  showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);

export const showDialogLoadItemsFromFile = bindTo(showModalDialog,
  ModalDialog.LOAD_FILE, {
   onLoad: loadFromJson
});

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  deleteWatchItem(option)
}

export const backupWatchItemsToJson = backupToJson
