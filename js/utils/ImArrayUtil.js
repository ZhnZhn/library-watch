"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var ImArrayUtil = {
  push: function push(arr, obj) {
    return arr ? [].concat(arr, [obj]) : [obj];
  },
  filterByProp: function filterByProp(prop, arr, value) {
    return arr.filter(function (obj, index) {
      return obj[prop] !== value;
    });
  },
  insertItem: function insertItem(item, index, arr) {
    if (arr === void 0) {
      arr = [];
    }

    if (index !== 0) {
      return [].concat(arr.slice(0, index), [Object.assign({}, item)], arr.slice(index));
    } else {
      return [Object.assign({}, item)].concat(arr);
    }
  }
};
var _default = ImArrayUtil;
exports["default"] = _default;
//# sourceMappingURL=ImArrayUtil.js.map