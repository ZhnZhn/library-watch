import Reflux from 'reflux';

import ComponentActions, {ComponentActionTypes} from '../actions/ComponentActions';
import ChartActions from '../actions/ChartActions';
import BrowserActions, { BrowserActionTypes } from '../actions/BrowserActions';
import { ChartActionTypes } from '../actions/ChartActions';
import { LoadingProgressActionTypes } from '../actions/LoadingProgressActions';
import WatchActions from '../actions/WatchActions';

import { BrowserType, ModalDialog } from '../../constants/Type';

import Factory from '../logic/Factory';

import BrowserSlice from './BrowserSlice';
import ComponentSlice from './ComponentSlice';
import WatchListSlice from './WatchListSlice';
import WithLimitRemaining from './WithLimitRemaining';
import WithLoadingProgress from './WithLoadingProgress';

const CONSOLE_LOG_STYLE = 'color:rgb(237, 88, 19);';
const _fnLogLoadError = function({
  alertCaption, alertDescr, alertItemId
}){
  console.log('%c'+ alertCaption + ':' + alertItemId, CONSOLE_LOG_STYLE);
  console.log('%c' + alertDescr, CONSOLE_LOG_STYLE);
}

const GitHubStore = Reflux.createStore({
  listenables : [BrowserActions, ComponentActions, ChartActions, WatchActions],
  charts : {},

  init(){
    this.initWatchList();
  },

  createInitConfig(chartType){
    return {chartType: chartType, configs: [], isShow: true};
  },
  getConfigs(chartType){
   return this.charts[chartType];
  },
  showAlertDialog(option={}){
   option.modalDialogType = ModalDialog.ALERT;
   option.alertItemId = (option.alertItemId)
             ? option.alertItemId
             : option.repo;
   this.trigger(ComponentActionTypes.SHOW_MODAL_DIALOG, option);
 },


  onShowChart(chartType, browserType){
   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.isShow = true;
     this.trigger(ChartActionTypes.SHOW_CHART, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.trigger(ChartActionTypes.INIT_AND_SHOW_CHART,
                  Factory.createChartContainer(chartType, browserType));
   }

   if (browserType !== BrowserType.WATCH_LIST){
     this.setMenuItemOpen(chartType, browserType);
     this.trigger(BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
   }

 },

 onLoadStock(){
   this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING)
 },
 onLoadStockCompleted(option, json){
   //console.log(option);
   //console.log(json);

   const { chartType, browserType, limitRemaining } = option
       , comp = Factory.createItem(option, json, { chartType, browserType});


   const chartCont = this.charts[chartType];
   if (chartCont){
     chartCont.configs.unshift(comp);
     chartCont.isShow = true;
     this.trigger(ChartActionTypes.LOAD_STOCK_COMPLETED, chartCont);
   } else {
     this.charts[chartType] = this.createInitConfig(chartType);
     this.charts[chartType].configs.unshift(comp);
     this.trigger(
        ChartActionTypes.INIT_AND_SHOW_CHART,
        Factory.createChartContainer(chartType, browserType)
     );
   }

   this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING_COMPLETE);
   this.triggerLimitRemaining(limitRemaining);

   if (browserType !== BrowserType.WATCH_LIST){
     this.addMenuItemCounter(chartType, browserType);
     this.trigger(BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
   }
  },
  onLoadStockFailed(option){
   const  { limitRemaining } = option;

   this.triggerLoadingProgress(LoadingProgressActionTypes.LOADING_FAILED);
   this.triggerLimitRemaining(limitRemaining);

   this.showAlertDialog(option);

   _fnLogLoadError(option);
 },

  onCloseChart(chartType, browserType, key){
   const chartCont = this.charts[chartType];
   chartCont.configs = chartCont.configs.filter((compObj, index) => {
      return compObj.key !== key;
   })
   this.trigger(ChartActionTypes.CLOSE_CHART, chartCont);

   if (browserType !== BrowserType.WATCH_LIST){
     this.minusMenuItemCounter(chartType, browserType);
     this.trigger(BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
   }

 },

 onCloseChartContainer(chartType, browserType){
   if (browserType !== BrowserType.WATCH_LIST){
     this.setMenuItemClose(chartType, browserType);
     this.trigger(BrowserActionTypes.UPDATE_BROWSER_MENU, browserType);
   }
 },
 onCloseChartContainer2(chartType, browserType){
   this.trigger(ComponentActionTypes.CLOSE_CHART_CONTAINER_2, chartType);
 },

 ...BrowserSlice,
 ...ComponentSlice,
 ...WatchListSlice,
 ...WithLimitRemaining,
 ...WithLoadingProgress
});

export default GitHubStore
