"use strict";

exports.__esModule = true;
exports.deleteItem = exports.addItem = void 0;

var _Fn = require("./Fn");

var addItem = function addItem(watchList, item) {
  var groupCaption = item.groupCaption,
      listCaption = item.listCaption,
      caption = item.caption,
      config = item.config,
      toGroup = (0, _Fn.findGroup)(watchList, groupCaption),
      toList = (0, _Fn.findList)(toGroup, listCaption),
      items = toList.items;

  if ((0, _Fn.checkIsInArraySameCaption)(items, caption)) {
    return (0, _Fn.fResultItemExisted)(caption, listCaption);
  }

  if (items) {
    toList.items.push(config);
  } else {
    toList.items = [config];
  }

  return {
    isDone: true
  };
};

exports.addItem = addItem;

var deleteItem = function deleteItem(watchList, _ref) {
  var groupCaption = _ref.groupCaption,
      listCaption = _ref.listCaption,
      caption = _ref.caption;
  var groupFrom = (0, _Fn.findGroup)(watchList, groupCaption),
      listFrom = (0, _Fn.findList)(groupFrom, listCaption);
  listFrom.items = (0, _Fn.filter)(listFrom.items, caption);
};

exports.deleteItem = deleteItem;
//# sourceMappingURL=ItemFn.js.map