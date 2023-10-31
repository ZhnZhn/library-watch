import {
  createStoreWithSelector,
  getStoreApi,
  fCrStoreSlice,
  fCrUse,
  bindTo
} from './storeApi';

import { ModalDialog as MD } from '../constants/Type';
import createDialog from './logic/createDialog';
import { getDataConf } from './dialogFn';

const [
  _crMsAbout,
  _selectMsAbout
] = fCrStoreSlice("msAbout", "is")
, [
  _crDgOption,
  _selectDgOption
] = fCrStoreSlice("dgOption")
, [
  _crMdOption,
  _selectMdOption
] = fCrStoreSlice("mdOption");

const _crStore = () => ({
  ..._crMsAbout(true),
  ..._crDgOption(),
  ..._crMdOption()
})
, _compStore = createStoreWithSelector(_crStore)
, [_set] = getStoreApi(_compStore);

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set(_crMsAbout(true))

export const useDgOption = fCrUse(_compStore, _selectDgOption)
const _hmDialog = Object.create(null);
export const showDialog = (dialogType, browserType) => {
  if (_hmDialog[dialogType]) {
    _set(_crDgOption({ dialogType }))
  } else {
    _hmDialog[dialogType] = true
    const dialogComp = createDialog(
      getDataConf(dialogType),
      browserType
    );
    _set(_crDgOption({
      dialogType,
      dialogComp
    }))
  }
}

export const useMdOption = fCrUse(_compStore, _selectMdOption)
export const showModalDialog = (
  modalDialogType,
  option={}
) => {
  option.modalDialogType = modalDialogType
  _set(_crMdOption({...option}))
}
export const showAddItem = bindTo(showModalDialog, MD.ADD_ITEM)
export const showAlert = bindTo(showModalDialog, MD.ALERT)
export const showInfo = bindTo(showModalDialog, MD.INFO)
