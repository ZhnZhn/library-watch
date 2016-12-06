'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Browser = require('../zhnAtoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _CaptionRow = require('../zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _ScrollPane = require('../zhnAtoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styles = {
  browser: {
    paddingRight: '0'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  }
};

var MenuBrowserDynamic = _react2.default.createClass({
  displayName: 'MenuBrowserDynamic',
  getInitialState: function getInitialState() {
    var isInitShow = this.props.isInitShow;

    return {
      isShow: isInitShow ? true : false,
      isLoaded: false,
      menuItems: []
    };
  },
  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentDidMount: function componentDidMount() {
    this._loadMenu();
  },
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (!nextState.isLoaded && nextState.isShow) {
      this._loadMenu();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _loadMenu: function _loadMenu() {
    var _props = this.props,
        browserType = _props.browserType,
        caption = _props.caption,
        sourceMenuUrl = _props.sourceMenuUrl,
        onLoadMenu = _props.onLoadMenu;

    onLoadMenu({ browserType: browserType, caption: caption, sourceMenuUrl: sourceMenuUrl });
  },


  _onStore: function _onStore(actionType, data) {
    var _props2 = this.props,
        browserType = _props2.browserType,
        store = _props2.store,
        showAction = _props2.showAction,
        updateAction = _props2.updateAction,
        loadCompletedAction = _props2.loadCompletedAction;

    if (actionType === showAction && data === browserType) {
      this._handlerShow();
    } else if (actionType === loadCompletedAction && data.browserType === browserType) {
      this.setState({ menuItems: data.menuItems, isLoaded: true });
    } else if (actionType === updateAction && data === browserType) {
      this.setState({ menuItems: store.getBrowserMenu(browserType) });
    }
  },

  _handlerHide: function _handlerHide() {
    this.setState({ isShow: false });
  },
  _handlerShow: function _handlerShow() {
    this.setState({ isShow: true });
  },

  _renderMenuParts: function _renderMenuParts() {
    var menuItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return menuItems.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, _extends({ key: index }, menuPart));
    });
  },
  render: function render() {
    var _props3 = this.props,
        caption = _props3.caption,
        children = _props3.children,
        _state = this.state,
        menuItems = _state.menuItems,
        isShow = _state.isShow;


    return _react2.default.createElement(
      _Browser2.default,
      { isShow: isShow, style: Styles.browser },
      _react2.default.createElement(_CaptionRow2.default, {
        caption: caption,
        onClose: this._handlerHide
      }),
      _react2.default.createElement(
        _ScrollPane2.default,
        { style: Styles.scrollDiv },
        this._renderMenuParts(menuItems),
        children
      )
    );
  }
});

exports.default = MenuBrowserDynamic;
//# sourceMappingURL=MenuBrowserDynamic.js.map