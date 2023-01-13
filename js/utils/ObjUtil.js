"use strict";

exports.__esModule = true;
exports.findInPropArrayByPropItem = void 0;
var findInPropArrayByPropItem = function findInPropArrayByPropItem(propArr, propItem, obj, value) {
  return obj[propArr].find(function (item, index) {
    return item[propItem] === value;
  });
};
exports.findInPropArrayByPropItem = findInPropArrayByPropItem;
//# sourceMappingURL=ObjUtil.js.map