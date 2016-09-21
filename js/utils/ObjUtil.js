"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ObjUtil = {
  findInPropArrayByPropItem: function findInPropArrayByPropItem(propArr, propItem, obj, value) {
    return obj[propArr].find(function (item, index) {
      return item[propItem] === value;
    });
  }
};

exports.default = ObjUtil;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\ObjUtil.js.map