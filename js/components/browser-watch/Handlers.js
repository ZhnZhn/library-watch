"use strict";

exports.__esModule = true;
exports.toggleWatchDbBrowser = exports.showDialogWatchItem = exports.showDialogLoadItemsFromFile = exports.showDialogEditLists = exports.showDialogEditGroups = exports.saveWatchList = exports.removeWatchItem = exports.getWatchList = exports.backupWatchItemsToJson = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
exports.getWatchList = _watchListStore.getWatchList;
exports.saveWatchList = _watchListStore.saveWatchList;
var _Type = require("../../constants/Type");
var _browserStore = require("../../flux/browserStore");
var _compStore = require("../../flux/compStore");
const showDialogEditGroups = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const toggleWatchDbBrowser = _browserStore.showDbWatch;
exports.toggleWatchDbBrowser = toggleWatchDbBrowser;
const showDialogWatchItem = item => (0, _compStore.showModalDialog)(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
exports.showDialogWatchItem = showDialogWatchItem;
const showDialogLoadItemsFromFile = _compStore.showModalDialog.bind(null, _Type.ModalDialog.LOAD_FILE, {
  onLoad: _watchListStore.loadFromJson
});
exports.showDialogLoadItemsFromFile = showDialogLoadItemsFromFile;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  (0, _watchListStore.deleteWatchItem)(option);
};
exports.removeWatchItem = removeWatchItem;
const backupWatchItemsToJson = _watchListStore.backupToJson;
exports.backupWatchItemsToJson = backupWatchItemsToJson;
//# sourceMappingURL=Handlers.js.map