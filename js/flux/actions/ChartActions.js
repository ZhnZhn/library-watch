'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartActionTypes = undefined;

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _RouterLoad = require('../logic/RouterLoad');

var _RouterLoad2 = _interopRequireDefault(_RouterLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChartActionTypes = exports.ChartActionTypes = {
  INIT_AND_SHOW_CHART: 'initAndShowChart',

  LOAD_STOCK: 'loadStock',
  LOAD_STOCK_COMPLETED: 'loadStockCompleted',
  LOAD_STOCK_FAILED: 'loadStockFailed',

  SHOW_CHART: 'showChart',
  CLOSE_CHART: 'closeChart'

};

var ChartActions = _reflux2.default.createActions((_Reflux$createActions = {}, _defineProperty(_Reflux$createActions, ChartActionTypes.LOAD_STOCK, {
  children: ['completed', 'failed'],
  isLoading: false,
  idLoading: undefined,
  isShouldEmit: true
  //cancelLoad : _fnCancelLoad
}), _defineProperty(_Reflux$createActions, ChartActionTypes.SHOW_CHART, {}), _defineProperty(_Reflux$createActions, ChartActionTypes.CLOSE_CHART, {}), _Reflux$createActions));

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function (chartType, browserType, option) {

  this.isLoading = true;
  this.idLoading = option.key;

  var _option$loadId = option.loadId;
  var loadId = _option$loadId === undefined ? 'LW' : _option$loadId;

  option.chartType = chartType;
  option.browserType = browserType;

  _RouterLoad2.default[loadId](option, this.completed, this.failed);
});

exports.default = ChartActions;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\flux\actions\ChartActions.js.map