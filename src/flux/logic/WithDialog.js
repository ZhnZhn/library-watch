import { createElement } from '../../components/uiApi';
import RouterDialog from '../../components/dialogs/RouterDialog';
import { ChartActions } from '../actions/ChartActions';

const onLoadChart = ChartActions.loadStock
, onShowChart = ChartActions.showChart;

const _createDialogComp = (
  conf,
  browserType
) => {
   const dialogType = conf.type
   , props = conf.dialogProps || {}
   , Comp = conf.dialogType
       ? RouterDialog[conf.dialogType]
           ? RouterDialog[conf.dialogType]
           : RouterDialog.DEFAULT
       : RouterDialog.DEFAULT;

   return createElement(Comp, {
     key: dialogType,
     caption: conf.dialogCaption,
     optionURI: conf.optionURI,
     optionsJsonProp: conf.optionsJsonProp,
     onLoad: onLoadChart.bind(null, dialogType, browserType),
     onShow: onShowChart.bind(null, dialogType, browserType),
     ...props
  });
}

const withDialog = {
  createDialog(dialogType, browserType){
    return _createDialogComp(this.getDataConf(dialogType), browserType);
  }
};

export default withDialog
