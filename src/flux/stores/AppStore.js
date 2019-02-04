import Reflux from 'reflux';

import ComponentActions, { ComponentActionTypes as CAT } from '../actions/ComponentActions';
import ChartActions from '../actions/ChartActions';
import BrowserActions, { BrowserActionTypes as BAT } from '../actions/BrowserActions';
import { ChartActionTypes as CHAT } from '../actions/ChartActions';
import LoadingProgressActions from '../actions/LoadingProgressActions';
import WatchActions from '../actions/WatchActions';

import { BrowserType as BT, ModalDialog as MD } from '../../constants/Type';

import Factory from '../logic/Factory';

import BrowserSlice from './BrowserSlice';
import ComponentSlice from './ComponentSlice';
import WatchListSlice from '../watch-list/WatchListSlice';
import WithLimitRemaining from './WithLimitRemaining';
import WithLoadingProgress from './WithLoadingProgress';

const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _fnLogLoadError = function({
  alertCaption, alertDescr, alertItemId
}){
  console.log('%c'+ alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
}

const _isObj = obj => typeof obj === 'object'
  && obj !== null;

const _isKeyTop = (slice, key) => {
  if ( !_isObj(slice) ) {
    return false;
  }
  const _configs = slice.configs;
  if ( !Array.isArray(_configs) ) {
    return false;
  }
  const _index = _configs.findIndex(obj => obj.key === key)
  if (_index !== -1) {
    _configs.unshift(_configs[_index])
    _configs.splice(_index+1, 1)
    return true;
  } else {
    return false;
  }
  //console.log(slice)
  //return Boolean(_configs.find(obj => obj.key === key));
};

const AppStore = Reflux.createStore({
  listenables : [
    BrowserActions, ComponentActions, ChartActions, WatchActions,
    LoadingProgressActions
  ],
  charts : {},

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
  showAlertDialog(option={}){
   option.modalDialogType = MD.ALERT;
   option.alertItemId = (option.alertItemId)
             ? option.alertItemId
             : option.repo;
   this.trigger(CAT.SHOW_MODAL_DIALOG, option);
 },

  isKeyTop(key, option){
    const { chartType } = option
    , slice = this.charts[chartType];
    return _isKeyTop(slice, key);
  },

  onShowChart(chartType, browserType){
   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.isShow = true;
     this.trigger(CHAT.SHOW_CHART, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.trigger(CHAT.INIT_AND_SHOW_CHART,
        Factory.createChartContainer(chartType, browserType)
     );
   }

   if (browserType !== BT.WATCH_LIST){
     this.setMenuItemOpen(chartType, browserType);
     this.trigger(BAT.UPDATE_BROWSER_MENU, browserType);
   }

 },

 onLoadStock(){
 },
 onLoadStockCompleted(option, json){
   /* eslint-disable no-undef */
   if (process.env.NODE_ENV !== 'production'){
   /* eslint-disable no-undef */
     console.log(option);
     console.log(json);     
   }

   const { chartType, browserType, limitRemaining } = option
       , comp = Factory.createItem(option, json, { chartType, browserType});


   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.configs.unshift(comp);
     chartCont.isShow = true;
     this.trigger(CHAT.LOAD_STOCK_COMPLETED, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.charts[chartType].configs.unshift(comp);
     this.trigger(
        CHAT.INIT_AND_SHOW_CHART,
        Factory.createChartContainer(chartType, browserType)
     );
   }

   this.triggerLimitRemaining(limitRemaining);

   if (browserType !== BT.WATCH_LIST){
     this.addMenuItemCounter(chartType, browserType);
     this.trigger(BAT.UPDATE_BROWSER_MENU, browserType);
   }
  },
  onLoadStockFailed(option){
   const  { limitRemaining } = option;

   this.triggerLimitRemaining(limitRemaining);

   this.showAlertDialog(option);

   _fnLogLoadError(option);
 },

  onCloseChart(chartType, browserType, key){
   const chartCont = this.charts[chartType];
   chartCont.configs = chartCont.configs.filter((compObj, index) => {
      return compObj.key !== key;
   })
   this.trigger(CHAT.CLOSE_CHART, chartCont);

   if (browserType !== BT.WATCH_LIST){
     this.minusMenuItemCounter(chartType, browserType);
     this.trigger(BAT.UPDATE_BROWSER_MENU, browserType);
   }

 },

 onCloseChartContainer(chartType, browserType){
   if (browserType !== BT.WATCH_LIST){
     this.setMenuItemClose(chartType, browserType);
     this.trigger(BAT.UPDATE_BROWSER_MENU, browserType);
   }
 },
 onCloseChartContainer2(chartType, browserType){
   this.trigger(CAT.CLOSE_CHART_CONTAINER_2, chartType);
 },

 ...BrowserSlice,
 ...ComponentSlice,
 ...WatchListSlice,
 ...WithLimitRemaining,
 ...WithLoadingProgress
});

export default AppStore
