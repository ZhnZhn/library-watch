"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Fn = _interopRequireDefault(require("./Fn"));

var WithLogicDragDrop = {
  dragDropItem: function dragDropItem(watchList, _ref) {
    var dragId = _ref.dragId,
        dropId = _ref.dropId;

    var dragArr = dragId.split(';'),
        dragGroup = _Fn["default"].findGroup(watchList, dragArr[0]),
        dragList = _Fn["default"].findList(dragGroup, dragArr[1]),
        dragIndex = _Fn["default"].findIndex(dragList.items, dragArr[2]),
        dragItem = dragList.items[dragIndex];

    var dropArr = dropId.split(';'),
        dropGroup = _Fn["default"].findGroup(watchList, dropArr[0]),
        dropList = _Fn["default"].findList(dropGroup, dropArr[1]),
        dropIndex = dropArr[2] ? _Fn["default"].findIndex(dropList.items, dropArr[2]) : 0;

    if (dragList.caption !== dropList.caption && _Fn["default"].checkIsInArraySameCaption(dropList.items, dragArr[3])) {
      return _Fn["default"].fDragDropItemExisted(dropArr[1], dragArr[2]);
    }

    dragList.items = _Fn["default"].filter(dragList.items, dragArr[2]);
    dropList.items = _Fn["default"].insertItemInArray(dragItem, dropIndex, dropList.items);
    return {
      isDone: true
    };
  },
  dragDropList: function dragDropList(watchList, _ref2) {
    var dragId = _ref2.dragId,
        dropId = _ref2.dropId;

    var _dragId$split = dragId.split(';'),
        dragGroupCaption = _dragId$split[0],
        dragListCaption = _dragId$split[1],
        dragGroup = _Fn["default"].findGroup(watchList, dragGroupCaption),
        dragList = _Fn["default"].findList(dragGroup, dragListCaption);

    var _dropId$split = dropId.split(';'),
        dropGroupCaption = _dropId$split[0],
        dropListCaption = _dropId$split[1],
        dropGroup = _Fn["default"].findGroup(watchList, dropGroupCaption),
        dropIndex = dropListCaption ? _Fn["default"].findIndex(dropGroup.lists, dropListCaption) : 0;

    if (dragGroup.caption !== dropGroup.caption && _Fn["default"].checkIsInArraySameCaption(dropGroup.lists, dragListCaption)) {
      return _Fn["default"].fDragDropListExisted(dropGroupCaption, dragListCaption);
    }

    dragGroup.lists = _Fn["default"].filter(dragGroup.lists, dragListCaption);
    dropGroup.lists = _Fn["default"].insertItemInArray(dragList, dropIndex, dropGroup.lists);
    return {
      isDone: true
    };
  },
  dragDropGroup: function dragDropGroup(watchList, _ref3) {
    var dragId = _ref3.dragId,
        dropId = _ref3.dropId;

    var _dragId$split2 = dragId.split(';'),
        dragGroupCaption = _dragId$split2[0],
        dragGroup = _Fn["default"].findGroup(watchList, dragGroupCaption),
        _dropId$split2 = dropId.split(';'),
        dropGroupCaption = _dropId$split2[0],
        dropIndex = dropGroupCaption ? _Fn["default"].findIndex(watchList.groups, dropGroupCaption) : 0;

    watchList.groups = _Fn["default"].filter(watchList.groups, dragGroupCaption);
    watchList.groups = _Fn["default"].insertItemInArray(dragGroup, dropIndex, watchList.groups);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicDragDrop;
exports["default"] = _default;
//# sourceMappingURL=WithLogicDragDrop.js.map