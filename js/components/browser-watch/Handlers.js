"use strict";

exports.__esModule = true;
exports.toggleWatchDbBrowser = exports.showDialogWatchItem = exports.showDialogLoadItemsFromFile = exports.showDialogEditLists = exports.showDialogEditGroups = exports.removeWatchItem = exports.backupWatchItemsToJson = void 0;
var _Type = require("../../constants/Type");
var _BrowserActions = require("../../flux/actions/BrowserActions");
var _WatchActions = require("../../flux/actions/WatchActions");
var _compStore = require("../../flux/compStore");
const showDialogEditGroups = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_GROUP);
exports.showDialogEditGroups = showDialogEditGroups;
const showDialogEditLists = () => (0, _compStore.showModalDialog)(_Type.ModalDialog.EDIT_WATCH_LIST);
exports.showDialogEditLists = showDialogEditLists;
const toggleWatchDbBrowser = () => _BrowserActions.BrowserActions.toggleWatchDbBrowser();
exports.toggleWatchDbBrowser = toggleWatchDbBrowser;
const showDialogWatchItem = item => (0, _compStore.showModalDialog)(_Type.ModalDialog.LOAD_WATCH_ITEM, item);
exports.showDialogWatchItem = showDialogWatchItem;
const showDialogLoadItemsFromFile = _compStore.showModalDialog.bind(null, _Type.ModalDialog.LOAD_FILE, {
  onLoad: _WatchActions.WatchActions.loadFromJson
});
exports.showDialogLoadItemsFromFile = showDialogLoadItemsFromFile;
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  _WatchActions.WatchActions.removeItem(option);
};
exports.removeWatchItem = removeWatchItem;
const backupWatchItemsToJson = _WatchActions.WatchActions.backupToJson;
exports.backupWatchItemsToJson = backupWatchItemsToJson;
//# sourceMappingURL=Handlers.js.map