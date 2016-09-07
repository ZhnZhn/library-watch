'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GitHubStore = require('../flux/stores/GitHubStore');

var _GitHubStore2 = _interopRequireDefault(_GitHubStore);

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

var _RouterModalDialog = require('./dialogs/RouterModalDialog');

var _RouterModalDialog2 = _interopRequireDefault(_RouterModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppGitHub = function AppGitHub(props) {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_HeaderBar2.default, { store: _GitHubStore2.default }),
      _react2.default.createElement(
         'div',
         { className: 'component-container' },
         _react2.default.createElement(_BrowserContainer2.default, {
            store: _GitHubStore2.default,
            showBrowserAction: _BrowserActions.BrowserActionTypes.SHOW_BROWSER,
            initBrowserAction: _BrowserActions.BrowserActionTypes.INIT_BROWSER_DYNAMIC,
            updateWatchAction: _BrowserActions.BrowserActionTypes.UPDATE_WATCH_BROWSER,
            initDialogAction: _ComponentActions.ComponentActionTypes.INIT_AND_SHOW_DIALOG,
            showDialogAction: _ComponentActions.ComponentActionTypes.SHOW_DIALOG
         }),
         _react2.default.createElement(_About2.default, {
            store: _GitHubStore2.default,
            isShow: true
         }),
         _react2.default.createElement(_ComponentHrzContainer2.default, {
            store: _GitHubStore2.default,
            initShowAction: _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART
         })
      ),
      _react2.default.createElement(_DialogContainer2.default, {
         store: _GitHubStore2.default,
         showAction: _ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG,
         routerDialog: _RouterModalDialog2.default
      })
   );
};

exports.default = AppGitHub;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\AppGitHub.js.map