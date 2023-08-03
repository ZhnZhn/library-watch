import Reflux from 'reflux-core';

import { showAlert } from '../compStore';

import {
  CAT_CLOSE_COMP_ITEM_LIST,
  ComponentActions
} from '../actions/ComponentActions';
import {
  CHAT_SHOW_CHART,
  CHAT_INIT_AND_SHOW_CHART,
  CHAT_LOAD_STOCK_COMPLETED,
  CHAT_CLOSE_CHART,
  ChartActions
} from '../actions/ChartActions';
import {
  BAT_UPDATE_BROWSER_MENU,
  BrowserActions
} from '../actions/BrowserActions';
import { LoadingProgressActions } from '../actions/LoadingProgressActions';
import { WatchActions } from '../actions/WatchActions';

import {
  BrowserType as BT,
} from '../../constants/Type';

import createChartContainer from '../logic/createChartContainer';
import createItem from '../logic/createItem';

import {
  toTopByKey,
  removeAll
} from './chart/ChartLogicFn';
import BrowserSlice from './BrowserSlice';
import WatchListSlice from '../watch-list/WatchListSlice';
import WithLimitRemaining from './WithLimitRemaining';
import WithLoadingProgress from './WithLoadingProgress';

const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _logLoadError = ({
  alertCaption,
  alertDescr,
  alertItemId
}) => {
  console.log('%c'+ alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
}

const AppStore = Reflux.createStore({
  listenables: [
    BrowserActions,
    ComponentActions,
    ChartActions,
    WatchActions,
    LoadingProgressActions
  ],
  charts: {},

  init(){
    this.initWatchList();
  },

  createInitConfig(chartType){
    return {
      chartType: chartType,
      configs: [],
      isShow: true
    };
  },
  getConfigs(chartType){
   return this.charts[chartType];
  },

  isKeyTop(key, option){
    const { chartType } = option
    , slice = this.charts[chartType];
    return toTopByKey(slice, key);
  },
  onMoveToTop(chartType, key){
    const slice = this.charts[chartType];
    if (toTopByKey(slice, key)) {
      this.trigger(CHAT_SHOW_CHART, slice);
    }
  },

  onShowChart(chartType, browserType){
   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.isShow = true;
     this.trigger(CHAT_SHOW_CHART, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.trigger(CHAT_INIT_AND_SHOW_CHART,
        createChartContainer(
          this.getDataConf(chartType),
          browserType
        )
     );
   }

   if (browserType !== BT.WATCH_LIST){
     this.setMenuItemOpen(chartType, browserType);
     this.trigger(BAT_UPDATE_BROWSER_MENU, browserType);
   }

 },

 onLoadStock(){
 },
 onLoadStockCompleted(option, json){
   /* eslint-disable no-undef */
   if (process.env.NODE_ENV !== 'production'){
   /* eslint-enable no-undef */
     console.log(option);
     console.log(json);
   }

   const {
     chartType,
     browserType,
     limitRemaining
   } = option
  , comp = createItem(option, json, { chartType, browserType});


   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.configs.unshift(comp);
     chartCont.isShow = true;
     this.trigger(CHAT_LOAD_STOCK_COMPLETED, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.charts[chartType].configs.unshift(comp);
     this.trigger(
        CHAT_INIT_AND_SHOW_CHART,
        createChartContainer(
          this.getDataConf(chartType),
          browserType
        )
     );
   }

   this.triggerLimitRemaining(limitRemaining);

   if (browserType !== BT.WATCH_LIST){
     this.addMenuItemCounter(chartType, browserType);
     this.trigger(BAT_UPDATE_BROWSER_MENU, browserType);
   }
  },
  onLoadStockFailed(option){
   const  { limitRemaining } = option;
   this.triggerLimitRemaining(limitRemaining);
   option.alertItemId = option.alertItemId
     || option.repo || '';
   showAlert(option)
   _logLoadError(option);
 },

  onCloseChart(chartType, browserType, key){
   const chartCont = this.charts[chartType];
   chartCont.configs = chartCont.configs.filter((compObj, index) => {
      return compObj.key !== key;
   })
   this.trigger(CHAT_CLOSE_CHART, chartCont);

   if (browserType !== BT.WATCH_LIST){
     this.minusMenuItemCounter(chartType, browserType);
     this.trigger(BAT_UPDATE_BROWSER_MENU, browserType);
   }

 },

 onCloseChartContainer(chartType, browserType){
   if (browserType !== BT.WATCH_LIST){
     this.setMenuItemClose(chartType, browserType);
     this.trigger(BAT_UPDATE_BROWSER_MENU, browserType);
   }
 },
 onCloseCompItemList(chartType, browserType){
   this.trigger(CAT_CLOSE_COMP_ITEM_LIST, chartType);
 },

 onRemoveAll(chartType, browserType){
    const chartSlice = removeAll(this.charts, chartType);
    this.resetMenuItemCounter(chartType, browserType)
    this.trigger(CHAT_SHOW_CHART, chartSlice);
    this.trigger(BAT_UPDATE_BROWSER_MENU, browserType);
  },

 ...BrowserSlice,
 ...WatchListSlice,
 ...WithLimitRemaining,
 ...WithLoadingProgress
});

export default AppStore
