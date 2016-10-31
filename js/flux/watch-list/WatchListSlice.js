'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _jszip = require('jszip');

var _jszip2 = _interopRequireDefault(_jszip);

var _browserFilesaver = require('browser-filesaver');

var _browserFilesaver2 = _interopRequireDefault(_browserFilesaver);

var _DateUtils = require('../../utils/DateUtils');

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _BrowserActions = require('../actions/BrowserActions');

var _WatchActions = require('../actions/WatchActions');

var _WatchDefault = require('../../constants/WatchDefault');

var _WatchDefault2 = _interopRequireDefault(_WatchDefault);

var _Type = require('../../constants/Type');

var _Msg = require('../../constants/Msg');

var _Msg2 = _interopRequireDefault(_Msg);

var _Logic = require('./Logic');

var _Logic2 = _interopRequireDefault(_Logic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORAGE_KEY = 'WATCH_LIST_PACKAGE',
    CAPTION_WATCH_SAVE = 'Watch List:',
    CAPTION_WATCH_EXPORT = "BackUp Watch Items:",
    WATCH_FILE_NAME = "WatchItems";

var WatchListSlice = {

  watchList: _WatchDefault2.default,
  isWatchEdited: false,

  initWatchList: function initWatchList() {
    var _this = this;

    _localforage2.default.getItem(STORAGE_KEY).then(function (value) {
      _this.watchList = value ? value : _WatchDefault2.default;
      _this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, _this.watchList);
    }).catch(function () {
      _this.watchList = _WatchDefault2.default;
      _this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, _this.watchList);
    });
  },
  getWatchList: function getWatchList() {
    return this.watchList;
  },
  getWatchGroups: function getWatchGroups() {
    return this.watchList.groups;
  },
  getWatchListsByGroup: function getWatchListsByGroup(groupCaption) {
    var group = _Logic2.default.findGroup(this.watchList, groupCaption);
    if (!group) {
      return [];
    }
    return group.lists;
  },
  onAddItem: function onAddItem(item) {
    this._onEditWatch(_Logic2.default.addItem(this.watchList, item), _WatchActions.WatchActionTypes.ADD_ITEM);
  },
  onRemoveItem: function onRemoveItem(option) {
    _Logic2.default.removeItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
  },
  _onDragDrop: function _onDragDrop(result) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropItem: function onDragDropItem(option) {
    this._onDragDrop(_Logic2.default.dragDropItem(this.watchList, option));
  },
  onDragDropList: function onDragDropList(option) {
    this._onDragDrop(_Logic2.default.dragDropList(this.watchList, option));
  },
  onDragDropGroup: function onDragDropGroup(option) {
    this._onDragDrop(_Logic2.default.dragDropGroup(this.watchList, option));
  },
  onSaveWatch: function onSaveWatch() {
    var _this2 = this;

    if (this.isWatchEdited) {
      _localforage2.default.setItem(STORAGE_KEY, this.watchList).then(function () {
        _this2.isWatchEdited = false;
        _this2.onShowModalDialog(_Type.ModalDialog.INFO, {
          caption: CAPTION_WATCH_SAVE,
          descr: _Msg2.default.WATCH_SAVED
        });
        console.log(_Msg2.default.WATCH_SAVED);
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.onShowModalDialog(_Type.ModalDialog.INFO, {
        caption: CAPTION_WATCH_SAVE,
        descr: _Msg2.default.WATCH_PREV
      });
    }
  },
  _onEditWatch: function _onEditWatch(result, forActionType) {
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED, { forActionType: forActionType });
    } else {
      this.trigger(_WatchActions.WatchActionTypes.EDIT_WATCH_FAILED, {
        messages: [result.message],
        forActionType: forActionType
      });
    }
  },
  onAddGroup: function onAddGroup(option) {
    this._onEditWatch(_Logic2.default.addGroup(this.watchList, option), _WatchActions.WatchActionTypes.ADD_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch(_Logic2.default.renameGroup(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch(_Logic2.default.deleteGroup(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch(_Logic2.default.createList(this.watchList, option), _WatchActions.WatchActionTypes.CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch(_Logic2.default.renameList(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch(_Logic2.default.deleteList(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_LIST);
  },
  onExportToZip: function onExportToZip() {
    var zip = new _jszip2.default();
    var yyyymmdd = _DateUtils2.default.formatToYYYYMMDD(Date.now());

    zip.file(WATCH_FILE_NAME + '_' + yyyymmdd + '.json}', JSON.stringify(this.watchList));

    zip.generateAsync({ type: "blob" }).then(function (content) {
      var _zipName = WATCH_FILE_NAME + '_' + yyyymmdd + '.zip';
      _browserFilesaver2.default.saveAs(content, _zipName);
      _ComponentActions2.default.showModalDialog(_Type.ModalDialog.INFO, {
        caption: CAPTION_WATCH_EXPORT,
        descr: _Msg2.default.WATCH_BACKUP_ZIP(_zipName)
      });
    }).catch(function (err) {
      _ComponentActions2.default.showModalDialog(_Type.ModalDialog.ALERT, {
        caption: CAPTION_WATCH_EXPORT,
        descr: _Msg2.default.WATCH_BACKUP_ZIP_FAILED
      });
    });
  }
};

exports.default = WatchListSlice;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\watch-list\WatchListSlice.js.map