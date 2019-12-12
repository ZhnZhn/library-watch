"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.BrowserActionTypes = void 0;

var _reflux = _interopRequireDefault(require("reflux"));

var _fnFetch = _interopRequireDefault(require("../../network/fnFetch"));

var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));

var _Reflux$createActions;

var BrowserActionTypes = {
  SHOW_BROWSER: 'showBrowser',
  UPDATE_BROWSER_MENU: 'updateBrowserMenu',
  SHOW_BROWSER_DYNAMIC: 'showBrowserDynamic',
  INIT_BROWSER_DYNAMIC: 'initBrowserDynamic',
  LOAD_BROWSER_DYNAMIC: 'loadBrowserDynamic',
  LOAD_BROWSER_DYNAMIC_COMPLETED: 'loadBrowserDynamicCompleted',
  UPDATE_WATCH_BROWSER: 'updateWatchBrowser',
  TOGGLE_WATCH_DB_BROWSER: 'toggleWatchDbBrowser'
};
exports.BrowserActionTypes = BrowserActionTypes;

var BrowserActions = _reflux["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[BrowserActionTypes.SHOW_BROWSER] = {}, _Reflux$createActions[BrowserActionTypes.UPDATE_BROWSER_MENU] = {}, _Reflux$createActions[BrowserActionTypes.SHOW_BROWSER_DYNAMIC] = {}, _Reflux$createActions[BrowserActionTypes.INIT_BROWSER_DYNAMIC] = {}, _Reflux$createActions[BrowserActionTypes.LOAD_BROWSER_DYNAMIC] = {
  children: ['completed', 'failed']
}, _Reflux$createActions[BrowserActionTypes.UPDATE_WATCH_BROWSER] = {}, _Reflux$createActions[BrowserActionTypes.TOGGLE_WATCH_DB_BROWSER] = {}, _Reflux$createActions));

var _fnFetchSourceMenu = function _fnFetchSourceMenu(_ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;
  var menu = json.menu,
      items = json.items,
      browserType = option.browserType;
  onCompleted({
    menu: menu,
    items: items,
    browserType: browserType
  });
};

BrowserActions[BrowserActionTypes.LOAD_BROWSER_DYNAMIC].listen(function (option) {
  (0, _fnFetch["default"])({
    uri: option.sourceMenuUrl,
    option: option,
    onCheckResponse: function onCheckResponse(json) {
      return true;
    },
    onFetch: _fnFetchSourceMenu,
    onCompleted: this.completed,
    onCatch: _fnCatch["default"],
    onFailed: this.failed
  });
});
var _default = BrowserActions;
exports["default"] = _default;
//# sourceMappingURL=BrowserActions.js.map