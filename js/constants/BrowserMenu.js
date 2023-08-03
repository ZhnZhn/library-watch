"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ComponentActions = require("../flux/actions/ComponentActions");
var _ChartActions = require("../flux/actions/ChartActions");
var _compStore = require("../flux/compStore");
const _crOnClick = (dialogType, browserType) => _compStore.showDialog.bind(null, dialogType, browserType);
const _crOnBadgeOpen = (dialogType, browserType) => _ChartActions.ChartActions.showChart.bind(null, dialogType, browserType);
const _crOnBadgeClose = chartType => _ComponentActions.ComponentActions.closeCompItemList.bind(null, chartType);
const createMenu = (menu, data, browserType) => {
  return menu.map(menuPart => {
    const items = menuPart.items.map(item => ({
      id: item.id,
      title: data[item.id].menuTitle,
      counter: 0,
      isOpen: false,
      onClick: _crOnClick(item.id, browserType),
      onBadgeOpen: _crOnBadgeOpen(item.id, browserType),
      onBadgeClose: _crOnBadgeClose(item.id)
    }));
    return {
      caption: menuPart.caption,
      isInitClose: menuPart.isInitClose,
      items
    };
  });
};
const BrowserMenu = {
  createMenu
};
var _default = BrowserMenu;
exports.default = _default;
//# sourceMappingURL=BrowserMenu.js.map