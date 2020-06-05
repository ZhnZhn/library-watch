"use strict";

exports.__esModule = true;
exports["default"] = void 0;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _isArray = Array.isArray;

var findItem = function findItem(menu, chartType) {
  if (!_isArray(menu)) {
    return;
  }

  for (var _iterator = _createForOfIteratorHelperLoose(menu), _step; !(_step = _iterator()).done;) {
    var topics = _step.value;
    var items = topics.items;

    if (_isArray(items)) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(items), _step2; !(_step2 = _iterator2()).done;) {
        var item = _step2.value;

        if (item.id === chartType) {
          return item;
        }
      }
    }
  }
};

var _default = findItem;
exports["default"] = _default;
//# sourceMappingURL=findItem.js.map