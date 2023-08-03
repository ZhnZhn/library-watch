"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentActions = exports.CAT_CLOSE_COMP_ITEM_LIST = exports.CAT_CLOSE_CHART_CONTAINER = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
const CAT_CLOSE_CHART_CONTAINER = 'closeChartContainer';
exports.CAT_CLOSE_CHART_CONTAINER = CAT_CLOSE_CHART_CONTAINER;
const CAT_CLOSE_COMP_ITEM_LIST = 'closeCompItemList';
exports.CAT_CLOSE_COMP_ITEM_LIST = CAT_CLOSE_COMP_ITEM_LIST;
const _ComponentActions = _refluxCore.default.createActions({
  [CAT_CLOSE_CHART_CONTAINER]: {},
  [CAT_CLOSE_COMP_ITEM_LIST]: {}
});
const ComponentActions = _ComponentActions;
exports.ComponentActions = ComponentActions;
//# sourceMappingURL=ComponentActions.js.map