'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ComponentActions = require('../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ChartActions = require('../flux/actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnClick = function _fnClick(dialogType, browserType) {
  return _ComponentActions2.default.showDialog.bind(null, dialogType, browserType);
};

var _fnBadgeOpen = function _fnBadgeOpen(dialogType, browserType) {
  return _ChartActions2.default.showChart.bind(null, dialogType, browserType);
};

var _fnBadgeClose = function _fnBadgeClose(chartType) {
  return _ComponentActions2.default.closeChartContainer2.bind(null, chartType);
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
        //onBadgeClick: _fnBadgeClick(item.id, browserType),
        //onBadgeClose : _fnBadgeClose(item.id)
        onBadgeOpen: _fnBadgeOpen(item.id, browserType),
        onBadgeClose: _fnBadgeClose(item.id)
      };
    });
    return {
      caption: menuPart.caption,
      items: items
    };
  });
};

var BrowserMenu = {
  createMenu: fnCreateMenu
};

exports.default = BrowserMenu;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\constants\BrowserMenu.js.map