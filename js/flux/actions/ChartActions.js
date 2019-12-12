"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ChartActionTypes = void 0;

var _reflux = _interopRequireDefault(require("reflux"));

var _RouterLoad = _interopRequireDefault(require("../logic/RouterLoad"));

var _AppStore = _interopRequireDefault(require("../stores/AppStore"));

var _ComponentActions = _interopRequireDefault(require("./ComponentActions"));

var _Reflux$createActions;

var ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};
var ChartActionTypes = {
  INIT_AND_SHOW_CHART: 'initAndShowChart',
  LOAD_STOCK: 'loadStock',
  LOAD_STOCK_COMPLETED: 'loadStockCompleted',
  LOAD_STOCK_FAILED: 'loadStockFailed',
  SHOW_CHART: 'showChart',
  CLOSE_CHART: 'closeChart',
  REMOVE_ALL: 'removeAll',
  MOVE_TO_TOP: 'moveToTop'
};
exports.ChartActionTypes = ChartActionTypes;
var A = ChartActionTypes;

var ChartActions = _reflux["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[A.LOAD_STOCK] = {
  children: ['completed', 'failed'],
  isLoading: false,
  idLoading: undefined,
  isShouldEmit: true //cancelLoad : _fnCancelLoad

}, _Reflux$createActions[A.SHOW_CHART] = {}, _Reflux$createActions[A.CLOSE_CHART] = {}, _Reflux$createActions[A.REMOVE_ALL] = {}, _Reflux$createActions[A.MOVE_TO_TOP] = {}, _Reflux$createActions));

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function (chartType, browserType, option) {
  var _option$loadId = option.loadId,
      loadId = _option$loadId === void 0 ? 'LW' : _option$loadId;
  option.chartType = chartType;
  option.browserType = browserType;
  var _RouterLoad$loadId = _RouterLoad["default"][loadId],
      crKey = _RouterLoad$loadId.crKey,
      loadItem = _RouterLoad$loadId.loadItem;
  var key = crKey(option);

  if (!_AppStore["default"].isKeyTop(key, option)) {
    option.key = key;
    this.isLoading = true;
    this.idLoading = key;
    loadItem(option, this.completed, this.failed);
  } else {
    _ComponentActions["default"].showAlert(ALREADY_LOADED);

    ChartActions.showChart(chartType, browserType);
  }
});
var _default = ChartActions;
exports["default"] = _default;
//# sourceMappingURL=ChartActions.js.map