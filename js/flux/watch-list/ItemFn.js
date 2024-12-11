"use strict";

exports.__esModule = true;
exports.deleteItem = exports.addItem = void 0;
var _Fn = require("./Fn");
const addItem = (watchList, item) => {
  const {
      groupCaption,
      listCaption,
      caption,
      config
    } = item,
    toGroup = (0, _Fn.findGroup)(watchList, groupCaption),
    toList = (0, _Fn.findList)(toGroup, listCaption),
    {
      items
    } = toList;
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
const deleteItem = (watchList, _ref) => {
  let {
    groupCaption,
    listCaption,
    caption
  } = _ref;
  const groupFrom = (0, _Fn.findGroup)(watchList, groupCaption),
    listFrom = (0, _Fn.findList)(groupFrom, listCaption);
  listFrom.items = (0, _Fn.filter)(listFrom.items, caption);
};
exports.deleteItem = deleteItem;
//# sourceMappingURL=ItemFn.js.map