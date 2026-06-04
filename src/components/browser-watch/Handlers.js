import {
  ModalDialog
} from '../../constants/Type';
import {
  fShowModalDialog
} from '../../flux/compStore';
import {
  deleteWatchItem,
  loadFromJson
} from '../../flux/watch-list/watchListStore';

export const showDialogEditGroups = fShowModalDialog(ModalDialog.EDIT_WATCH_GROUP)
export const showDialogEditLists = fShowModalDialog(ModalDialog.EDIT_WATCH_LIST)
export const showDialogWatchItem = fShowModalDialog(ModalDialog.LOAD_WATCH_ITEM)
export const showDialogLoadItemsFromFile = fShowModalDialog(
  ModalDialog.LOAD_FILE,
  { onLoad: loadFromJson }
)

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  deleteWatchItem(option)
}
