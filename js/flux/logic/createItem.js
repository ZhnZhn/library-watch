"use strict";

exports.__esModule = true;
exports.default = void 0;
var _RouterItem = require("../../components/factories/RouterItem");
var _bindTo = require("../../utils/bindTo");
var _compStore = require("../compStore");
var _itemStore = require("../itemStore");
const createItem = (option, json, parentProps) => {
  const {
      requestType,
      chartType,
      browserType,
      key
    } = option,
    _crItemElement = (0, _RouterItem.getItemFactoryRoute)(requestType);
  return _crItemElement({
    option,
    json,
    parentProps,
    onMoveToTop: (0, _bindTo.bindTo)(_itemStore.moveToTop, chartType, key),
    onCloseItem: (0, _bindTo.bindTo)(_itemStore.closeChart, chartType, browserType, key),
    onWatchItem: _compStore.showAddItem
  });
};
var _default = exports.default = createItem;
//# sourceMappingURL=createItem.js.map