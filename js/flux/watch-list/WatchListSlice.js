"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _localStorageFn = require("../../utils/localStorageFn");
var _merge = _interopRequireDefault(require("../../utils/merge"));
var _DateUtils = require("../../utils/DateUtils");
var _saveJsonToFile = _interopRequireDefault(require("./saveJsonToFile"));
var _ComponentActions = require("../actions/ComponentActions");
var _BrowserActions = require("../actions/BrowserActions");
var _WatchActions = require("../actions/WatchActions");
var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));
var _Type = require("../../constants/Type");
var _Msg = require("../../constants/Msg");
var _Fn = require("./Fn");
var _DragDropFn = require("./DragDropFn");
var _GroupFn = require("./GroupFn");
var _ListFn = require("./ListFn");
var _ItemFn = require("./ItemFn");
var STORAGE_KEY = 'WATCH_LIST',
  CAPTION_WATCH_SAVE = 'Watch List:',
  WATCH_FILE_NAME = "WatchItems",
  _crInfoDialogProps = function _crInfoDialogProps(caption, descr) {
    return {
      caption: caption,
      descr: descr
    };
  };
var WatchListSlice = {
  watchList: _WatchDefault["default"],
  isWatchEdited: false,
  initWatchList: function initWatchList() {
    var _readFromLs = (0, _localStorageFn.readFromLs)(STORAGE_KEY),
      value = _readFromLs[0];
    this.watchList = value || _WatchDefault["default"];
    this.trigger(_BrowserActions.BAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  getWatchEdited: function getWatchEdited() {
    return this.isWatchEdited;
  },
  setWatchEdited: function setWatchEdited(value) {
    this.isWatchEdited = value;
    this.trigger(_WatchActions.WAT_SET_WATCH_EDITED, this.isWatchEdited);
  },
  getWatchList: function getWatchList() {
    return this.watchList;
  },
  getWatchGroups: function getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup: function getWatchListsByGroup(groupCaption) {
    var group = (0, _Fn.findGroup)(this.watchList, groupCaption);
    if (!group) {
      return [];
    }
    return group.lists;
  },
  onAddItem: function onAddItem(item) {
    this._onEditWatch((0, _ItemFn.addItem)(this.watchList, item), _WatchActions.WAT_ADD_ITEM);
  },
  onRemoveItem: function onRemoveItem(option) {
    (0, _ItemFn.deleteItem)(this.watchList, option);
    this.setWatchEdited(true);
    this.trigger(_BrowserActions.BAT_UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop: function _onDragDrop(result) {
    if (result.isDone) {
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BAT_UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropItem: function onDragDropItem(option) {
    this._onDragDrop((0, _DragDropFn.dragDropItem)(this.watchList, option));
  },
  onDragDropList: function onDragDropList(option) {
    this._onDragDrop((0, _DragDropFn.dragDropList)(this.watchList, option));
  },
  onDragDropGroup: function onDragDropGroup(option) {
    this._onDragDrop((0, _DragDropFn.dragDropGroup)(this.watchList, option));
  },
  onSaveWatch: function onSaveWatch() {
    if (this.isWatchEdited) {
      var err = (0, _localStorageFn.writeToLs)(STORAGE_KEY, this.watchList);
      if (err) {
        console.log(err.message);
      } else {
        this.setWatchEdited(false);
        this.onShowModalDialog(_Type.ModalDialog.INFO, _crInfoDialogProps(CAPTION_WATCH_SAVE, _Msg.MSG_WATCH_SAVED));
        console.log(_Msg.MSG_WATCH_SAVED);
      }
    } else {
      this.onShowModalDialog(_Type.ModalDialog.INFO, _crInfoDialogProps(CAPTION_WATCH_SAVE, _Msg.MSG_WATCH_PREV));
    }
  },
  _onEditWatch: function _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BAT_UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WAT_EDIT_WATCH_COMPLETED, {
        forActionType: forActionType
      });
    } else {
      this.trigger(_WatchActions.WAT_EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType: forActionType
      });
    }
  },
  onAddGroup: function onAddGroup(option) {
    this._onEditWatch((0, _GroupFn.addGroup)(this.watchList, option), _WatchActions.WAT_ADD_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch((0, _GroupFn.renameGroup)(this.watchList, option), _WatchActions.WAT_RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch((0, _GroupFn.deleteGroup)(this.watchList, option), _WatchActions.WAT_DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch((0, _ListFn.addList)(this.watchList, option), _WatchActions.WAT_CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch((0, _ListFn.renameList)(this.watchList, option), _WatchActions.WAT_RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch((0, _ListFn.deleteList)(this.watchList, option), _WatchActions.WAT_DELETE_LIST);
  },
  onBackupToJson: function onBackupToJson() {
    var yyyymmdd = (0, _DateUtils.mlsToYmd)(Date.now()),
      _fileName = WATCH_FILE_NAME + "_" + yyyymmdd + ".json";
    (0, _saveJsonToFile["default"])(this.watchList, _fileName);
  },
  onLoadFromJson: function onLoadFromJson(option) {
    try {
      var progressEvent = option.progressEvent;
      (0, _merge["default"])(this.watchList, JSON.parse(progressEvent.target.result));
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BAT_UPDATE_WATCH_BROWSER, this.watchList);
    } catch (exc) {
      _ComponentActions.ComponentActions.showModalDialog(_Type.ModalDialog.ALERT, (0, _extends2["default"])({}, _Msg.ALERT_LOAD_FROM_JSON));
    }
  }
};
var _default = WatchListSlice;
exports["default"] = _default;
//# sourceMappingURL=WatchListSlice.js.map