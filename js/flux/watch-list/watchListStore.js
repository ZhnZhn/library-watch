"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useWatchList = exports.useMsEdit = exports.useIsWatchEdited = exports.saveWatchList = exports.renList = exports.renGroup = exports.loadFromJson = exports.initWatchList = exports.getWatchListsByGroup = exports.getWatchList = exports.getWatchGroups = exports.getIsWatchEdited = exports.deleteWatchItem = exports.delList = exports.delGroup = exports.ddList = exports.ddItem = exports.ddGroup = exports.crList = exports.crGroup = exports.backupToJson = exports.addWatchItem = void 0;
var _merge = _interopRequireDefault(require("../../utils/merge"));
var _dateFn = require("../../utils/dateFn");
var _saveJsonToFile = _interopRequireDefault(require("./saveJsonToFile"));
var _localStorageFn = require("../../utils/localStorageFn");
var _storeApi = require("../storeApi");
var _compStore = require("../compStore");
var _Msg = require("../../constants/Msg");
var _WatchDefault = _interopRequireDefault(require("../../constants/WatchDefault"));
var _WatchActions = require("../actions/WatchActions");
var _Fn = require("./Fn");
var _DragDropFn = require("./DragDropFn");
var _GroupFn = require("./GroupFn");
var _ListFn = require("./ListFn");
var _ItemFn = require("./ItemFn");
const STORAGE_KEY = 'WL_LIBRARY_WATCH',
  DIALOG_CAPTION = 'Watch List:',
  WATCH_FILE_NAME = "WatchItems";
const _crStore = () => ({
    isWatchEdited: false,
    watchList: _WatchDefault.default,
    msEdit: {}
  }),
  _watchListStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectWatchList = state => state.watchList,
  _selectMsEdit = state => state.msEdit,
  _selectIsWatchEdited = state => state.isWatchEdited,
  _set = _watchListStore.setState,
  _get = _watchListStore.getState;
const getIsWatchEdited = () => _selectIsWatchEdited(_get());
exports.getIsWatchEdited = getIsWatchEdited;
const getWatchList = () => _selectWatchList(_get());
exports.getWatchList = getWatchList;
const useWatchList = exports.useWatchList = (0, _storeApi.fCrUse)(_watchListStore, _selectWatchList);
const useMsEdit = exports.useMsEdit = (0, _storeApi.fCrUse)(_watchListStore, _selectMsEdit);
const useIsWatchEdited = exports.useIsWatchEdited = (0, _storeApi.fCrUse)(_watchListStore, _selectIsWatchEdited);
const getWatchGroups = () => (getWatchList() || {}).groups;
exports.getWatchGroups = getWatchGroups;
const getWatchListsByGroup = groupCaption => {
  const group = (0, _Fn.findGroup)(getWatchList(), groupCaption);
  return group ? group.lists : [];
};
exports.getWatchListsByGroup = getWatchListsByGroup;
const _onEditWatch = (result, forActionType) => {
  if (result.isDone) {
    _set({
      isWatchEdited: true,
      watchList: {
        ...getWatchList()
      },
      msEdit: {
        forActionType
      }
    });
  } else {
    _set({
      msEdit: {
        messages: [result.message],
        forActionType
      }
    });
  }
};
const _fEditWatch = (editEntity, EDIT_ENTITY) => option => {
  _onEditWatch(editEntity(getWatchList(), option), EDIT_ENTITY);
};
const crGroup = exports.crGroup = _fEditWatch(_GroupFn.addGroup, _WatchActions.WAT_CREATE_GROUP);
const renGroup = exports.renGroup = _fEditWatch(_GroupFn.renameGroup, _WatchActions.WAT_RENAME_GROUP);
const delGroup = exports.delGroup = _fEditWatch(_GroupFn.deleteGroup, _WatchActions.WAT_DELETE_GROUP);
const crList = exports.crList = _fEditWatch(_ListFn.addList, _WatchActions.WAT_CREATE_LIST);
const renList = exports.renList = _fEditWatch(_ListFn.renameList, _WatchActions.WAT_RENAME_LIST);
const delList = exports.delList = _fEditWatch(_ListFn.deleteList, _WatchActions.WAT_DELETE_LIST);
const _addItem = _fEditWatch(_ItemFn.addItem, _WatchActions.WAT_ADD_ITEM);
const _onDragDrop = result => {
  if (result.isDone) {
    _set({
      isWatchEdited: true,
      watchList: {
        ...getWatchList()
      }
    });
  } else {
    (0, _compStore.showAlert)(result);
  }
};
const _fDdEntity = ddEntity => option => {
  _onDragDrop(ddEntity(getWatchList(), option));
};
const ddItem = exports.ddItem = _fDdEntity(_DragDropFn.dragDropItem);
const ddList = exports.ddList = _fDdEntity(_DragDropFn.dragDropList);
const ddGroup = exports.ddGroup = _fDdEntity(_DragDropFn.dragDropGroup);
const _crMsgOption = descr => ({
  caption: DIALOG_CAPTION,
  descr
});
const _saveWl = function (isShowDialog) {
  if (isShowDialog === void 0) {
    isShowDialog = true;
  }
  if (getIsWatchEdited()) {
    const _err = (0, _localStorageFn.writeToLs)(STORAGE_KEY, getWatchList());
    if (_err) {
      (0, _compStore.showAlert)(_crMsgOption(_err.message));
    } else {
      _set({
        isWatchEdited: false
      });
      if (isShowDialog) {
        (0, _compStore.showInfo)(_crMsgOption(_Msg.MSG_WATCH_SAVED));
      }
    }
  } else {
    (0, _compStore.showInfo)(_crMsgOption(_Msg.MSG_WATCH_PREV));
  }
};
const initWatchList = () => {
  _set({
    watchList: (0, _localStorageFn.readFromLs)(STORAGE_KEY)[0] || _WatchDefault.default
  });
};
exports.initWatchList = initWatchList;
const saveWatchList = function (_temp) {
  let {
    isShowDialog
  } = _temp === void 0 ? {} : _temp;
  _saveWl(isShowDialog);
};
exports.saveWatchList = saveWatchList;
const addWatchItem = item => {
  _addItem(item);
};
exports.addWatchItem = addWatchItem;
const deleteWatchItem = option => {
  (0, _ItemFn.deleteItem)(getWatchList(), option);
  _set({
    isWatchEdited: true,
    watchList: {
      ...getWatchList()
    }
  });
};
exports.deleteWatchItem = deleteWatchItem;
const backupToJson = () => {
  const yyyymmdd = (0, _dateFn.mlsToYmd)(Date.now()),
    _fileName = `${WATCH_FILE_NAME}_${yyyymmdd}.json`;
  (0, _saveJsonToFile.default)(getWatchList(), _fileName);
};
exports.backupToJson = backupToJson;
const loadFromJson = option => {
  try {
    const {
      progressEvent
    } = option;
    (0, _merge.default)(getWatchList(), JSON.parse(progressEvent.target.result));
    _set({
      isWatchEdited: true,
      watchList: {
        ...getWatchList()
      }
    });
  } catch (exc) {
    (0, _compStore.showAlert)({
      ..._Msg.ALERT_LOAD_FROM_JSON
    });
  }
};
exports.loadFromJson = loadFromJson;
//# sourceMappingURL=watchListStore.js.map