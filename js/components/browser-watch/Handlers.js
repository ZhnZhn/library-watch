"use strict";

exports.__esModule = true;
exports.showDialogWatchItem = exports.showDialogLoadItemsFromFile = exports.showDialogEditLists = exports.showDialogEditGroups = exports.removeWatchItem = void 0;
var _Type = require("../../constants/Type");
var _compStore = require("../../flux/compStore");
var _watchListStore = require("../../flux/watch-list/watchListStore");
const showDialogEditGroups = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const showDialogWatchItem = item => (0, _compStore.showModalDialog)(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
exports.showDialogWatchItem = showDialogWatchItem;
const showDialogLoadItemsFromFile = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.LOAD_FILE, {
  onLoad: _watchListStore.loadFromJson
});
exports.showDialogLoadItemsFromFile = showDialogLoadItemsFromFile;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  (0, _watchListStore.deleteWatchItem)(option);
};
exports.removeWatchItem = removeWatchItem;
//# sourceMappingURL=Handlers.js.map