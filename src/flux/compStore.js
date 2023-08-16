import {
  createStoreWithSelector,
  getStoreApi,
  fCrUse,
  bindTo
} from './storeApi';

import { ModalDialog as MD } from '../constants/Type';
import createDialog from './logic/createDialog';
import { getDataConf } from './dialogFn';

const MS_ABOUT = 'msAbout'
, _crMsAbout = (is) => ({
  [MS_ABOUT]: { is }
})

, DG_OPTION = 'dgOption'
, _crDgOption = (dialogType, dialogComp) => ({
  [DG_OPTION]: {
    dialogType,
    dialogComp
  }
})

, MD_OPTION = 'mdOption'
, _crMdOption = (option) => ({
  [MD_OPTION]: { option }
});

const _crStore = () => ({
  ..._crMsAbout(true),
  [DG_OPTION]: void 0,
  [MD_OPTION]: void 0
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state[MS_ABOUT]
, _selectDgOption = state => state[DG_OPTION]
, _selectMdOption = state => state[MD_OPTION]
, [_set] = getStoreApi(_compStore);

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)
export const showAbout = () => _set(_crMsAbout(true))

export const useDgOption = fCrUse(_compStore, _selectDgOption)
const _hmDialog = Object.create(null);
export const showDialog = (dialogType, browserType) => {
  if (_hmDialog[dialogType]) {
    _set(_crDgOption(dialogType))
  } else {
    _hmDialog[dialogType] = true
    const dialogComp = createDialog(
      getDataConf(dialogType),
      browserType
    );
    _set(_crDgOption(
      dialogType,
      dialogComp
    ))
  }
}

export const useMdOption = fCrUse(_compStore, _selectMdOption)
export const showModalDialog = (modalDialogType, option={}) => {
  option.modalDialogType = modalDialogType
  _set(_crMdOption(option))
}
export const showAddItem = bindTo(showModalDialog, MD.ADD_ITEM)
export const showAlert = bindTo(showModalDialog, MD.ALERT)
export const showInfo = bindTo(showModalDialog, MD.INFO)
