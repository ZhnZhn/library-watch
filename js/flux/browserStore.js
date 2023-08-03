"use strict";

exports.__esModule = true;
exports.useMsBrowser = exports.showBrowser = void 0;
var _storeApi = require("./storeApi");
const _crStore = () => ({
    msBrowser: void 0
  }),
  _browserStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsBrowser = state => state.msBrowser,
  _set = _browserStore.setState;
const useMsBrowser = (0, _storeApi.fCrUse)(_browserStore, _selectMsBrowser);
exports.useMsBrowser = useMsBrowser;
const showBrowser = id => _set({
  msBrowser: {
    id
  }
});
exports.showBrowser = showBrowser;
//# sourceMappingURL=browserStore.js.map