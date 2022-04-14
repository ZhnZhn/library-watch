import { ModalDialog } from '../../constants/Type';
import ComponentActions from '../../flux/actions/ComponentActions';
import { BrowserActions } from '../../flux/actions/BrowserActions';
import WatchActions from '../../flux/actions/WatchActions';

export const showDialogEditGroups = () =>
  ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_GROUP);

export const showDialogEditLists = () =>
  ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_LIST);

export const toggleWatchDbBrowser = () =>
  BrowserActions.toggleWatchDbBrowser();

export const showDialogWatchItem = (item) =>
  ComponentActions.showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);

export const showDialogLoadItemsFromFile = ComponentActions.showModalDialog.bind(null, ModalDialog.LOAD_FILE, {
   onLoad: WatchActions.loadFromJson
});

export const removeWatchItem = (option, event) => {
  event.stopPropagation()
  WatchActions.removeItem(option)
}

export const backupWatchItemsToJson =
  WatchActions.backupToJson
