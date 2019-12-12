"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Fn = _interopRequireDefault(require("./Fn"));

var WithLogicList = {
  createList: function createList(watchList, _ref) {
    var captionGroup = _ref.captionGroup,
        captionList = _ref.captionList;

    var groupTo = _Fn["default"].findGroup(watchList, captionGroup);

    if (!groupTo) {
      return _Fn["default"].fResultNotFound('group', captionGroup);
    }

    var lists = groupTo.lists;

    if (_Fn["default"].checkIsInArraySameCaption(lists, captionList)) {
      return _Fn["default"].fResultListExisted(captionList, captionGroup);
    }

    groupTo.lists = _Fn["default"].getArrayWithObj(lists, {
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

    var groupIn = _Fn["default"].findGroup(watchList, captionGroup);

    if (!groupIn) {
      return _Fn["default"].fResultNotFound('group', captionGroup);
    }

    var lists = groupIn.lists;

    var listIndex = _Fn["default"].findIndex(lists, captionListFrom);

    if (listIndex === -1) {
      return _Fn["default"].fResultNotFound('list', captionListFrom);
    }

    if (_Fn["default"].checkIsInArraySameCaption(lists, captionListTo)) {
      return _Fn["default"].fResultListExisted(captionListTo, captionGroup);
    }

    groupIn.lists = _Fn["default"].getArrayWithRename(lists, listIndex, captionListTo);
    return {
      isDone: true
    };
  },
  deleteList: function deleteList(watchList, _ref3) {
    var captionGroup = _ref3.captionGroup,
        captionList = _ref3.captionList;

    var groupFrom = _Fn["default"].findGroup(watchList, captionGroup);

    if (!groupFrom) {
      return _Fn["default"].fResultNotFound('group', captionGroup);
    }

    groupFrom.lists = _Fn["default"].filter(groupFrom.lists, captionList);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicList;
exports["default"] = _default;
//# sourceMappingURL=WithLogicList.js.map