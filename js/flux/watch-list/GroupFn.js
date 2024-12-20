"use strict";

exports.__esModule = true;
exports.renameGroup = exports.deleteGroup = exports.addGroup = void 0;
var _Fn = require("./Fn");
const addGroup = (watchList, _ref) => {
  let {
    caption
  } = _ref;
  const groups = watchList.groups;
  if ((0, _Fn.checkIsInArraySameCaption)(groups, caption)) {
    return (0, _Fn.fResultGroupExisted)(caption);
  }
  const _captionObj = caption ? {
    caption
  } : {
    caption: "Default"
  };
  watchList.groups = (0, _Fn.getArrayWithObj)(groups, _captionObj);
  return {
    isDone: true
  };
};
exports.addGroup = addGroup;
const renameGroup = (watchList, _ref2) => {
  let {
    captionFrom,
    captionTo
  } = _ref2;
  const groups = watchList.groups,
    groupIndex = (0, _Fn.findIndex)(groups, captionFrom);
  if (groupIndex === -1) {
    return (0, _Fn.fResultNotFound)('group', captionFrom);
  }
  if ((0, _Fn.checkIsInArraySameCaption)(groups, captionTo)) {
    return (0, _Fn.fResultGroupExisted)(captionTo);
  }
  watchList.groups = (0, _Fn.getArrayWithRename)(groups, groupIndex, captionTo);
  return {
    isDone: true
  };
};
exports.renameGroup = renameGroup;
const deleteGroup = (watchList, _ref3) => {
  let {
    caption
  } = _ref3;
  watchList.groups = (0, _Fn.filter)(watchList.groups, caption);
  return {
    isDone: true
  };
};
exports.deleteGroup = deleteGroup;
//# sourceMappingURL=GroupFn.js.map