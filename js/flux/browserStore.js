"use strict";

exports.__esModule = true;
exports.useMsBrowser = exports.showWatch = exports.showDbWatch = exports.showBrowser = void 0;
var _storeApi = require("./storeApi");
var _Type = require("../constants/Type");
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
const showWatch = showBrowser.bind(null, _Type.BrowserType.WATCH_LIST);
exports.showWatch = showWatch;
const showDbWatch = showBrowser.bind(null, _Type.BrowserType.WATCH_LIST_DB);
exports.showDbWatch = showDbWatch;
//# sourceMappingURL=browserStore.js.map