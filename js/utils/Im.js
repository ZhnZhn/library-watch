"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Im = {
  filterArray: function filterArray(prop, arr, value) {
    return arr.filter(function (obj, index) {
      return obj[prop] !== value;
    });
  },
  insertItemInArray: function insertItemInArray(item, index) {
    var arr = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    if (index !== 0) {
      return [].concat(_toConsumableArray(arr.slice(0, index)), [Object.assign({}, item)], _toConsumableArray(arr.slice(index)));
    } else {
      return [Object.assign({}, item)].concat(_toConsumableArray(arr));
    }
  }
};

exports.default = Im;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\utils\Im.js.map