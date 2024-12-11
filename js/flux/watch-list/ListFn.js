"use strict";

exports.__esModule = true;
exports.renameList = exports.deleteList = exports.addList = void 0;
var _Fn = require("./Fn");
const addList = (watchList, _ref) => {
  let {
    captionGroup,
    captionList
  } = _ref;
  const groupTo = (0, _Fn.findGroup)(watchList, captionGroup);
  if (!groupTo) {
    return (0, _Fn.fResultNotFound)('group', captionGroup);
  }
  const {
    lists
  } = groupTo;
  if ((0, _Fn.checkIsInArraySameCaption)(lists, captionList)) {
    return (0, _Fn.fResultListExisted)(captionList, captionGroup);
  }
  groupTo.lists = (0, _Fn.getArrayWithObj)(lists, {
    caption: captionList
  });
  return {
    isDone: true
  };
};
exports.addList = addList;
const renameList = (watchList, _ref2) => {
  let {
    captionGroup,
    captionListFrom,
    captionListTo
  } = _ref2;
  const groupIn = (0, _Fn.findGroup)(watchList, captionGroup);
  if (!groupIn) {
    return (0, _Fn.fResultNotFound)('group', captionGroup);
  }
  const {
    lists
  } = groupIn;
  const listIndex = (0, _Fn.findIndex)(lists, captionListFrom);
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
};
exports.renameList = renameList;
const deleteList = (watchList, _ref3) => {
  let {
    captionGroup,
    captionList
  } = _ref3;
  const groupFrom = (0, _Fn.findGroup)(watchList, captionGroup);
  if (!groupFrom) {
    return (0, _Fn.fResultNotFound)('group', captionGroup);
  }
  groupFrom.lists = (0, _Fn.filter)(groupFrom.lists, captionList);
  return {
    isDone: true
  };
};
exports.deleteList = deleteList;
//# sourceMappingURL=ListFn.js.map