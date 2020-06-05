"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _ComponentActions = _interopRequireWildcard(require("../actions/ComponentActions"));

var _ChartActions = _interopRequireWildcard(require("../actions/ChartActions"));

var _BrowserActions = _interopRequireWildcard(require("../actions/BrowserActions"));

var _LoadingProgressActions = _interopRequireDefault(require("../actions/LoadingProgressActions"));

var _WatchActions = _interopRequireDefault(require("../actions/WatchActions"));

var _Type = require("../../constants/Type");

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var _ChartLogic = _interopRequireDefault(require("./chart/ChartLogic"));

var _BrowserSlice = _interopRequireDefault(require("./BrowserSlice"));

var _ComponentSlice = _interopRequireDefault(require("./ComponentSlice"));

var _WatchListSlice = _interopRequireDefault(require("../watch-list/WatchListSlice"));

var _WithLimitRemaining = _interopRequireDefault(require("./WithLimitRemaining"));

var _WithLoadingProgress = _interopRequireDefault(require("./WithLoadingProgress"));

var toTopByKey = _ChartLogic["default"].toTopByKey,
    removeAll = _ChartLogic["default"].removeAll;
var CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';

var _logLoadError = function _logLoadError(_ref) {
  var alertCaption = _ref.alertCaption,
      alertDescr = _ref.alertDescr,
      alertItemId = _ref.alertItemId;
  console.log('%c' + alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
};

var AppStore = _refluxCore["default"].createStore((0, _extends2["default"])({
  listenables: [_BrowserActions["default"], _ComponentActions["default"], _ChartActions["default"], _WatchActions["default"], _LoadingProgressActions["default"]],
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
  showAlertDialog: function showAlertDialog(option) {
    if (option === void 0) {
      option = {};
    }

    option.modalDialogType = _Type.ModalDialog.ALERT;
    option.alertItemId = option.alertItemId || option.repo || '';
    this.trigger(_ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG, option);
  },
  isKeyTop: function isKeyTop(key, option) {
    var chartType = option.chartType,
        slice = this.charts[chartType];
    return toTopByKey(slice, key);
  },
  onMoveToTop: function onMoveToTop(chartType, key) {
    var slice = this.charts[chartType];

    if (toTopByKey(slice, key)) {
      this.trigger(_ChartActions.ChartActionTypes.SHOW_CHART, slice);
    }
  },
  onShowChart: function onShowChart(chartType, browserType) {
    var chartCont = this.charts[chartType];

    if (chartCont) {
      chartCont.isShow = true;
      this.trigger(_ChartActions.ChartActionTypes.SHOW_CHART, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.trigger(_ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART, _Factory["default"].createChartContainer(chartType, browserType));
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
        comp = _Factory["default"].createItem(option, json, {
      chartType: chartType,
      browserType: browserType
    });

    var chartCont = this.charts[chartType];

    if (chartCont) {
      chartCont.configs.unshift(comp);
      chartCont.isShow = true;
      this.trigger(_ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.charts[chartType].configs.unshift(comp);
      this.trigger(_ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART, _Factory["default"].createChartContainer(chartType, browserType));
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

    _logLoadError(option);
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
  },
  onRemoveAll: function onRemoveAll(chartType, browserType) {
    var chartSlice = removeAll(this.charts, chartType);
    this.resetMenuItemCounter(chartType, browserType);
    this.trigger(_ChartActions.ChartActionTypes.SHOW_CHART, chartSlice);
    this.trigger(_BrowserActions.BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
  }
}, _BrowserSlice["default"], _ComponentSlice["default"], _WatchListSlice["default"], _WithLimitRemaining["default"], _WithLoadingProgress["default"]));

var _default = AppStore;
exports["default"] = _default;
//# sourceMappingURL=AppStore.js.map