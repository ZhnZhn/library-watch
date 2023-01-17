"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.insertItemInArray = exports.getArrayWithRename = exports.getArrayWithObj = exports.findList = exports.findIndex = exports.findGroup = exports.filter = exports.fResultNotFound = exports.fResultListExisted = exports.fResultItemExisted = exports.fResultGroupExisted = exports.fDragDropListExisted = exports.fDragDropItemExisted = exports.checkIsInArraySameCaption = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _Msg = require("../../constants/Msg");
var _imArrFn = require("../../utils/imArrFn");
var _objFn = require("../../utils/objFn");
var _arrFn = require("../../utils/arrFn");
var fResultNotFound = function fResultNotFound(itemType, name) {
  return {
    isDone: false,
    message: (0, _Msg.MSG_NOT_FOUND_ITEM)(itemType, name)
  };
};
exports.fResultNotFound = fResultNotFound;
var fResultGroupExisted = function fResultGroupExisted(caption) {
  return {
    isDone: false,
    message: (0, _Msg.MSG_GROUP_EXISTED)(caption)
  };
};
exports.fResultGroupExisted = fResultGroupExisted;
var fResultListExisted = function fResultListExisted(captionList, captionGroup) {
  return {
    isDone: false,
    message: (0, _Msg.MSG_LIST_EXISTED)(captionList, captionGroup)
  };
};
exports.fResultListExisted = fResultListExisted;
var fResultItemExisted = function fResultItemExisted(caption, captionList) {
  return {
    isDone: false,
    message: (0, _Msg.MSG_ITEM_EXISTED)(caption, captionList)
  };
};

/* for DragDrop */
exports.fResultItemExisted = fResultItemExisted;
var fDragDropItemExisted = function fDragDropItemExisted(dropId, dragId) {
  return {
    isDone: false,
    alertItemId: dropId + ":" + dragId,
    alertCaption: _Msg.ALERT_DRAG_DROP_ITEM.caption,
    alertDescr: _Msg.ALERT_DRAG_DROP_ITEM.descr
  };
};
exports.fDragDropItemExisted = fDragDropItemExisted;
var fDragDropListExisted = function fDragDropListExisted(dropGroupCaption, dragListCaption) {
  return {
    isDone: false,
    alertItemId: dropGroupCaption + ":" + dragListCaption,
    alertCaption: _Msg.ALERT_DRAG_DROP_LIST.caption,
    alertDescr: _Msg.ALERT_DRAG_DROP_LIST.descr
  };
};
/* for DragDrop */
exports.fDragDropListExisted = fDragDropListExisted;
var filter = _imArrFn.imArrFilterByProp.bind(null, 'caption');
exports.filter = filter;
var getArrayWithObj = _imArrFn.imArrPush;
exports.getArrayWithObj = getArrayWithObj;
var getArrayWithRename = function getArrayWithRename(arr, index, caption) {
  return [].concat(arr.slice(0, index), [(0, _extends2["default"])({}, arr[index], {
    caption: caption
  })], arr.slice(index + 1));
};

/* for DragDrop */
exports.getArrayWithRename = getArrayWithRename;
var insertItemInArray = _imArrFn.imArrInsertItem;
/* for DragDrop */
exports.insertItemInArray = insertItemInArray;
var findGroup = _objFn.findInPropArrayByPropItem.bind(null, 'groups', 'caption');
exports.findGroup = findGroup;
var findList = _objFn.findInPropArrayByPropItem.bind(null, 'lists', 'caption');
exports.findList = findList;
var findIndex = _arrFn.findByPropNameInArrIndex.bind(null, 'caption');
exports.findIndex = findIndex;
var checkIsInArraySameCaption = _arrFn.isInArrByPropName.bind(null, 'caption');
exports.checkIsInArraySameCaption = checkIsInArraySameCaption;
//# sourceMappingURL=Fn.js.map