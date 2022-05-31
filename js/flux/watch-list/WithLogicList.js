"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Fn = require("./Fn");

var WithLogicList = {
  createList: function createList(watchList, _ref) {
    var captionGroup = _ref.captionGroup,
        captionList = _ref.captionList;
    var groupTo = (0, _Fn.findGroup)(watchList, captionGroup);

    if (!groupTo) {
      return (0, _Fn.fResultNotFound)('group', captionGroup);
    }

    var lists = groupTo.lists;

    if ((0, _Fn.checkIsInArraySameCaption)(lists, captionList)) {
      return (0, _Fn.fResultListExisted)(captionList, captionGroup);
    }

    groupTo.lists = (0, _Fn.getArrayWithObj)(lists, {
      caption: captionList
    });
    return {
      isDone: true
    };
  },
  renameList: function renameList(watchList, _ref2) {
    var captionGroup = _ref2.captionGroup,
        captionListFrom = _ref2.captionListFrom,
        captionListTo = _ref2.captionListTo;
    var groupIn = (0, _Fn.findGroup)(watchList, captionGroup);

    if (!groupIn) {
      return (0, _Fn.fResultNotFound)('group', captionGroup);
    }

    var lists = groupIn.lists;
    var listIndex = (0, _Fn.findIndex)(lists, captionListFrom);

    if (listIndex === -1) {
      return (0, _Fn.fResultNotFound)('list', captionListFrom);
    }

    if ((0, _Fn.checkIsInArraySameCaption)(lists, captionListTo)) {
      return (0, _Fn.fResultListExisted)(captionListTo, captionGroup);
    }

    groupIn.lists = (0, _Fn.getArrayWithRename)(lists, listIndex, captionListTo);
    return {
      isDone: true
    };
  },
  deleteList: function deleteList(watchList, _ref3) {
    var captionGroup = _ref3.captionGroup,
        captionList = _ref3.captionList;
    var groupFrom = (0, _Fn.findGroup)(watchList, captionGroup);

    if (!groupFrom) {
      return (0, _Fn.fResultNotFound)('group', captionGroup);
    }

    groupFrom.lists = (0, _Fn.filter)(groupFrom.lists, captionList);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicList;
exports["default"] = _default;
//# sourceMappingURL=WithLogicList.js.map