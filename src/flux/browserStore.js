import {
  createStoreWithSelector,
  fCrUse
} from './storeApi';

const _crStore = () => ({
  msBrowser: void 0
})
, _browserStore = createStoreWithSelector(_crStore)
, _selectMsBrowser = state => state.msBrowser
, _set = _browserStore.setState;

export const useMsBrowser = fCrUse(_browserStore, _selectMsBrowser)
export const showBrowser = (id) => _set({
  msBrowser: { id }
})
