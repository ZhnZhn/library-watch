'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _localforage = require('localforage');

var _localforage2 = _interopRequireDefault(_localforage);

var _Im = require('../../utils/Im');

var _Im2 = _interopRequireDefault(_Im);

var _BrowserActions = require('../actions/BrowserActions');

var _WatchActions = require('../actions/WatchActions');

var _WatchDefault = require('../../constants/WatchDefault');

var _WatchDefault2 = _interopRequireDefault(_WatchDefault);

var _Type = require('../../constants/Type');

var _Msg = require('../../constants/Msg');

var _Msg2 = _interopRequireDefault(_Msg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var STORAGE_KEY = 'WATCH_LIST_PACKAGE',
    DIALOG_CAPTION = 'Watch List:';

var _fResultNotFound = function _fResultNotFound(itemType, name) {
  return { isDone: false, message: _Msg2.default.NOT_FOUND_ITEM(itemType, name) };
};
var _fResultGroupExisted = function _fResultGroupExisted(caption) {
  return { isDone: false, message: _Msg2.default.GROUP_EXISTED(caption) };
};
var _fResultListExisted = function _fResultListExisted(captionList, captionGroup) {
  return { isDone: false, message: _Msg2.default.LIST_EXISTED(captionList, captionGroup) };
};
var _fResultItemExisted = function _fResultItemExisted(caption, captionList) {
  return { isDone: false, message: _Msg2.default.ITEM_EXISTED(caption, captionList) };
};

var _fnFilter = _Im2.default.filterArray.bind(null, 'caption');

/*
const _fnFilter = function(arr, caption){
  return arr.filter((obj, index) =>{
    return obj.caption !== caption
  });
}
*/

var _fnFindIndex = function _fnFindIndex(arr, caption) {
  return arr.findIndex(function (item, index) {
    return item.caption === caption;
  });
};

var _fnGetArrayWithObj = function _fnGetArrayWithObj(arr, obj) {
  return arr ? [].concat(_toConsumableArray(arr), [obj]) : [obj];
};
var _fnGetArrayWithRename = function _fnGetArrayWithRename(arr, index, caption) {
  return [].concat(_toConsumableArray(arr.slice(0, index)), [Object.assign({}, arr[index], { caption: caption })], _toConsumableArray(arr.slice(index + 1)));
};

var _fnCheckIsInArraySameCaption = function _fnCheckIsInArraySameCaption(arr, caption) {
  var index = arr ? arr.findIndex(function (item, i) {
    return item.caption === caption;
  }) : -1;
  if (index === -1) {
    return false;
  } else {
    return true;
  }
};

var _fnFindGroup = function _fnFindGroup(watchList, captionGroup) {
  return watchList.groups.find(function (group, index) {
    return group.caption === captionGroup;
  });
};

var _fnFindList = function _fnFindList(group, captionList) {
  return group.lists.find(function (list, index) {
    return list.caption === captionList;
  });
};

var _fnAddItem = function _fnAddItem(watchList, item) {
  var caption = item.caption;
  var groupCaption = item.groupCaption;
  var listCaption = item.listCaption;
  var config = item.config;
  //, {zhConfig} = config
  //, { title, subtitle, columnName, dataColumn, id, fromDate, seriaColumnNames } = zhConfig
  var toGroup = _fnFindGroup(watchList, groupCaption);
  var toList = _fnFindList(toGroup, listCaption);
  var items = toList.items;

  if (_fnCheckIsInArraySameCaption(items, caption)) {
    return _fResultItemExisted(caption, listCaption);
  }
  if (items) {
    toList.items.push(config);
    /*
    toList.items.push({
       title, subtitle, caption, columnName, dataColumn, id, fromDate, seriaColumnNames
    });
    */
  } else {
    toList.items = [config];
    /*
    toList.items = [{
      title, subtitle, caption, columnName, dataColumn, id, fromDate, seriaColumnNames
    }];
    */
  }

  return { isDone: true };
};
var _fnRemoveItem = function _fnRemoveItem(watchList, _ref) {
  var groupCaption = _ref.groupCaption;
  var listCaption = _ref.listCaption;
  var caption = _ref.caption;

  var groupFrom = _fnFindGroup(watchList, groupCaption),
      listFrom = _fnFindList(groupFrom, listCaption);
  listFrom.items = _fnFilter(listFrom.items, caption);
};

var _fnAddGroup = function _fnAddGroup(watchList, _ref2) {
  var caption = _ref2.caption;

  var groups = watchList.groups;
  if (_fnCheckIsInArraySameCaption(groups, caption)) {
    return _fResultGroupExisted(caption);
  }
  var _captionObj = caption ? { caption: caption } : { caption: "Default" };
  //watchList.groups = _fnGetArrayWithObj(groups, WatchDefault.fDefaultGroup({caption}));
  watchList.groups = _fnGetArrayWithObj(groups, _captionObj);
  return { isDone: true };
};
var _fnRenameGroup = function _fnRenameGroup(watchList, _ref3) {
  var captionFrom = _ref3.captionFrom;
  var captionTo = _ref3.captionTo;

  var groups = watchList.groups;
  var groupIndex = _fnFindIndex(groups, captionFrom);
  if (groupIndex === -1) {
    return _fResultNotFound('group', captionFrom);
  }
  if (_fnCheckIsInArraySameCaption(groups, captionTo)) {
    return _fResultGroupExisted(captionTo);
  }
  watchList.groups = _fnGetArrayWithRename(groups, groupIndex, captionTo);
  return { isDone: true };
};
var _fnDeleteGroup = function _fnDeleteGroup(watchList, _ref4) {
  var caption = _ref4.caption;

  watchList.groups = _fnFilter(watchList.groups, caption);
  return { isDone: true };
};

var _fnCreateList = function _fnCreateList(watchList, _ref5) {
  var captionGroup = _ref5.captionGroup;
  var captionList = _ref5.captionList;

  var groupTo = _fnFindGroup(watchList, captionGroup);
  if (!groupTo) {
    return _fResultNotFound('group', captionGroup);
  }
  var lists = groupTo.lists;
  if (_fnCheckIsInArraySameCaption(lists, captionList)) {
    return _fResultListExisted(captionList, captionGroup);
  }
  groupTo.lists = _fnGetArrayWithObj(lists, { caption: captionList });
  return { isDone: true };
};

var _fnRenameList = function _fnRenameList(watchList, _ref6) {
  var captionGroup = _ref6.captionGroup;
  var captionListFrom = _ref6.captionListFrom;
  var captionListTo = _ref6.captionListTo;

  var groupIn = _fnFindGroup(watchList, captionGroup);
  if (!groupIn) {
    return _fResultNotFound('group', captionGroup);
  }
  var lists = groupIn.lists;
  var listIndex = _fnFindIndex(lists, captionListFrom);
  if (listIndex === -1) {
    return _fResultNotFound('list', captionListFrom);
  }
  if (_fnCheckIsInArraySameCaption(lists, captionListTo)) {
    return _fResultListExisted(captionListTo, captionGroup);
  }
  groupIn.lists = _fnGetArrayWithRename(lists, listIndex, captionListTo);
  return { isDone: true };
};

var _fnDeleteList = function _fnDeleteList(watchList, _ref7) {
  var captionGroup = _ref7.captionGroup;
  var captionList = _ref7.captionList;

  var groupFrom = _fnFindGroup(watchList, captionGroup);
  if (!groupFrom) {
    return _fResultNotFound('group', captionGroup);
  }
  groupFrom.lists = _fnFilter(groupFrom.lists, captionList);
  return { isDone: true };
};

var _fnDragDropItem = function _fnDragDropItem(watchList, _ref8) {
  var dragId = _ref8.dragId;
  var dropId = _ref8.dropId;

  var dragArr = dragId.split(';'),
      dragGroup = _fnFindGroup(watchList, dragArr[0]),
      dragList = _fnFindList(dragGroup, dragArr[1]),
      dragIndex = _fnFindIndex(dragList.items, dragArr[2]),
      dragItem = dragList.items[dragIndex];

  var dropArr = dropId.split(';'),
      dropGroup = _fnFindGroup(watchList, dropArr[0]),
      dropList = _fnFindList(dropGroup, dropArr[1]),
      dropIndex = dropArr[2] ? _fnFindIndex(dropList.items, dropArr[2]) : 0;

  if (dragList.caption !== dropList.caption && _fnCheckIsInArraySameCaption(dropList.items, dragArr[3])) {
    return {
      isDone: false,
      alertItemId: dropArr[1] + ':' + dragArr[2],
      alertCaption: _Msg2.default.Alert.DRAG_DROP_ITEM.caption,
      alertDescr: _Msg2.default.Alert.DRAG_DROP_ITEM.descr
    };
  }

  dragList.items = _fnFilter(dragList.items, dragArr[2]);
  dropList.items = _Im2.default.insertItemInArray(dragItem, dropIndex, dropList.items);

  return { isDone: true };
};

var _fnDragDropList = function _fnDragDropList(watchList, _ref9) {
  var dragId = _ref9.dragId;
  var dropId = _ref9.dropId;

  var _dragId$split = dragId.split(';');

  var _dragId$split2 = _slicedToArray(_dragId$split, 2);

  var dragGroupCaption = _dragId$split2[0];
  var dragListCaption = _dragId$split2[1];
  var dragGroup = _fnFindGroup(watchList, dragGroupCaption);
  var dragList = _fnFindList(dragGroup, dragListCaption);
  var _dropId$split = dropId.split(';');

  var _dropId$split2 = _slicedToArray(_dropId$split, 2);

  var dropGroupCaption = _dropId$split2[0];
  var dropListCaption = _dropId$split2[1];
  var dropGroup = _fnFindGroup(watchList, dropGroupCaption);
  var dropIndex = dropListCaption ? _fnFindIndex(dropGroup.lists, dropListCaption) : 0;

  if (dragGroup.caption !== dropGroup.caption && _fnCheckIsInArraySameCaption(dropGroup.lists, dragListCaption)) {
    return {
      isDone: false,
      alertItemId: dropGroupCaption + ':' + dragListCaption,
      alertCaption: _Msg2.default.Alert.DRAG_DROP_LIST.caption,
      alertDescr: _Msg2.default.Alert.DRAG_DROP_LIST.descr
    };
  }

  dragGroup.lists = _fnFilter(dragGroup.lists, dragListCaption);
  dropGroup.lists = _Im2.default.insertItemInArray(dragList, dropIndex, dropGroup.lists);

  return { isDone: true };
};

var _fnDragDropGroup = function _fnDragDropGroup(watchList, _ref10) {
  var dragId = _ref10.dragId;
  var dropId = _ref10.dropId;

  var _dragId$split3 = dragId.split(';');

  var _dragId$split4 = _slicedToArray(_dragId$split3, 1);

  var dragGroupCaption = _dragId$split4[0];
  var dragGroup = _fnFindGroup(watchList, dragGroupCaption);

  var _dropId$split3 = dropId.split(';');

  var _dropId$split4 = _slicedToArray(_dropId$split3, 1);

  var dropGroupCaption = _dropId$split4[0];
  var dropIndex = dropGroupCaption ? _fnFindIndex(watchList.groups, dropGroupCaption) : 0;

  watchList.groups = _fnFilter(watchList.groups, dragGroupCaption);
  watchList.groups = _Im2.default.insertItemInArray(dragGroup, dropIndex, watchList.groups);

  return { isDone: true };
};

var WatchListSlice = {
  watchList: _WatchDefault2.default,
  isWatchEdited: false,
  //watchList : null,
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
    var group = _fnFindGroup(this.watchList, groupCaption);
    if (!group) {
      return [];
    }
    return group.lists;
  },
  onAddItem: function onAddItem(item) {
    this._onEditWatch(_fnAddItem(this.watchList, item), _WatchActions.WatchActionTypes.ADD_ITEM);
  },
  onRemoveItem: function onRemoveItem(option) {
    _fnRemoveItem(this.watchList, option);
    this.isWatchEdited = true;
    this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
  },
  onDragDropItem: function onDragDropItem(option) {
    var result = _fnDragDropItem(this.watchList, option);
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropList: function onDragDropList(option) {
    var result = _fnDragDropList(this.watchList, option);
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onDragDropGroup: function onDragDropGroup(option) {
    var result = _fnDragDropGroup(this.watchList, option);
    if (result.isDone) {
      this.isWatchEdited = true;
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER, this.watchList);
    } else {
      this.showAlertDialog(result);
    }
  },
  onSaveWatch: function onSaveWatch() {
    var _this2 = this;

    if (this.isWatchEdited) {
      _localforage2.default.setItem(STORAGE_KEY, this.watchList).then(function () {
        _this2.isWatchEdited = false;
        //_fnOpenInfoDialog(this, Msg.WATCH_SAVED)
        _this2.onShowModalDialog(_Type.ModalDialog.INFO, {
          caption: DIALOG_CAPTION,
          descr: _Msg2.default.WATCH_SAVED
        });
        console.log(_Msg2.default.WATCH_SAVED);
      }).catch(function (error) {
        console.log(error);
      });
    } else {
      this.onShowModalDialog(_Type.ModalDialog.INFO, {
        caption: DIALOG_CAPTION,
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
    this._onEditWatch(_fnAddGroup(this.watchList, option), _WatchActions.WatchActionTypes.ADD_GROUP);
  },
  onRenameGroup: function onRenameGroup(option) {
    this._onEditWatch(_fnRenameGroup(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_GROUP);
  },
  onDeleteGroup: function onDeleteGroup(option) {
    this._onEditWatch(_fnDeleteGroup(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_GROUP);
  },
  onCreateList: function onCreateList(option) {
    this._onEditWatch(_fnCreateList(this.watchList, option), _WatchActions.WatchActionTypes.CREATE_LIST);
  },
  onRenameList: function onRenameList(option) {
    this._onEditWatch(_fnRenameList(this.watchList, option), _WatchActions.WatchActionTypes.RENAME_LIST);
  },
  onDeleteList: function onDeleteList(option) {
    this._onEditWatch(_fnDeleteList(this.watchList, option), _WatchActions.WatchActionTypes.DELETE_LIST);
  }
};

exports.default = WatchListSlice;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\stores\WatchListSlice.js.map