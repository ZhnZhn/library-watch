
import { ModalDialog } from '../../constants/Type';
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

export const showDialogWatchItem = (item) =>
  showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);

export const showDialogLoadItemsFromFile = () =>
  showModalDialog(ModalDialog.LOAD_FILE, { onLoad: loadFromJson })

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  deleteWatchItem(option)
}
