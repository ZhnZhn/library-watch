"use strict";

exports.__esModule = true;
exports.renameGroup = exports.deleteGroup = exports.addGroup = void 0;

var _Fn = require("./Fn");

var addGroup = function addGroup(watchList, _ref) {
  var caption = _ref.caption;
  var groups = watchList.groups;

  if ((0, _Fn.checkIsInArraySameCaption)(groups, caption)) {
    return (0, _Fn.fResultGroupExisted)(caption);
  }

  var _captionObj = caption ? {
    caption: caption
  } : {
    caption: "Default"
  };

  watchList.groups = (0, _Fn.getArrayWithObj)(groups, _captionObj);
  return {
    isDone: true
  };
};

exports.addGroup = addGroup;

var renameGroup = function renameGroup(watchList, _ref2) {
  var captionFrom = _ref2.captionFrom,
      captionTo = _ref2.captionTo;
  var groups = watchList.groups,
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

var deleteGroup = function deleteGroup(watchList, _ref3) {
  var caption = _ref3.caption;
  watchList.groups = (0, _Fn.filter)(watchList.groups, caption);
  return {
    isDone: true
  };
};

exports.deleteGroup = deleteGroup;
//# sourceMappingURL=GroupFn.js.map