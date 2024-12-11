"use strict";

exports.__esModule = true;
exports.default = void 0;
const TransformFn = {
  fromLevel3(data) {
    const caption = "caption",
      level1 = "groups",
      level2 = "lists",
      level3 = "items",
      _options = [];
    for (let group of data[level1] || []) {
      for (let list of group[level2] || []) {
        for (let item of list[level3] || []) {
          item.topic = `${group[caption]}/${list[caption]}`;
          _options.push(item);
        }
      }
    }
    return _options;
  }
};
var _default = exports.default = TransformFn;
//# sourceMappingURL=TransformFn.js.map