"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.BrowserActions = exports.BAT_UPDATE_WATCH_BROWSER = exports.BAT_UPDATE_BROWSER_MENU = exports.BAT_SHOW_BROWSER_DYNAMIC = exports.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = exports.BAT_LOAD_BROWSER_DYNAMIC = exports.BAT_INIT_BROWSER_DYNAMIC = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _fnFetch = _interopRequireDefault(require("../../network/fnFetch"));
var _fnCatch = _interopRequireDefault(require("../../network/fnCatch"));
const BAT_UPDATE_BROWSER_MENU = 'updateBrowserMenu';
exports.BAT_UPDATE_BROWSER_MENU = BAT_UPDATE_BROWSER_MENU;
const BAT_SHOW_BROWSER_DYNAMIC = 'showBrowserDynamic';
exports.BAT_SHOW_BROWSER_DYNAMIC = BAT_SHOW_BROWSER_DYNAMIC;
const BAT_INIT_BROWSER_DYNAMIC = 'initBrowserDynamic';
exports.BAT_INIT_BROWSER_DYNAMIC = BAT_INIT_BROWSER_DYNAMIC;
const BAT_LOAD_BROWSER_DYNAMIC = 'loadBrowserDynamic';
exports.BAT_LOAD_BROWSER_DYNAMIC = BAT_LOAD_BROWSER_DYNAMIC;
const BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = 'loadBrowserDynamicCompleted';
exports.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = BAT_LOAD_BROWSER_DYNAMIC_COMPLETED;
const BAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser';
exports.BAT_UPDATE_WATCH_BROWSER = BAT_UPDATE_WATCH_BROWSER;
const _BrowserActions = _refluxCore.default.createActions({
  [BAT_UPDATE_BROWSER_MENU]: {},
  [BAT_SHOW_BROWSER_DYNAMIC]: {},
  [BAT_INIT_BROWSER_DYNAMIC]: {},
  [BAT_LOAD_BROWSER_DYNAMIC]: {
    children: ['completed', 'failed']
  },
  [BAT_UPDATE_WATCH_BROWSER]: {}
});
const _fnFetchSourceMenu = function (_ref) {
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
_BrowserActions[BAT_LOAD_BROWSER_DYNAMIC].listen(function (option) {
  (0, _fnFetch.default)({
    uri: option.sourceMenuUrl,
    option: option,
    onCheckResponse: json => true,
    onFetch: _fnFetchSourceMenu,
    onCompleted: this.completed,
    onCatch: _fnCatch.default,
    onFailed: this.failed
  });
});
const BrowserActions = _BrowserActions;
exports.BrowserActions = BrowserActions;
//# sourceMappingURL=BrowserActions.js.map