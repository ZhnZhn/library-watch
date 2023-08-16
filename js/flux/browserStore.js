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
const MS_BROWSER = 'msBrowser',
  MS_BROWSER_DYNAMIC = 'msBrowserDynamic',
  _crMsBrowser = id => ({
    [MS_BROWSER]: {
      id
    }
  }),
  _crMsBrowserDynamicElement = elBrowser => ({
    [MS_BROWSER_DYNAMIC]: {
      elBrowser
    }
  }),
  _crMsBrowserDynamicType = (browserType, menuItems) => ({
    [MS_BROWSER_DYNAMIC]: {
      menuItems,
      browserType
    }
  });
const _crStore = () => ({
    [MS_BROWSER]: void 0,
    [MS_BROWSER_DYNAMIC]: void 0
  }),
  _browserStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsBrowser = state => state[MS_BROWSER],
  _selectMsBrowserDynamic = state => state[MS_BROWSER_DYNAMIC],
  [_set] = (0, _storeApi.getStoreApi)(_browserStore);
const useMsBrowser = (0, _storeApi.fCrUse)(_browserStore, _selectMsBrowser);
exports.useMsBrowser = useMsBrowser;
const showBrowser = id => _set(_crMsBrowser(id));
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
    _set(_crMsBrowserDynamicElement(elBrowser));
  } else {
    _set(_crMsBrowserDynamicType(browserType));
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
    _set(_crMsBrowserDynamicType(browserType, menuItems));
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
  _set(_crMsBrowserDynamicType(browserType, (0, _browserFn.getBrowserMenu)(browserType)));
};
exports.updateBrowserMenu = updateBrowserMenu;
//# sourceMappingURL=browserStore.js.map