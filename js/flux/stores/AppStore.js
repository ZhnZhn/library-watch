"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _compStore = require("../compStore");
var _dialogFn = require("../dialogFn");
var _browserFn = require("../browserFn");
var _browserStore = require("../browserStore");
var _ComponentActions = require("../actions/ComponentActions");
var _ChartActions = require("../actions/ChartActions");
var _LoadingProgressActions = require("../actions/LoadingProgressActions");
var _Type = require("../../constants/Type");
var _createChartContainer = _interopRequireDefault(require("../logic/createChartContainer"));
var _createItem = _interopRequireDefault(require("../logic/createItem"));
var _ChartLogicFn = require("./chart/ChartLogicFn");
var _WithLimitRemaining = _interopRequireDefault(require("./WithLimitRemaining"));
var _WithLoadingProgress = _interopRequireDefault(require("./WithLoadingProgress"));
const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _logLoadError = _ref => {
  let {
    alertCaption,
    alertDescr,
    alertItemId
  } = _ref;
  console.log('%c' + alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
};
const AppStore = _refluxCore.default.createStore({
  listenables: [_ComponentActions.ComponentActions, _ChartActions.ChartActions, _LoadingProgressActions.LoadingProgressActions],
  charts: {},
  createInitConfig(chartType) {
    return {
      chartType: chartType,
      configs: [],
      isShow: true
    };
  },
  getConfigs(chartType) {
    return this.charts[chartType];
  },
  isKeyTop(key, option) {
    const {
        chartType
      } = option,
      slice = this.charts[chartType];
    return (0, _ChartLogicFn.toTopByKey)(slice, key);
  },
  onMoveToTop(chartType, key) {
    const slice = this.charts[chartType];
    if ((0, _ChartLogicFn.toTopByKey)(slice, key)) {
      this.trigger(_ChartActions.CHAT_SHOW_CHART, slice);
    }
  },
  onShowChart(chartType, browserType) {
    const chartCont = this.charts[chartType];
    if (chartCont) {
      chartCont.isShow = true;
      this.trigger(_ChartActions.CHAT_SHOW_CHART, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.trigger(_ChartActions.CHAT_INIT_AND_SHOW_CHART, (0, _createChartContainer.default)((0, _dialogFn.getDataConf)(chartType), browserType));
    }
    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      (0, _browserFn.setMenuItemOpen)(chartType, browserType);
      (0, _browserStore.updateBrowserMenu)(browserType);
    }
  },
  onLoadStock() {},
  onLoadStockCompleted(option, json) {
    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
      /* eslint-enable no-undef */
      console.log(option);
      console.log(json);
    }
    const {
        chartType,
        browserType,
        limitRemaining
      } = option,
      comp = (0, _createItem.default)(option, json, {
        chartType,
        browserType
      });
    const chartCont = this.charts[chartType];
    if (chartCont) {
      chartCont.configs.unshift(comp);
      chartCont.isShow = true;
      this.trigger(_ChartActions.CHAT_LOAD_STOCK_COMPLETED, chartCont);
    } else {
      this.charts[chartType] = this.createInitConfig(chartType);
      this.charts[chartType].configs.unshift(comp);
      this.trigger(_ChartActions.CHAT_INIT_AND_SHOW_CHART, (0, _createChartContainer.default)((0, _dialogFn.getDataConf)(chartType), browserType));
    }
    this.triggerLimitRemaining(limitRemaining);
    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      (0, _browserFn.addMenuItemCounter)(chartType, browserType);
      (0, _browserStore.updateBrowserMenu)(browserType);
    }
  },
  onLoadStockFailed(option) {
    const {
      limitRemaining
    } = option;
    this.triggerLimitRemaining(limitRemaining);
    option.alertItemId = option.alertItemId || option.repo || '';
    (0, _compStore.showAlert)(option);
    _logLoadError(option);
  },
  onCloseChart(chartType, browserType, key) {
    const chartCont = this.charts[chartType];
    chartCont.configs = chartCont.configs.filter((compObj, index) => {
      return compObj.key !== key;
    });
    this.trigger(_ChartActions.CHAT_CLOSE_CHART, chartCont);
    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      (0, _browserFn.minusMenuItemCounter)(chartType, browserType);
      (0, _browserStore.updateBrowserMenu)(browserType);
    }
  },
  onCloseChartContainer(chartType, browserType) {
    if (browserType !== _Type.BrowserType.WATCH_LIST) {
      (0, _browserFn.setMenuItemClose)(chartType, browserType);
      (0, _browserStore.updateBrowserMenu)(browserType);
    }
  },
  onCloseCompItemList(chartType, browserType) {
    this.trigger(_ComponentActions.CAT_CLOSE_COMP_ITEM_LIST, chartType);
  },
  onRemoveAll(chartType, browserType) {
    const chartSlice = (0, _ChartLogicFn.removeAll)(this.charts, chartType);
    (0, _browserFn.resetMenuItemCounter)(chartType, browserType);
    this.trigger(_ChartActions.CHAT_SHOW_CHART, chartSlice);
    (0, _browserStore.updateBrowserMenu)(browserType);
  },
  ..._WithLimitRemaining.default,
  ..._WithLoadingProgress.default
});
var _default = AppStore;
exports.default = _default;
//# sourceMappingURL=AppStore.js.map