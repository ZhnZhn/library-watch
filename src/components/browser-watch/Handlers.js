import {
  MD_EDIT_WATCH_GROUP,
  MD_EDIT_WATCH_LIST,
  MD_LOAD_WATCH_ITEM,
  MD_LOAD_FILE
} from '../../constants/Type';
import {
  fShowModalDialog
} from '../../flux/compStore';
import {
  deleteWatchItem,
  loadFromJson
} from '../../flux/watch-list/watchListStore';

export const showDialogEditGroups = fShowModalDialog(MD_EDIT_WATCH_GROUP)
export const showDialogEditLists = fShowModalDialog(MD_EDIT_WATCH_LIST)
export const showDialogWatchItem = fShowModalDialog(MD_LOAD_WATCH_ITEM)
export const showDialogLoadItemsFromFile = fShowModalDialog(
  MD_LOAD_FILE,
  { onLoad: loadFromJson }
)

export const removeWatchItem = (
  option,
  evt
) => {
  evt.stopPropagation()
  deleteWatchItem(option)
}
