"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _localStorageFn = require("../../utils/localStorageFn");
var _merge = _interopRequireDefault(require("../../utils/merge"));
var _dateFn = require("../../utils/dateFn");
var _saveJsonToFile = _interopRequireDefault(require("./saveJsonToFile"));
var _compStore = require("../compStore");
var _browserStore = require("../browserStore");
var _WatchActions = require("../actions/WatchActions");
var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));
var _Msg = require("../../constants/Msg");
var _Fn = require("./Fn");
var _DragDropFn = require("./DragDropFn");
var _GroupFn = require("./GroupFn");
var _ListFn = require("./ListFn");
var _ItemFn = require("./ItemFn");
const STORAGE_KEY = 'WATCH_LIST',
  CAPTION_WATCH_SAVE = 'Watch List:',
  WATCH_FILE_NAME = "WatchItems",
  _crInfoDialogProps = (caption, descr) => ({
    caption,
    descr
  });
const WatchListSlice = {
  watchList: _WatchDefault.default,
  isWatchEdited: false,
  initWatchList() {
    const [value] = (0, _localStorageFn.readFromLs)(STORAGE_KEY);
    this.watchList = value || _WatchDefault.default;
    (0, _browserStore.updateWatchList)(this.watchList);
  },
  getWatchEdited() {
    return this.isWatchEdited;
  },
  setWatchEdited(value) {
    this.isWatchEdited = value;
    this.trigger(_WatchActions.WAT_SET_WATCH_EDITED, this.isWatchEdited);
  },
  getWatchList() {
    return this.watchList;
  },
  getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup(groupCaption) {
    const group = (0, _Fn.findGroup)(this.watchList, groupCaption);
    if (!group) {
      return [];
    }
    return group.lists;
  },
  onAddItem(item) {
    this._onEditWatch((0, _ItemFn.addItem)(this.watchList, item), _WatchActions.WAT_ADD_ITEM);
  },
  onRemoveItem(option) {
    (0, _ItemFn.deleteItem)(this.watchList, option);
    this.setWatchEdited(true);
    (0, _browserStore.updateWatchList)(this.watchList);
  },
  _onDragDrop(result) {
    if (result.isDone) {
      this.setWatchEdited(true);
      (0, _browserStore.updateWatchList)(this.watchList);
    } else {
      (0, _compStore.showAlert)(result);
    }
  },
  onDragDropItem(option) {
    this._onDragDrop((0, _DragDropFn.dragDropItem)(this.watchList, option));
  },
  onDragDropList(option) {
    this._onDragDrop((0, _DragDropFn.dragDropList)(this.watchList, option));
  },
  onDragDropGroup(option) {
    this._onDragDrop((0, _DragDropFn.dragDropGroup)(this.watchList, option));
  },
  onSaveWatch() {
    if (this.isWatchEdited) {
      const err = (0, _localStorageFn.writeToLs)(STORAGE_KEY, this.watchList);
      if (err) {
        console.log(err.message);
      } else {
        this.setWatchEdited(false);
        (0, _compStore.showInfo)(_crInfoDialogProps(CAPTION_WATCH_SAVE, _Msg.MSG_WATCH_SAVED));
        console.log(_Msg.MSG_WATCH_SAVED);
      }
    } else {
      (0, _compStore.showInfo)(_crInfoDialogProps(CAPTION_WATCH_SAVE, _Msg.MSG_WATCH_PREV));
    }
  },
  _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.setWatchEdited(true);
      (0, _browserStore.updateWatchList)(this.watchList);
      this.trigger(_WatchActions.WAT_EDIT_WATCH_COMPLETED, {
        forActionType
      });
    } else {
      this.trigger(_WatchActions.WAT_EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType
      });
    }
  },
  onAddGroup(option) {
    this._onEditWatch((0, _GroupFn.addGroup)(this.watchList, option), _WatchActions.WAT_ADD_GROUP);
  },
  onRenameGroup(option) {
    this._onEditWatch((0, _GroupFn.renameGroup)(this.watchList, option), _WatchActions.WAT_RENAME_GROUP);
  },
  onDeleteGroup(option) {
    this._onEditWatch((0, _GroupFn.deleteGroup)(this.watchList, option), _WatchActions.WAT_DELETE_GROUP);
  },
  onCreateList(option) {
    this._onEditWatch((0, _ListFn.addList)(this.watchList, option), _WatchActions.WAT_CREATE_LIST);
  },
  onRenameList(option) {
    this._onEditWatch((0, _ListFn.renameList)(this.watchList, option), _WatchActions.WAT_RENAME_LIST);
  },
  onDeleteList(option) {
    this._onEditWatch((0, _ListFn.deleteList)(this.watchList, option), _WatchActions.WAT_DELETE_LIST);
  },
  onBackupToJson() {
    const yyyymmdd = (0, _dateFn.mlsToYmd)(Date.now()),
      _fileName = WATCH_FILE_NAME + "_" + yyyymmdd + ".json";
    (0, _saveJsonToFile.default)(this.watchList, _fileName);
  },
  onLoadFromJson(option) {
    try {
      const {
        progressEvent
      } = option;
      (0, _merge.default)(this.watchList, JSON.parse(progressEvent.target.result));
      this.setWatchEdited(true);
      (0, _browserStore.updateWatchList)(this.watchList);
    } catch (exc) {
      (0, _compStore.showAlert)({
        ..._Msg.ALERT_LOAD_FROM_JSON
      });
    }
  }
};
var _default = WatchListSlice;
exports.default = _default;
//# sourceMappingURL=WatchListSlice.js.map