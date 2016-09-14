'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BrowserActions = require('../../flux/actions/BrowserActions');

var _BrowserActions2 = _interopRequireDefault(_BrowserActions);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Type = require('../../constants/Type');

var _LoadingProgress = require('./LoadingProgress');

var _LoadingProgress2 = _interopRequireDefault(_LoadingProgress);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _ToolBarButton = require('./ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _LimitRemainingLabel = require('./LimitRemainingLabel');

var _LimitRemainingLabel2 = _interopRequireDefault(_LimitRemainingLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROOT_DIV: {
    position: 'relative',
    zIndex: 50
  },
  APP_LABEL: {
    display: 'inline-block',
    color: '#80c040',
    marginLeft: '35px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var BrowserConfig = {
  LIBRARY: {
    browserType: _Type.BrowserType.LIBRARY,
    caption: 'Libary',
    sourceMenuUrl: './data/github/source-menu.json'
  }
};

var HeaderBar = _react2.default.createClass({
  displayName: 'HeaderBar',
  _handlerClickDynamic: function _handlerClickDynamic(browserConfig) {
    _BrowserActions2.default.showBrowserDynamic(browserConfig);
  },
  _handlerClickWatch: function _handlerClickWatch() {
    _BrowserActions2.default.showBrowser(_Type.BrowserType.WATCH_LIST);
  },
  render: function render() {
    var store = this.props.store;

    return _react2.default.createElement(
      'div',
      { className: 'header', style: STYLE.ROOT_DIV },
      _react2.default.createElement(_LoadingProgress2.default, { store: store }),
      _react2.default.createElement(_AppLabel2.default, {
        style: STYLE.APP_LABEL,
        caption: 'Library Watch v. 0.10.0'
      }),
      _react2.default.createElement(_ToolBarButton2.default, {
        type: 'TypeA',
        caption: 'Library',
        title: 'Library Browser',
        onClick: this._handlerClickDynamic.bind(null, BrowserConfig.LIBRARY)
      }),
      _react2.default.createElement(_ToolBarButton2.default, {
        type: 'TypeA',
        caption: 'Watch',
        title: 'Watch Browser',
        onClick: this._handlerClickWatch
      }),
      _react2.default.createElement(_ToolBarButton2.default, {
        type: 'TypeA',
        style: { float: 'right', marginRight: '20px' },
        caption: 'About',
        title: 'Description about Library Watch',
        onClick: _ComponentActions2.default.showAbout
      }),
      _react2.default.createElement(_LimitRemainingLabel2.default, {
        store: store,
        style: { float: 'right', paddingTop: '5px' }
      })
    );
  }
});

exports.default = HeaderBar;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\header\HeaderBar.js.map