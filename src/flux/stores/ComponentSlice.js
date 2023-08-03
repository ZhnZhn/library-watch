import {
  CAT_SHOW_DIALOG,
  CAT_INIT_AND_SHOW_DIALOG
} from '../actions/ComponentActions';
import createDialog from '../logic/createDialog';

const ComponentSlice = {
  dialogInit : {},

  onShowDialog(dialogType, browserType){
    if (this.dialogInit[dialogType]) {
      this.trigger(CAT_SHOW_DIALOG, dialogType);
    } else {
      this.dialogInit[dialogType] = true;
      const dialogComp = createDialog(
        this.getDataConf(dialogType),
        browserType
      );
      this.trigger(
        CAT_INIT_AND_SHOW_DIALOG,
        { dialogType, dialogComp }
      );
    }
  }  
}

export default ComponentSlice
