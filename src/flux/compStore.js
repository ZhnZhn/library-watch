import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';

import { ModalDialog as MD } from '../constants/Type';

const _crStore = () => ({
  msAbout: { is: true },
  mdOption: void 0
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _selectMdOption = state => state.mdOption
, _set = _compStore.setState;

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set({
  msAbout: { is: true }
})

export const useMdOption = fCrUse(_compStore, _selectMdOption)
export const showModalDialog = (modalDialogType, option={}) => {
  option.modalDialogType = modalDialogType
  _set({ mdOption: option })
}
export const showAddItem = showModalDialog.bind(null, MD.ADD_ITEM)
export const showAlert = showModalDialog.bind(null, MD.ALERT)
export const showInfo = showModalDialog.bind(null, MD.INFO)
