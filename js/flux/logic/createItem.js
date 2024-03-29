"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../components/uiApi");
var _RouterItem = _interopRequireDefault(require("../../components/factories/RouterItem"));
var _compStore = require("../compStore");
var _itemStore = require("../itemStore");
const createItem = (option, json, parentProps) => {
  const {
      requestType,
      chartType,
      key
    } = option,
    _fnFactory = _RouterItem.default[requestType] || _RouterItem.default.DEFAULT;
  return _fnFactory({
    createElement: _uiApi.createElement,
    option,
    json,
    parentProps,
    onMoveToTop: _itemStore.moveToTop.bind(null, chartType, key),
    onCloseItem: _itemStore.closeChart,
    onWatchItem: _compStore.showAddItem
  });
};
var _default = createItem;
exports.default = _default;
//# sourceMappingURL=createItem.js.map