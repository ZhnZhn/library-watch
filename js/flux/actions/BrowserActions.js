'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserActionTypes = undefined;

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _fnFetch = require('../../network/fnFetch');

var _fnFetch2 = _interopRequireDefault(_fnFetch);

var _fnCatch = require('../../network/fnCatch');

var _fnCatch2 = _interopRequireDefault(_fnCatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BrowserActionTypes = exports.BrowserActionTypes = {
  SHOW_BROWSER: 'showBrowser',
  UPDATE_BROWSER_MENU: 'updateBrowserMenu',

  SHOW_BROWSER_DYNAMIC: 'showBrowserDynamic',
  INIT_BROWSER_DYNAMIC: 'initBrowserDynamic',
  LOAD_BROWSER_DYNAMIC: 'loadBrowserDynamic',
  LOAD_BROWSER_DYNAMIC_COMPLETED: 'loadBrowserDynamicCompleted',

  UPDATE_WATCH_BROWSER: 'updateWatchBrowser',
  TOGGLE_WATCH_DB_BROWSER: 'toggleWatchDbBrowser'
};

var BrowserActions = _reflux2.default.createActions((_Reflux$createActions = {}, _defineProperty(_Reflux$createActions, BrowserActionTypes.SHOW_BROWSER, {}), _defineProperty(_Reflux$createActions, BrowserActionTypes.UPDATE_BROWSER_MENU, {}), _defineProperty(_Reflux$createActions, BrowserActionTypes.SHOW_BROWSER_DYNAMIC, {}), _defineProperty(_Reflux$createActions, BrowserActionTypes.INIT_BROWSER_DYNAMIC, {}), _defineProperty(_Reflux$createActions, BrowserActionTypes.LOAD_BROWSER_DYNAMIC, { children: ['completed', 'failed'] }), _defineProperty(_Reflux$createActions, BrowserActionTypes.UPDATE_WATCH_BROWSER, {}), _defineProperty(_Reflux$createActions, BrowserActionTypes.TOGGLE_WATCH_DB_BROWSER, {}), _Reflux$createActions));

var _fnFetchSourceMenu = function _fnFetchSourceMenu(_ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;
  var menu = json.menu,
      items = json.items,
      browserType = option.browserType;

  onCompleted({ menu: menu, items: items, browserType: browserType });
};

BrowserActions[BrowserActionTypes.LOAD_BROWSER_DYNAMIC].listen(function (option) {
  (0, _fnFetch2.default)({
    uri: option.sourceMenuUrl,
    option: option,
    onCheckResponse: function onCheckResponse(json) {
      return true;
    },
    onFetch: _fnFetchSourceMenu,
    onCompleted: this.completed,
    onCatch: _fnCatch2.default,
    onFailed: this.failed
  });
});

exports.default = BrowserActions;
//# sourceMappingURL=BrowserActions.js.map