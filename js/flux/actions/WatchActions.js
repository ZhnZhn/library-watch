"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.WatchActionTypes = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _Reflux$createActions;

var WatchActionTypes = {
  ADD_ITEM: 'addItem',
  REMOVE_ITEM: 'removeItem',
  SAVE_WATCH: 'saveWatch',
  DRAG_DROP_GROUP: 'dragDropGroup',
  DRAG_DROP_LIST: 'dragDropList',
  DRAG_DROP_ITEM: 'dragDropItem',
  ADD_GROUP: 'addGroup',
  RENAME_GROUP: 'renameGroup',
  DELETE_GROUP: 'deleteGroup',
  CREATE_LIST: 'createList',
  RENAME_LIST: 'renameList',
  DELETE_LIST: 'deleteList',
  EDIT_WATCH_COMPLETED: 'editWatchCompleted',
  EDIT_WATCH_FAILED: 'editWatchFailed',
  BACKUP_TO_JSON: 'backupToJson',
  LOAD_FROM_JSON: 'loadFromJson',
  SET_WATCH_EDITED: 'setWatchEdited'
};
exports.WatchActionTypes = WatchActionTypes;

var WatchActions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[WatchActionTypes.ADD_ITEM] = {}, _Reflux$createActions[WatchActionTypes.REMOVE_ITEM] = {}, _Reflux$createActions[WatchActionTypes.SAVE_WATCH] = {}, _Reflux$createActions[WatchActionTypes.DRAG_DROP_GROUP] = {}, _Reflux$createActions[WatchActionTypes.DRAG_DROP_LIST] = {}, _Reflux$createActions[WatchActionTypes.DRAG_DROP_ITEM] = {}, _Reflux$createActions[WatchActionTypes.ADD_GROUP] = {}, _Reflux$createActions[WatchActionTypes.RENAME_GROUP] = {}, _Reflux$createActions[WatchActionTypes.DELETE_GROUP] = {}, _Reflux$createActions[WatchActionTypes.CREATE_LIST] = {}, _Reflux$createActions[WatchActionTypes.RENAME_LIST] = {}, _Reflux$createActions[WatchActionTypes.DELETE_LIST] = {}, _Reflux$createActions[WatchActionTypes.EDIT_WATCH_COMPLETED] = {}, _Reflux$createActions[WatchActionTypes.EDIT_WATCH_FAILED] = {}, _Reflux$createActions[WatchActionTypes.BACKUP_TO_JSON] = {}, _Reflux$createActions[WatchActionTypes.LOAD_FROM_JSON] = {}, _Reflux$createActions));

var _default = WatchActions;
exports["default"] = _default;
//# sourceMappingURL=WatchActions.js.map