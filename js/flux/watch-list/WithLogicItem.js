'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fn = require('./Fn');

var _Fn2 = _interopRequireDefault(_Fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithLogicItem = {
  addItem: function addItem(watchList, item) {
    var groupCaption = item.groupCaption;
    var listCaption = item.listCaption;
    var caption = item.caption;
    var config = item.config;
    var toGroup = _Fn2.default.findGroup(watchList, groupCaption);
    var toList = _Fn2.default.findList(toGroup, listCaption);
    var items = toList.items;

    if (_Fn2.default.checkIsInArraySameCaption(items, caption)) {
      return _Fn2.default.fResultItemExisted(caption, listCaption);
    }

    if (items) {
      toList.items.push(config);
    } else {
      toList.items = [config];
    }

    return { isDone: true };
  },
  removeItem: function removeItem(watchList, _ref) {
    var groupCaption = _ref.groupCaption;
    var listCaption = _ref.listCaption;
    var caption = _ref.caption;

    var groupFrom = _Fn2.default.findGroup(watchList, groupCaption),
        listFrom = _Fn2.default.findList(groupFrom, listCaption);

    listFrom.items = _Fn2.default.filter(listFrom.items, caption);
  }
};

exports.default = WithLogicItem;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\watch-list\WithLogicItem.js.map