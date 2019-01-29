'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _Fn = require('./Fn');

var _Fn2 = _interopRequireDefault(_Fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithLogicDragDrop = {
    dragDropItem: function dragDropItem(watchList, _ref) {
        var dragId = _ref.dragId,
            dropId = _ref.dropId;

        var dragArr = dragId.split(';'),
            dragGroup = _Fn2.default.findGroup(watchList, dragArr[0]),
            dragList = _Fn2.default.findList(dragGroup, dragArr[1]),
            dragIndex = _Fn2.default.findIndex(dragList.items, dragArr[2]),
            dragItem = dragList.items[dragIndex];

        var dropArr = dropId.split(';'),
            dropGroup = _Fn2.default.findGroup(watchList, dropArr[0]),
            dropList = _Fn2.default.findList(dropGroup, dropArr[1]),
            dropIndex = dropArr[2] ? _Fn2.default.findIndex(dropList.items, dropArr[2]) : 0;

        if (dragList.caption !== dropList.caption && _Fn2.default.checkIsInArraySameCaption(dropList.items, dragArr[3])) {
            return _Fn2.default.fDragDropItemExisted(dropArr[1], dragArr[2]);
        }

        dragList.items = _Fn2.default.filter(dragList.items, dragArr[2]);
        dropList.items = _Fn2.default.insertItemInArray(dragItem, dropIndex, dropList.items);

        return { isDone: true };
    },
    dragDropList: function dragDropList(watchList, _ref2) {
        var dragId = _ref2.dragId,
            dropId = _ref2.dropId;

        var _dragId$split = dragId.split(';'),
            _dragId$split2 = (0, _slicedToArray3.default)(_dragId$split, 2),
            dragGroupCaption = _dragId$split2[0],
            dragListCaption = _dragId$split2[1],
            dragGroup = _Fn2.default.findGroup(watchList, dragGroupCaption),
            dragList = _Fn2.default.findList(dragGroup, dragListCaption);

        var _dropId$split = dropId.split(';'),
            _dropId$split2 = (0, _slicedToArray3.default)(_dropId$split, 2),
            dropGroupCaption = _dropId$split2[0],
            dropListCaption = _dropId$split2[1],
            dropGroup = _Fn2.default.findGroup(watchList, dropGroupCaption),
            dropIndex = dropListCaption ? _Fn2.default.findIndex(dropGroup.lists, dropListCaption) : 0;

        if (dragGroup.caption !== dropGroup.caption && _Fn2.default.checkIsInArraySameCaption(dropGroup.lists, dragListCaption)) {
            return _Fn2.default.fDragDropListExisted(dropGroupCaption, dragListCaption);
        }

        dragGroup.lists = _Fn2.default.filter(dragGroup.lists, dragListCaption);
        dropGroup.lists = _Fn2.default.insertItemInArray(dragList, dropIndex, dropGroup.lists);

        return { isDone: true };
    },
    dragDropGroup: function dragDropGroup(watchList, _ref3) {
        var dragId = _ref3.dragId,
            dropId = _ref3.dropId;

        var _dragId$split3 = dragId.split(';'),
            _dragId$split4 = (0, _slicedToArray3.default)(_dragId$split3, 1),
            dragGroupCaption = _dragId$split4[0],
            dragGroup = _Fn2.default.findGroup(watchList, dragGroupCaption),
            _dropId$split3 = dropId.split(';'),
            _dropId$split4 = (0, _slicedToArray3.default)(_dropId$split3, 1),
            dropGroupCaption = _dropId$split4[0],
            dropIndex = dropGroupCaption ? _Fn2.default.findIndex(watchList.groups, dropGroupCaption) : 0;

        watchList.groups = _Fn2.default.filter(watchList.groups, dragGroupCaption);
        watchList.groups = _Fn2.default.insertItemInArray(dragGroup, dropIndex, watchList.groups);

        return { isDone: true };
    }
};

exports.default = WithLogicDragDrop;
//# sourceMappingURL=WithLogicDragDrop.js.map