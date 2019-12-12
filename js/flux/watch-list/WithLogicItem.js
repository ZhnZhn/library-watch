"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Fn = _interopRequireDefault(require("./Fn"));

var WithLogicItem = {
  addItem: function addItem(watchList, item) {
    var groupCaption = item.groupCaption,
        listCaption = item.listCaption,
        caption = item.caption,
        config = item.config,
        toGroup = _Fn["default"].findGroup(watchList, groupCaption),
        toList = _Fn["default"].findList(toGroup, listCaption),
        items = toList.items;

    if (_Fn["default"].checkIsInArraySameCaption(items, caption)) {
      return _Fn["default"].fResultItemExisted(caption, listCaption);
    }

    if (items) {
      toList.items.push(config);
    } else {
      toList.items = [config];
    }

    return {
      isDone: true
    };
  },
  removeItem: function removeItem(watchList, _ref) {
    var groupCaption = _ref.groupCaption,
        listCaption = _ref.listCaption,
        caption = _ref.caption;

    var groupFrom = _Fn["default"].findGroup(watchList, groupCaption),
        listFrom = _Fn["default"].findList(groupFrom, listCaption);

    listFrom.items = _Fn["default"].filter(listFrom.items, caption);
  }
};
var _default = WithLogicItem;
exports["default"] = _default;
//# sourceMappingURL=WithLogicItem.js.map