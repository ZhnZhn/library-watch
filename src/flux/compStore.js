import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';

import { ModalDialog as MD } from '../constants/Type';
import createDialog from './logic/createDialog';
import { getDataConf } from './dialogFn';

const _crStore = () => ({
  msAbout: { is: true },
  dgOption: void 0,
  mdOption: void 0
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _selectDgOption = state => state.dgOption
, _selectMdOption = state => state.mdOption
, _set = _compStore.setState;

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set({
  msAbout: { is: true }
})

export const useDgOption = fCrUse(_compStore, _selectDgOption)
const _hmDialog = Object.create(null);
export const showDialog = (dialogType, browserType) => {
  if (_hmDialog[dialogType]) {
    _set({ dgOption: { dialogType } })
  } else {
    _hmDialog[dialogType] = true
    const dialogComp = createDialog(
      getDataConf(dialogType),
      browserType
    );
    _set({ dgOption: { dialogType, dialogComp} })
  }
}

export const useMdOption = fCrUse(_compStore, _selectMdOption)
export const showModalDialog = (modalDialogType, option={}) => {
  option.modalDialogType = modalDialogType
  _set({ mdOption: option })
}
export const showAddItem = showModalDialog.bind(null, MD.ADD_ITEM)
export const showAlert = showModalDialog.bind(null, MD.ALERT)
export const showInfo = showModalDialog.bind(null, MD.INFO)
