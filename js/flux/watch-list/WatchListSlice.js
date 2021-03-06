"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _localforage = _interopRequireDefault(require("localforage"));

var _browserFilesaver = _interopRequireDefault(require("browser-filesaver"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _DateUtils = _interopRequireDefault(require("../../utils/DateUtils"));

var _ComponentActions = _interopRequireDefault(require("../actions/ComponentActions"));

var _BrowserActions = require("../actions/BrowserActions");

var _WatchActions = require("../actions/WatchActions");

var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));

var _Type = require("../../constants/Type");

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _Logic = _interopRequireDefault(require("./Logic"));

//import JSZip from 'jszip';
var STORAGE_KEY = 'WATCH_LIST_PACKAGE',
    CAPTION_WATCH_SAVE = 'Watch List:',
    CAPTION_WATCH_EXPORT = "BackUp Watch Items:",
    WATCH_FILE_NAME = "WatchItems";
var WatchListSlice = {
  watchList: _WatchDefault["default"],
  isWatchEdited: false,
  initWatchList: function initWatchList() {
    var _this = this;

    _localforage["default"].getItem(STORAGE_KEY).then(function (value) {
      _this.watchList = value ? value : _WatchDefault["default"];

      _this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, _this.watchList);
    })["catch"](function () {
      _this.watchList = _WatchDefault["default"];

      _this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, _this.watchList);
    });
  },
  getWatchEdited: function getWatchEdited() {
    return this.isWatchEdited;
  },
  setWatchEdited: function setWatchEdited(value) {
    this.isWatchEdited = value;
    this.trigger(_WatchActions.WatchActionTypes.SET_WATCH_EDITED, this.isWatchEdited);
  },
  getWatchList: function getWatchList() {
    return this.watchList;
  },
  getWatchGroups: function getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup: function getWatchListsByGroup(groupCaption) {
    var group = _Logic["default"].findGroup(this.watchList, groupCaption);

    if (!group) {
      return [];
    }

    return group.lists;
  },
  onAddItem: function onAddItem(item) {
    this._onEditWatch(_Logic["default"].addItem(this.watchList, item), _WatchActions.WatchActionTypes.ADD_ITEM);
  },
  onRemoveItem: function onRemoveItem(option) {
    _Logic["default"].removeItem(this.watchList, option);

    this.setWatchEdited(true);
    this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop: function _onDragDrop(result) {
    if (result.isDone) {
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropItem: function onDragDropItem(option) {
    this._onDragDrop(_Logic["default"].dragDropItem(this.watchList, option));
  },
  onDragDropList: function onDragDropList(option) {
    this._onDragDrop(_Logic["default"].dragDropList(this.watchList, option));
  },
  onDragDropGroup: function onDragDropGroup(option) {
    this._onDragDrop(_Logic["default"].dragDropGroup(this.watchList, option));
  },
  onSaveWatch: function onSaveWatch() {
    var _this2 = this;

    if (this.isWatchEdited) {
      _localforage["default"].setItem(STORAGE_KEY, this.watchList).then(function () {
        _this2.setWatchEdited(false);

        _this2.onShowModalDialog(_Type.ModalDialog.INFO, {
          caption: CAPTION_WATCH_SAVE,
          descr: _Msg["default"].WATCH_SAVED
        });

        console.log(_Msg["default"].WATCH_SAVED);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      this.onShowModalDialog(_Type.ModalDialog.INFO, {
        caption: CAPTION_WATCH_SAVE,
        descr: _Msg["default"].WATCH_PREV
      });
    }
  },
  _onEditWatch: function _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED, {
        forActionType: forActionType
      });
    } else {
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType: forActionType
      });
    }
  },
  onAddGroup: function onAddGroup(option) {
    this._onEditWatch(_Logic["default"].addGroup(this.watchList, option), _WatchActions.WatchActionTypes.ADD_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch(_Logic["default"].renameGroup(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch(_Logic["default"].deleteGroup(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch(_Logic["default"].createList(this.watchList, option), _WatchActions.WatchActionTypes.CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch(_Logic["default"].renameList(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch(_Logic["default"].deleteList(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_LIST);
  },
  onBackupToJson: function onBackupToJson() {
    var yyyymmdd = _DateUtils["default"].formatToYYYYMMDD(Date.now()),
        _blob = new Blob([JSON.stringify(this.watchList)], {
      type: "application/json"
    }),
        _fileName = WATCH_FILE_NAME + "_" + yyyymmdd + ".json";

    _browserFilesaver["default"].saveAs(_blob, _fileName);

    _ComponentActions["default"].showModalDialog(_Type.ModalDialog.INFO, {
      caption: CAPTION_WATCH_EXPORT,
      descr: _Msg["default"].WATCH_BACKUP_ZIP(_fileName)
    });
  },
  onLoadFromJson: function onLoadFromJson(option) {
    try {
      var progressEvent = option.progressEvent;
      (0, _lodash["default"])(this.watchList, JSON.parse(progressEvent.target.result));
      this.setWatchEdited(true);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } catch (exc) {
      _ComponentActions["default"].showModalDialog(_Type.ModalDialog.ALERT, (0, _extends2["default"])({}, _Msg["default"].Alert.LOAD_FROM_JSON));
    }
  }
};
var _default = WatchListSlice;
exports["default"] = _default;
//# sourceMappingURL=WatchListSlice.js.map