'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fn = require('./Fn');

var _Fn2 = _interopRequireDefault(_Fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithLogicList = {
  createList: function createList(watchList, _ref) {
    var captionGroup = _ref.captionGroup;
    var captionList = _ref.captionList;

    var groupTo = _Fn2.default.findGroup(watchList, captionGroup);

    if (!groupTo) {
      return _Fn2.default.fResultNotFound('group', captionGroup);
    }
    var lists = groupTo.lists;
    if (_Fn2.default.checkIsInArraySameCaption(lists, captionList)) {
      return _Fn2.default.fResultListExisted(captionList, captionGroup);
    }

    groupTo.lists = _Fn2.default.getArrayWithObj(lists, { caption: captionList });
    return { isDone: true };
  },
  renameList: function renameList(watchList, _ref2) {
    var captionGroup = _ref2.captionGroup;
    var captionListFrom = _ref2.captionListFrom;
    var captionListTo = _ref2.captionListTo;

    var groupIn = _Fn2.default.findGroup(watchList, captionGroup);

    if (!groupIn) {
      return _Fn2.default.fResultNotFound('group', captionGroup);
    }
    var lists = groupIn.lists;
    var listIndex = _Fn2.default.findIndex(lists, captionListFrom);
    if (listIndex === -1) {
      return _Fn2.default.fResultNotFound('list', captionListFrom);
    }
    if (_Fn2.default.checkIsInArraySameCaption(lists, captionListTo)) {
      return _Fn2.default.fResultListExisted(captionListTo, captionGroup);
    }

    groupIn.lists = _Fn2.default.getArrayWithRename(lists, listIndex, captionListTo);
    return { isDone: true };
  },
  deleteList: function deleteList(watchList, _ref3) {
    var captionGroup = _ref3.captionGroup;
    var captionList = _ref3.captionList;

    var groupFrom = _Fn2.default.findGroup(watchList, captionGroup);

    if (!groupFrom) {
      return _Fn2.default.fResultNotFound('group', captionGroup);
    }

    groupFrom.lists = _Fn2.default.filter(groupFrom.lists, captionList);
    return { isDone: true };
  }
};

exports.default = WithLogicList;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\watch-list\WithLogicList.js.map