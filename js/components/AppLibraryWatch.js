'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('../flux/stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _BrowserActions = require('../flux/actions/BrowserActions');

var _ChartActions = require('../flux/actions/ChartActions');

var _ComponentActions = require('../flux/actions/ComponentActions');

var _HeaderBar = require('./header/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _About = require('./about/About');

var _About2 = _interopRequireDefault(_About);

var _BrowserContainer = require('./browser-container/BrowserContainer');

var _BrowserContainer2 = _interopRequireDefault(_BrowserContainer);

var _ComponentHrzContainer = require('./zhnContainers/ComponentHrzContainer');

var _ComponentHrzContainer2 = _interopRequireDefault(_ComponentHrzContainer);

var _DialogContainer = require('./zhnContainers/DialogContainer');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

var _ConsentCookiePopup = require('./zhnAtoms/ConsentCookiePopup');

var _ConsentCookiePopup2 = _interopRequireDefault(_ConsentCookiePopup);

var _RouterModalDialog = require('./dialogs/RouterModalDialog');

var _RouterModalDialog2 = _interopRequireDefault(_RouterModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppLibraryWatch = function AppLibraryWatch(props) {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderBar2.default, { store: _AppStore2.default }),
      _react2.default.createElement(
         'div',
         { className: 'component-container' },
         _react2.default.createElement(_BrowserContainer2.default, {
            store: _AppStore2.default,
            showBrowserAction: _BrowserActions.BrowserActionTypes.SHOW_BROWSER,
            initBrowserAction: _BrowserActions.BrowserActionTypes.INIT_BROWSER_DYNAMIC,
            updateWatchAction: _BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER,
            toggleWatchDbBrowserAction: _BrowserActions.BrowserActionTypes.TOGGLE_WATCH_DB_BROWSER,
            initDialogAction: _ComponentActions.ComponentActionTypes.INIT_AND_SHOW_DIALOG,
            showDialogAction: _ComponentActions.ComponentActionTypes.SHOW_DIALOG
         }),
         _react2.default.createElement(_About2.default, {
            store: _AppStore2.default,
            isShow: true
         }),
         _react2.default.createElement(_ComponentHrzContainer2.default, {
            store: _AppStore2.default,
            initShowAction: _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART
         })
      ),
      _react2.default.createElement(_DialogContainer2.default, {
         store: _AppStore2.default,
         showAction: _ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG,
         routerDialog: _RouterModalDialog2.default
      }),
      _react2.default.createElement(_ConsentCookiePopup2.default, null)
   );
};

exports.default = AppLibraryWatch;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\AppLibraryWatch.js.map