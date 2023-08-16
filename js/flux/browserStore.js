"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsBrowserDynamic = exports.useMsBrowser = exports.updateBrowserMenu = exports.showWatch = exports.showDbWatch = exports.showBrowserDynamic = exports.showBrowser = exports.loadBrowserDynamic = void 0;
var _storeApi = require("./storeApi");
var _Type = require("../constants/Type");
var _fnFetch = _interopRequireDefault(require("../network/fnFetch"));
var _fnCatch = _interopRequireDefault(require("../network/fnCatch"));
var _createMenu = _interopRequireDefault(require("./stores/browser/createMenu"));
var _createBrowserDynamic = _interopRequireDefault(require("./logic/createBrowserDynamic"));
var _browserFn = require("./browserFn");
var _dialogFn = require("./dialogFn");
var _compStore = require("./compStore");
const _crStore = () => ({
    msBrowser: void 0,
    msBrowserDynamic: void 0
  }),
  _browserStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsBrowser = state => state.msBrowser,
  _selectMsBrowserDynamic = state => state.msBrowserDynamic,
  [_set] = (0, _storeApi.getStoreApi)(_browserStore);
const useMsBrowser = (0, _storeApi.fCrUse)(_browserStore, _selectMsBrowser);
exports.useMsBrowser = useMsBrowser;
const showBrowser = id => _set({
  msBrowser: {
    id
  }
});
exports.showBrowser = showBrowser;
const showWatch = (0, _storeApi.bindTo)(showBrowser, _Type.BrowserType.WATCH_LIST);
exports.showWatch = showWatch;
const showDbWatch = (0, _storeApi.bindTo)(showBrowser, _Type.BrowserType.WATCH_LIST_DB);
exports.showDbWatch = showDbWatch;
const useMsBrowserDynamic = (0, _storeApi.fCrUse)(_browserStore, _selectMsBrowserDynamic);
exports.useMsBrowserDynamic = useMsBrowserDynamic;
const showBrowserDynamic = option => {
  const {
    browserType
  } = option;
  if (!(0, _browserFn.getBrowserMenu)(browserType)) {
    const elBrowser = (0, _createBrowserDynamic.default)(option);
    (0, _browserFn.setBrowserMenu)(browserType);
    _set({
      msBrowserDynamic: {
        elBrowser
      }
    });
  } else {
    _set({
      msBrowserDynamic: {
        browserType
      }
    });
  }
};
exports.showBrowserDynamic = showBrowserDynamic;
const _fetchSourceMenu = _ref => {
  let {
    json,
    option,
    onCompleted
  } = _ref;
  const {
      menu,
      items
    } = json,
    {
      browserType
    } = option;
  onCompleted({
    menu,
    items,
    browserType
  });
};
const _loadBrowserDynamicCompleted = _ref2 => {
    let {
      menu,
      items,
      browserType
    } = _ref2;
    const menuItems = (0, _createMenu.default)(menu, items, browserType);
    (0, _dialogFn.setDialogItems)(browserType, items);
    (0, _browserFn.setBrowserMenu)(browserType, menuItems);
    _set({
      msBrowserDynamic: {
        menuItems,
        browserType
      }
    });
  },
  _loadBrowserDynamicFailed = option => {
    option.alertItemId = option.alertItemId || option.caption || '';
    (0, _compStore.showAlert)(option);
  };
const loadBrowserDynamic = option => {
  (0, _fnFetch.default)({
    uri: option.sourceMenuUrl,
    option: option,
    onCheckResponse: json => true,
    onFetch: _fetchSourceMenu,
    onCompleted: _loadBrowserDynamicCompleted,
    onCatch: _fnCatch.default,
    onFailed: _loadBrowserDynamicFailed
  });
};
exports.loadBrowserDynamic = loadBrowserDynamic;
const updateBrowserMenu = browserType => {
  _set({
    msBrowserDynamic: {
      menuItems: (0, _browserFn.getBrowserMenu)(browserType),
      browserType
    }
  });
};
exports.updateBrowserMenu = updateBrowserMenu;
//# sourceMappingURL=browserStore.js.map