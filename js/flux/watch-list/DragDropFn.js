"use strict";

exports.__esModule = true;
exports.dragDropList = exports.dragDropItem = exports.dragDropGroup = void 0;
var _Fn = require("./Fn");
const dragDropItem = (watchList, _ref) => {
  let {
    dragId,
    dropId
  } = _ref;
  const dragArr = dragId.split(';'),
    dragGroup = (0, _Fn.findGroup)(watchList, dragArr[0]),
    dragList = (0, _Fn.findList)(dragGroup, dragArr[1]),
    dragIndex = (0, _Fn.findIndex)(dragList.items, dragArr[2]),
    dragItem = dragList.items[dragIndex],
    dropArr = dropId.split(';'),
    dropGroup = (0, _Fn.findGroup)(watchList, dropArr[0]),
    dropList = (0, _Fn.findList)(dropGroup, dropArr[1]),
    dropIndex = dropArr[2] ? (0, _Fn.findIndex)(dropList.items, dropArr[2]) : 0;
  if (dragList.caption !== dropList.caption && (0, _Fn.checkIsInArraySameCaption)(dropList.items, dragArr[3])) {
    return (0, _Fn.fDragDropItemExisted)(dropArr[1], dragArr[2]);
  }
  dragList.items = (0, _Fn.filter)(dragList.items, dragArr[2]);
  dropList.items = (0, _Fn.insertItemInArray)(dragItem, dropIndex, dropList.items);
  return {
    isDone: true
  };
};
exports.dragDropItem = dragDropItem;
const dragDropList = (watchList, _ref2) => {
  let {
    dragId,
    dropId
  } = _ref2;
  const [dragGroupCaption, dragListCaption] = dragId.split(';'),
    dragGroup = (0, _Fn.findGroup)(watchList, dragGroupCaption),
    dragList = (0, _Fn.findList)(dragGroup, dragListCaption),
    [dropGroupCaption, dropListCaption] = dropId.split(';'),
    dropGroup = (0, _Fn.findGroup)(watchList, dropGroupCaption),
    dropIndex = dropListCaption ? (0, _Fn.findIndex)(dropGroup.lists, dropListCaption) : 0;
  if (dragGroup.caption !== dropGroup.caption && (0, _Fn.checkIsInArraySameCaption)(dropGroup.lists, dragListCaption)) {
    return (0, _Fn.fDragDropListExisted)(dropGroupCaption, dragListCaption);
  }
  dragGroup.lists = (0, _Fn.filter)(dragGroup.lists, dragListCaption);
  dropGroup.lists = (0, _Fn.insertItemInArray)(dragList, dropIndex, dropGroup.lists);
  return {
    isDone: true
  };
};
exports.dragDropList = dragDropList;
const dragDropGroup = (watchList, _ref3) => {
  let {
    dragId,
    dropId
  } = _ref3;
  const [dragGroupCaption] = dragId.split(';'),
    dragGroup = (0, _Fn.findGroup)(watchList, dragGroupCaption),
    [dropGroupCaption] = dropId.split(';'),
    dropIndex = dropGroupCaption ? (0, _Fn.findIndex)(watchList.groups, dropGroupCaption) : 0;
  watchList.groups = (0, _Fn.filter)(watchList.groups, dragGroupCaption);
  watchList.groups = (0, _Fn.insertItemInArray)(dragGroup, dropIndex, watchList.groups);
  return {
    isDone: true
  };
};
exports.dragDropGroup = dragDropGroup;
//# sourceMappingURL=DragDropFn.js.map