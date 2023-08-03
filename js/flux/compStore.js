"use strict";

exports.__esModule = true;
exports.useMsAbout = exports.showAbout = void 0;
var _storeApi = require("./storeApi");
const _crStore = () => ({
    msAbout: {
      is: true
    }
  }),
  _compStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsAbout = state => state.msAbout,
  _set = _compStore.setState;
const useMsAbout = (0, _storeApi.fCrUse)(_compStore, _selectMsAbout);
exports.useMsAbout = useMsAbout;
const showAbout = () => _set({
  msAbout: {
    is: true
  }
});
exports.showAbout = showAbout;
//# sourceMappingURL=compStore.js.map