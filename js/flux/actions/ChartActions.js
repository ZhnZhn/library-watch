'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartActionTypes = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _RouterLoad = require('../logic/RouterLoad');

var _RouterLoad2 = _interopRequireDefault(_RouterLoad);

var _AppStore = require('../stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _ComponentActions = require('./ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALREADY_LOADED = {
  caption: 'Already loaded',
  descr: 'This item already has been loaded\nto container, moved to top.'
};

var ChartActionTypes = exports.ChartActionTypes = {
  INIT_AND_SHOW_CHART: 'initAndShowChart',

  LOAD_STOCK: 'loadStock',
  LOAD_STOCK_COMPLETED: 'loadStockCompleted',
  LOAD_STOCK_FAILED: 'loadStockFailed',

  SHOW_CHART: 'showChart',
  CLOSE_CHART: 'closeChart',

  REMOVE_ALL: 'removeAll',
  MOVE_TO_TOP: 'moveToTop'
};

var A = ChartActionTypes;

var ChartActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, A.LOAD_STOCK, {
  children: ['completed', 'failed'],
  isLoading: false,
  idLoading: undefined,
  isShouldEmit: true
  //cancelLoad : _fnCancelLoad
}), (0, _defineProperty3.default)(_Reflux$createActions, A.SHOW_CHART, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.CLOSE_CHART, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.REMOVE_ALL, {}), (0, _defineProperty3.default)(_Reflux$createActions, A.MOVE_TO_TOP, {}), _Reflux$createActions));

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function (chartType, browserType, option) {
  var _option$loadId = option.loadId,
      loadId = _option$loadId === undefined ? 'LW' : _option$loadId;

  option.chartType = chartType;
  option.browserType = browserType;

  var _RouterLoad$loadId = _RouterLoad2.default[loadId],
      crKey = _RouterLoad$loadId.crKey,
      loadItem = _RouterLoad$loadId.loadItem;

  var key = crKey(option);
  if (!_AppStore2.default.isKeyTop(key, option)) {
    option.key = key;
    this.isLoading = true;
    this.idLoading = key;
    loadItem(option, this.completed, this.failed);
  } else {
    _ComponentActions2.default.showAlert(ALREADY_LOADED);
    ChartActions.showChart(chartType, browserType);
  }
});

exports.default = ChartActions;
//# sourceMappingURL=ChartActions.js.map