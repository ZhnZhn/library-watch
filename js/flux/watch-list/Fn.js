"use strict";

exports.__esModule = true;
exports.insertItemInArray = exports.getArrayWithRename = exports.getArrayWithObj = exports.findList = exports.findIndex = exports.findGroup = exports.filter = exports.fResultNotFound = exports.fResultListExisted = exports.fResultItemExisted = exports.fResultGroupExisted = exports.fDragDropListExisted = exports.fDragDropItemExisted = exports.checkIsInArraySameCaption = void 0;
var _Msg = require("../../constants/Msg");
var _imArrFn = require("../../utils/imArrFn");
var _objFn = require("../../utils/objFn");
var _arrFn = require("../../utils/arrFn");
const fResultNotFound = (itemType, name) => ({
  isDone: false,
  message: (0, _Msg.MSG_NOT_FOUND_ITEM)(itemType, name)
});
exports.fResultNotFound = fResultNotFound;
const fResultGroupExisted = caption => ({
  isDone: false,
  message: (0, _Msg.MSG_GROUP_EXISTED)(caption)
});
exports.fResultGroupExisted = fResultGroupExisted;
const fResultListExisted = (captionList, captionGroup) => ({
  isDone: false,
  message: (0, _Msg.MSG_LIST_EXISTED)(captionList, captionGroup)
});
exports.fResultListExisted = fResultListExisted;
const fResultItemExisted = (caption, captionList) => ({
  isDone: false,
  message: (0, _Msg.MSG_ITEM_EXISTED)(caption, captionList)
});

/* for DragDrop */
exports.fResultItemExisted = fResultItemExisted;
const fDragDropItemExisted = (dropId, dragId) => ({
  isDone: false,
  alertItemId: `${dropId}:${dragId}`,
  alertCaption: _Msg.ALERT_DRAG_DROP_ITEM.caption,
  alertDescr: _Msg.ALERT_DRAG_DROP_ITEM.descr
});
exports.fDragDropItemExisted = fDragDropItemExisted;
const fDragDropListExisted = (dropGroupCaption, dragListCaption) => ({
  isDone: false,
  alertItemId: `${dropGroupCaption}:${dragListCaption}`,
  alertCaption: _Msg.ALERT_DRAG_DROP_LIST.caption,
  alertDescr: _Msg.ALERT_DRAG_DROP_LIST.descr
});
/* for DragDrop */
exports.fDragDropListExisted = fDragDropListExisted;
const filter = exports.filter = _imArrFn.imArrFilterByProp.bind(null, 'caption');
const getArrayWithObj = exports.getArrayWithObj = _imArrFn.imArrPush;
const getArrayWithRename = (arr, index, caption) => [...arr.slice(0, index), {
  ...arr[index],
  caption
}, ...arr.slice(index + 1)];

/* for DragDrop */
exports.getArrayWithRename = getArrayWithRename;
const insertItemInArray = exports.insertItemInArray = _imArrFn.imArrInsertItem;
/* for DragDrop */

const findGroup = exports.findGroup = _objFn.findInPropArrayByPropItem.bind(null, 'groups', 'caption');
const findList = exports.findList = _objFn.findInPropArrayByPropItem.bind(null, 'lists', 'caption');
const findIndex = exports.findIndex = _arrFn.findByPropNameInArrIndex.bind(null, 'caption');
const checkIsInArraySameCaption = exports.checkIsInArraySameCaption = _arrFn.isInArrByPropName.bind(null, 'caption');
//# sourceMappingURL=Fn.js.map