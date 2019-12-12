"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ComponentActions = _interopRequireDefault(require("../flux/actions/ComponentActions"));

var _ChartActions = _interopRequireDefault(require("../flux/actions/ChartActions"));

var _fnClick = function _fnClick(dialogType, browserType) {
  return _ComponentActions["default"].showDialog.bind(null, dialogType, browserType);
};

var _fnBadgeOpen = function _fnBadgeOpen(dialogType, browserType) {
  return _ChartActions["default"].showChart.bind(null, dialogType, browserType);
};

var _fnBadgeClose = function _fnBadgeClose(chartType) {
  return _ComponentActions["default"].closeChartContainer2.bind(null, chartType);
};

var fnCreateMenu = function fnCreateMenu(menu, data, browserType) {
  return menu.map(function (menuPart) {
    var items = menuPart.items.map(function (item, index) {
      return {
        id: item.id,
        title: data[item.id].menuTitle,
        counter: 0,
        isOpen: false,
        onClick: _fnClick(item.id, browserType),
        onBadgeOpen: _fnBadgeOpen(item.id, browserType),
        onBadgeClose: _fnBadgeClose(item.id)
      };
    });
    return {
      caption: menuPart.caption,
      isInitClose: menuPart.isInitClose,
      items: items
    };
  });
};

var BrowserMenu = {
  createMenu: fnCreateMenu
};
var _default = BrowserMenu;
exports["default"] = _default;
//# sourceMappingURL=BrowserMenu.js.map