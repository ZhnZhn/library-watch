"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var ArrayUtil = {
  findIndexByProp: function findIndexByProp(propItem, arr, value) {
    return arr.findIndex(function (item, index) {
      return item[propItem] === value;
    });
  },
  checkSameByProp: function checkSameByProp(propItem, arr, value) {
    var index = arr ? arr.findIndex(function (item, i) {
      return item[propItem] === value;
    }) : -1;

    if (index === -1) {
      return false;
    } else {
      return true;
    }
  }
};
var _default = ArrayUtil;
exports["default"] = _default;
//# sourceMappingURL=ArrayUtil.js.map