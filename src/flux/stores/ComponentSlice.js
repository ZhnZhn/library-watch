import {
  CAT_SHOW_ABOUT,
  CAT_SHOW_DIALOG,
  CAT_INIT_AND_SHOW_DIALOG,
  CAT_SHOW_MODAL_DIALOG
} from '../actions/ComponentActions';
import Factory from '../logic/Factory';

const ComponentSlice = {
  dialogInit : {},

  onShowAbout(){
    this.trigger(CAT_SHOW_ABOUT)
  },

  onShowDialog(dialogType, browserType){
    if (this.dialogInit[dialogType]) {
      this.trigger(CAT_SHOW_DIALOG, dialogType);
    } else {
      this.dialogInit[dialogType] = true;
      const dialogComp = Factory.createDialog(dialogType, browserType);
      this.trigger(
        CAT_INIT_AND_SHOW_DIALOG,
        { dialogType, dialogComp }
      );
    }
  },

  onShowModalDialog(modalDialogType, option={}){
    option.modalDialogType = modalDialogType;
    this.trigger(CAT_SHOW_MODAL_DIALOG, option);
  }
}

export default ComponentSlice
