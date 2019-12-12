"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var ObjUtil = {
  findInPropArrayByPropItem: function findInPropArrayByPropItem(propArr, propItem, obj, value) {
    return obj[propArr].find(function (item, index) {
      return item[propItem] === value;
    });
  }
};
var _default = ObjUtil;
exports["default"] = _default;
//# sourceMappingURL=ObjUtil.js.map