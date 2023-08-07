import RouterDialog from '../../components/dialogs/RouterDialog';

import {
  loadItem,
  showChart
} from '../itemStore';

const createDialog = (
  conf,
  browserType
) => {
   const dialogType = conf.type
   , Comp = conf.dialogType
       ? RouterDialog[conf.dialogType] || RouterDialog.DEFAULT
       : RouterDialog.DEFAULT;
   return (
     <Comp
       key={dialogType}
       caption={conf.dialogCaption}
       optionURI={conf.optionURI}
       optionsJsonProp={conf.optionsJsonProp}
       onLoad={loadItem.bind(null, dialogType, browserType)}
       onShow={showChart.bind(null, dialogType, browserType)}
       {...conf.dialogProps}
    />
 );
}

export default createDialog
