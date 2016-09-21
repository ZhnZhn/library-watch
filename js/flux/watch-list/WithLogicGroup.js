'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fn = require('./Fn');

var _Fn2 = _interopRequireDefault(_Fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithLogicGroup = {
  addGroup: function addGroup(watchList, _ref) {
    var caption = _ref.caption;

    var groups = watchList.groups;

    if (_Fn2.default.checkIsInArraySameCaption(groups, caption)) {
      return _Fn2.default.fResultGroupExisted(caption);
    }

    var _captionObj = caption ? { caption: caption } : { caption: "Default" };

    watchList.groups = _Fn2.default.getArrayWithObj(groups, _captionObj);
    return { isDone: true };
  },
  renameGroup: function renameGroup(watchList, _ref2) {
    var captionFrom = _ref2.captionFrom;
    var captionTo = _ref2.captionTo;

    var groups = watchList.groups,
        groupIndex = _Fn2.default.findIndex(groups, captionFrom);

    if (groupIndex === -1) {
      return _Fn2.default.fResultNotFound('group', captionFrom);
    }
    if (_Fn2.default.checkIsInArraySameCaption(groups, captionTo)) {
      return _Fn2.default.fResultGroupExisted(captionTo);
    }

    watchList.groups = _Fn2.default.getArrayWithRename(groups, groupIndex, captionTo);
    return { isDone: true };
  },
  deleteGroup: function deleteGroup(watchList, _ref3) {
    var caption = _ref3.caption;

    watchList.groups = _Fn2.default.filter(watchList.groups, caption);
    return { isDone: true };
  }
};

exports.default = WithLogicGroup;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\watch-list\WithLogicGroup.js.map