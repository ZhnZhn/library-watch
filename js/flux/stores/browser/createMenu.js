"use strict";

exports.__esModule = true;
exports.default = void 0;
var _storeApi = require("../../storeApi");
var _compStore = require("../../compStore");
var _itemStore = require("../../itemStore");
const createMenu = (menu, data, browserType) => menu.map(_ref => {
  let {
    caption,
    isInitClose,
    items
  } = _ref;
  return {
    caption,
    isInitClose,
    items: items.map(_ref2 => {
      let {
        id
      } = _ref2;
      return {
        id,
        title: data[id].menuTitle,
        atomCounter: (0, _storeApi.atom)({
          v: 0,
          is: false
        }),
        onClick: _compStore.showDialog.bind(null, id, browserType),
        onOpen: _itemStore.showChart.bind(null, id, browserType),
        onClose: _itemStore.closeCompItemList.bind(null, id)
      };
    })
  };
});
var _default = exports.default = createMenu;
//# sourceMappingURL=createMenu.js.map