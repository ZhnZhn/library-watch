import { ModalDialog } from '../../constants/Type';
import { WatchActions } from '../../flux/actions/WatchActions';
import { showDbWatch } from '../../flux/browserStore';
import { showModalDialog } from '../../flux/compStore';

export const showDialogEditGroups = () =>
  showModalDialog(ModalDialog.EDIT_WATCH_GROUP);

export const showDialogEditLists = () =>
  showModalDialog(ModalDialog.EDIT_WATCH_LIST);

export const toggleWatchDbBrowser = showDbWatch

export const showDialogWatchItem = (item) =>
  showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);

export const showDialogLoadItemsFromFile = showModalDialog.bind(null, ModalDialog.LOAD_FILE, {
   onLoad: WatchActions.loadFromJson
});

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  WatchActions.removeItem(option)
}

export const backupWatchItemsToJson = WatchActions.backupToJson
