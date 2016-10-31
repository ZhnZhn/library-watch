'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('../../constants/Type');

var _WatchBrowser = require('../browser-watch/WatchBrowser');

var _WatchBrowser2 = _interopRequireDefault(_WatchBrowser);

var _DialogContainer = require('../zhnContainers/DialogContainer3');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserContainer = _react2.default.createClass({
  displayName: 'BrowserContainer',
  getInitialState: function getInitialState() {
    return {
      isDoubleWatch: false,
      elBrowsers: []
    };
  },
  componentWillMount: function componentWillMount() {
    var store = this.props.store;

    this.unsubscribe = store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    var _props = this.props;
    var initBrowserAction = _props.initBrowserAction;
    var toggleWatchDbBrowserAction = _props.toggleWatchDbBrowserAction;

    if (actionType === initBrowserAction) {
      this.state.elBrowsers.unshift(data);
      this.setState(this.state);
    } else if (actionType === toggleWatchDbBrowserAction) {
      this.setState({ isDoubleWatch: !this.state.isDoubleWatch });
    }
  },
  render: function render() {
    var _props2 = this.props;
    var store = _props2.store;
    var showBrowserAction = _props2.showBrowserAction;
    var updateWatchAction = _props2.updateWatchAction;
    var initDialogAction = _props2.initDialogAction;
    var showDialogAction = _props2.showDialogAction;
    var _state = this.state;
    var isDoubleWatch = _state.isDoubleWatch;
    var elBrowsers = _state.elBrowsers;


    var _doubleWatch = isDoubleWatch ? _react2.default.createElement(_WatchBrowser2.default, {
      isShow: true,
      isEditMode: true,
      isDoubleWatch: true,
      browserType: _Type.BrowserType.WATCH_LIST,
      caption: 'Watch 2',
      store: store,
      showAction: showBrowserAction,
      updateAction: updateWatchAction
    }) : undefined;

    return _react2.default.createElement(
      'div',
      { className: 'hrz-container' },
      _react2.default.createElement(_WatchBrowser2.default, {
        browserType: _Type.BrowserType.WATCH_LIST,
        caption: 'Watch',
        store: store,
        showAction: showBrowserAction,
        updateAction: updateWatchAction
      }),
      _doubleWatch,
      elBrowsers,
      _react2.default.createElement(_DialogContainer2.default, {
        maxDialog: 3,
        store: store,
        initAction: initDialogAction,
        showAction: showDialogAction
      })
    );
  }
});

exports.default = BrowserContainer;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-container\BrowserContainer.js.map