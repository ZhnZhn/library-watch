"use strict";

exports.__esModule = true;
exports.showDialogWatchItem = exports.showDialogLoadItemsFromFile = exports.showDialogEditLists = exports.showDialogEditGroups = exports.removeWatchItem = void 0;
var _Type = require("../../constants/Type");
var _compStore = require("../../flux/compStore");
var _watchListStore = require("../../flux/watch-list/watchListStore");
const showDialogEditGroups = exports.showDialogEditGroups = (0, _compStore.fShowModalDialog)(_Type.ModalDialog.EDIT_WATCH_GROUP);
const showDialogEditLists = exports.showDialogEditLists = (0, _compStore.fShowModalDialog)(_Type.ModalDialog.EDIT_WATCH_LIST);
const showDialogWatchItem = exports.showDialogWatchItem = (0, _compStore.fShowModalDialog)(_Type.ModalDialog.LOAD_WATCH_ITEM);
const showDialogLoadItemsFromFile = exports.showDialogLoadItemsFromFile = (0, _compStore.fShowModalDialog)(_Type.ModalDialog.LOAD_FILE, {
  onLoad: _watchListStore.loadFromJson
});
const removeWatchItem = (option, evt) => {
  evt.stopPropagation();
  (0, _watchListStore.deleteWatchItem)(option);
};
exports.removeWatchItem = removeWatchItem;
//# sourceMappingURL=Handlers.js.map