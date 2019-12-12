"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Fn = _interopRequireDefault(require("./Fn"));

var WithLogicGroup = {
  addGroup: function addGroup(watchList, _ref) {
    var caption = _ref.caption;
    var groups = watchList.groups;

    if (_Fn["default"].checkIsInArraySameCaption(groups, caption)) {
      return _Fn["default"].fResultGroupExisted(caption);
    }

    var _captionObj = caption ? {
      caption: caption
    } : {
      caption: "Default"
    };

    watchList.groups = _Fn["default"].getArrayWithObj(groups, _captionObj);
    return {
      isDone: true
    };
  },
  renameGroup: function renameGroup(watchList, _ref2) {
    var captionFrom = _ref2.captionFrom,
        captionTo = _ref2.captionTo;

    var groups = watchList.groups,
        groupIndex = _Fn["default"].findIndex(groups, captionFrom);

    if (groupIndex === -1) {
      return _Fn["default"].fResultNotFound('group', captionFrom);
    }

    if (_Fn["default"].checkIsInArraySameCaption(groups, captionTo)) {
      return _Fn["default"].fResultGroupExisted(captionTo);
    }

    watchList.groups = _Fn["default"].getArrayWithRename(groups, groupIndex, captionTo);
    return {
      isDone: true
    };
  },
  deleteGroup: function deleteGroup(watchList, _ref3) {
    var caption = _ref3.caption;
    watchList.groups = _Fn["default"].filter(watchList.groups, caption);
    return {
      isDone: true
    };
  }
};
var _default = WithLogicGroup;
exports["default"] = _default;
//# sourceMappingURL=WithLogicGroup.js.map