import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';

const _crStore = () => ({
  msAbout: { is: true }
})
, _compStore = createStoreWithSelector(_crStore)
, _selectMsAbout = state => state.msAbout
, _set = _compStore.setState;

export const useMsAbout = fCrUse(_compStore, _selectMsAbout)

export const showAbout = () => _set({
  msAbout: { is: true }
})
