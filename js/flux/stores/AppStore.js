'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _ComponentActions = require('../actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ChartActions = require('../actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _BrowserActions = require('../actions/BrowserActions');

var _BrowserActions2 = _interopRequireDefault(_BrowserActions);

var _LoadingProgressActions = require('../actions/LoadingProgressActions');

var _LoadingProgressActions2 = _interopRequireDefault(_LoadingProgressActions);

var _WatchActions = require('../actions/WatchActions');

var _WatchActions2 = _interopRequireDefault(_WatchActions);

var _Type = require('../../constants/Type');

var _Factory = require('../logic/Factory');

var _Factory2 = _interopRequireDefault(_Factory);

var _BrowserSlice = require('./BrowserSlice');

var _BrowserSlice2 = _interopRequireDefault(_BrowserSlice);

var _ComponentSlice = require('./ComponentSlice');

var _ComponentSlice2 = _interopRequireDefault(_ComponentSlice);

var _WatchListSlice = require('../watch-list/WatchListSlice');

var _WatchListSlice2 = _interopRequireDefault(_WatchListSlice);

var _WithLimitRemaining = require('./WithLimitRemaining');

var _WithLimitRemaining2 = _interopRequireDefault(_WithLimitRemaining);

var _WithLoadingProgress = require('./WithLoadingProgress');

var _WithLoadingProgress2 = _interopRequireDefault(_WithLoadingProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
var _fnLogLoadError = function _fnLogLoadError(_ref) {
  var alertCaption = _ref.alertCaption,
      alertDescr = _ref.alertDescr,
      alertItemId = _ref.alertItemId;

  console.log('%c' + alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
};

var _isObj = function _isObj(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' && obj !== null;
};

var _isKeyTop = function _isKeyTop(slice, key) {
  if (!_isObj(slice)) {
    return false;
  }
  var _configs = slice.configs;
  if (!Array.isArray(_configs)) {
    return false;
  }
  var _index = _configs.findIndex(function (obj) {
    return obj.key === key;
  });
  if (_index !== -1) {
    _configs.unshift(_configs[_index]);
    _configs.splice(_index + 1, 1);
    return true;
  } else {
    return false;
  }
  //console.log(slice)
  //return Boolean(_configs.find(obj => obj.key === key));
};

var AppStore = _reflux2.default.createStore((0, _extends3.default)({
  listenables: [_BrowserActions2.default, _ComponentActions2.default, _ChartActions2.default, _WatchActions2.default, _LoadingProgressActions2.default],
  charts: {},

  init: function init() {
    this.initWatchList();
  },
  createInitConfig: function createInitConfig(chartType) {
    return {
      chartType: chartType,
      configs: [],
      isShow: true
    };
  },
  getConfigs: function getConfigs(chartType) {
    return this.charts[chartType];
  },
  showAlertDialog: function showAlertDialog() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    option.modalDialogType = _Type.ModalDialog.ALERT;
    option.alertItemId = option.alertItemId ? option.alertItemId : option.repo;
    this.trigger(_ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG, option);
  },
  isKeyTop: function isKeyTop(key, option) {
    var chartType = option.chartType,
        slice = this.charts[chartType];

    return _isKeyTop(slice, key);
  },
  onShowChart: function onShowChart(chartType, browserType) {
    var chartCont = this.charts[chartType];
    if (chartCont) {
      chartCont.isShow = true;
      this.trigger(_ChartActions.ChartActionTypes.SHOW_CHART, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.trigger(_ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART, _Factory2.default.createChartContainer(chartType, browserType));
    }

    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      this.setMenuItemOpen(chartType, browserType);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
    }
  },
  onLoadStock: function onLoadStock() {},
  onLoadStockCompleted: function onLoadStockCompleted(option, json) {
    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-undef */
      console.log(option);
      console.log(json);
    }

    var chartType = option.chartType,
        browserType = option.browserType,
        limitRemaining = option.limitRemaining,
        comp = _Factory2.default.createItem(option, json, { chartType: chartType, browserType: browserType });

    var chartCont = this.charts[chartType];
    if (chartCont) {
      chartCont.configs.unshift(comp);
      chartCont.isShow = true;
      this.trigger(_ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.charts[chartType].configs.unshift(comp);
      this.trigger(_ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART, _Factory2.default.createChartContainer(chartType, browserType));
    }

    this.triggerLimitRemaining(limitRemaining);

    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      this.addMenuItemCounter(chartType, browserType);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
    }
  },
  onLoadStockFailed: function onLoadStockFailed(option) {
    var limitRemaining = option.limitRemaining;


    this.triggerLimitRemaining(limitRemaining);

    this.showAlertDialog(option);

    _fnLogLoadError(option);
  },
  onCloseChart: function onCloseChart(chartType, browserType, key) {
    var chartCont = this.charts[chartType];
    chartCont.configs = chartCont.configs.filter(function (compObj, index) {
      return compObj.key !== key;
    });
    this.trigger(_ChartActions.ChartActionTypes.CLOSE_CHART, chartCont);

    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      this.minusMenuItemCounter(chartType, browserType);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
    }
  },
  onCloseChartContainer: function onCloseChartContainer(chartType, browserType) {
    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      this.setMenuItemClose(chartType, browserType);
      this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
    }
  },
  onCloseChartContainer2: function onCloseChartContainer2(chartType, browserType) {
    this.trigger(_ComponentActions.ComponentActionTypes.CLOSE_CHART_CONTAINER_2, chartType);
  }
}, _BrowserSlice2.default, _ComponentSlice2.default, _WatchListSlice2.default, _WithLimitRemaining2.default, _WithLoadingProgress2.default));

exports.default = AppStore;
//# sourceMappingURL=AppStore.js.map