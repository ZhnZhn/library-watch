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

//import Msg from '../../constants/Msg';
//import ChartStore from '../stores/ChartStore';


//import LogicUtils from '../logic/LogicUtils';

//const META = '_Meta';

var ChartActionTypes = exports.ChartActionTypes = {
  INIT_AND_SHOW_CHART: 'initAndShowChart',

  LOAD_STOCK: 'loadStock',
  LOAD_STOCK_COMPLETED: 'loadStockCompleted',
  LOAD_STOCK_FAILED: 'loadStockFailed',

  SHOW_CHART: 'showChart',
  CLOSE_CHART: 'closeChart'

};

/*
const _fnOnChangeStore = function(actionType, data){
   if (actionType === ChartActionTypes.LOAD_STOCK_COMPLETED ||
       actionType === ChartActionTypes.LOAD_STOCK_ADDED ||
       actionType === ChartActionTypes.LOAD_STOCK_FAILED )
   {
     ChartActions[ChartActionTypes.LOAD_STOCK].isLoading = false;
   }
}

const _fnCancelLoad = function(option, alertMsg, isWithFailed){
  Msg.setAlertMsg(option, alertMsg);
  this.failed(option);
  this.isShouldEmit = false;

  if (typeof option.onCancel === 'function'){
    option.onCancel();
  } else if (isWithFailed && typeof option.onFailed === 'function'){
    option.onFailed();
  }
}
*/

var ChartActions = _reflux2.default.createActions((_Reflux$createActions = {}, _defineProperty(_Reflux$createActions, ChartActionTypes.LOAD_STOCK, {
  children: ['completed', 'failed'],
  isLoading: false,
  idLoading: undefined,
  isShouldEmit: true
  //cancelLoad : _fnCancelLoad
}), _defineProperty(_Reflux$createActions, ChartActionTypes.SHOW_CHART, {}), _defineProperty(_Reflux$createActions, ChartActionTypes.CLOSE_CHART, {}), _Reflux$createActions));

/*
ChartActions.fnOnChangeStore = _fnOnChangeStore

ChartActions[ChartActionTypes.LOAD_STOCK].preEmit = function(){
  const arg = [].slice.call(arguments)
      , chartType = arg[0]
      , option = arg[2]
      , key = LogicUtils.createKeyForConfig(option)
      , isDoublingLoad = this.isLoading && key === this.idLoading
      , isDoublLoadMeta = (option.isLoadMeta)
          ? (key + META === this.idLoading)
          : false;

  option.key = key;
  this.isShouldEmit = true;
  option.apiKey = ChartStore.getQuandlKey();

  if (option.isPremium && !option.apiKey){
    this.cancelLoad(option, Msg.Alert.PREMIUM_WITHOUT_KEY, false);
  } else if (isDoublingLoad){
    this.cancelLoad(option, Msg.Alert.LOADING_IN_PROGRESS, false);
  } else if (isDoublLoadMeta){
    this.cancelLoad(option, Msg.Alert.DOUBLE_LOAD_META, false);
  }  else if (!ChartStore.isLoadToChart()){
     if (ChartStore.isChartExist(chartType, key)){
       this.cancelLoad(option, Msg.Alert.ALREADY_EXIST, true);
     }
  }

  return undefined;
}

ChartActions[ChartActionTypes.LOAD_STOCK].shouldEmit = function(){
  return this.isShouldEmit;
}
*/

ChartActions[ChartActionTypes.LOAD_STOCK].listen(function (chartType, browserType, option) {

  this.isLoading = true;
  this.idLoading = option.key;
  /*
  if (option.isLoadMeta){
    this.idLoading = this.idLoading + META;
  }
  */

  var _option$loadId = option.loadId;
  var loadId = _option$loadId === undefined ? 'LW' : _option$loadId;

  option.chartType = chartType;
  option.browserType = browserType;

  _RouterLoad2.default[loadId](option, this.completed, this.failed);
});

exports.default = ChartActions;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\actions\ChartActions.js.map