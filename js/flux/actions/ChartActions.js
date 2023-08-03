"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ChartActions = exports.CHAT_SHOW_CHART = exports.CHAT_REMOVE_ALL = exports.CHAT_MOVE_TO_TOP = exports.CHAT_LOAD_STOCK_FAILED = exports.CHAT_LOAD_STOCK_COMPLETED = exports.CHAT_LOAD_STOCK = exports.CHAT_INIT_AND_SHOW_CHART = exports.CHAT_CLOSE_CHART = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _RouterLoad = _interopRequireDefault(require("../logic/RouterLoad"));
var _AppStore = _interopRequireDefault(require("../stores/AppStore"));
var _compStore = require("../compStore");
const ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};
const CHAT_INIT_AND_SHOW_CHART = 'initAndShowChart';
exports.CHAT_INIT_AND_SHOW_CHART = CHAT_INIT_AND_SHOW_CHART;
const CHAT_LOAD_STOCK = 'loadStock';
exports.CHAT_LOAD_STOCK = CHAT_LOAD_STOCK;
const CHAT_LOAD_STOCK_COMPLETED = 'loadStockCompleted';
exports.CHAT_LOAD_STOCK_COMPLETED = CHAT_LOAD_STOCK_COMPLETED;
const CHAT_LOAD_STOCK_FAILED = 'loadStockFailed';
exports.CHAT_LOAD_STOCK_FAILED = CHAT_LOAD_STOCK_FAILED;
const CHAT_SHOW_CHART = 'showChart';
exports.CHAT_SHOW_CHART = CHAT_SHOW_CHART;
const CHAT_CLOSE_CHART = 'closeChart';
exports.CHAT_CLOSE_CHART = CHAT_CLOSE_CHART;
const CHAT_REMOVE_ALL = 'removeAll';
exports.CHAT_REMOVE_ALL = CHAT_REMOVE_ALL;
const CHAT_MOVE_TO_TOP = 'moveToTop';
exports.CHAT_MOVE_TO_TOP = CHAT_MOVE_TO_TOP;
const _ChartActions = _refluxCore.default.createActions({
  [CHAT_LOAD_STOCK]: {
    children: ['completed', 'failed'],
    isLoading: false,
    idLoading: void 0,
    isShouldEmit: true
    //cancelLoad : _fnCancelLoad
  },

  [CHAT_SHOW_CHART]: {},
  [CHAT_CLOSE_CHART]: {},
  [CHAT_REMOVE_ALL]: {},
  [CHAT_MOVE_TO_TOP]: {}
});
_ChartActions[CHAT_LOAD_STOCK].listen(function (chartType, browserType, option) {
  const {
    loadId = 'LW'
  } = option;
  option.chartType = chartType;
  option.browserType = browserType;
  const {
    crKey,
    loadItem
  } = _RouterLoad.default[loadId];
  const key = crKey(option);
  if (!_AppStore.default.isKeyTop(key, option)) {
    option.key = key;
    this.isLoading = true;
    this.idLoading = key;
    loadItem(option, this.completed, this.failed);
  } else {
    (0, _compStore.showAlert)(ALREADY_LOADED);
    _ChartActions.showChart(chartType, browserType);
  }
});
const ChartActions = _ChartActions;
exports.ChartActions = ChartActions;
//# sourceMappingURL=ChartActions.js.map