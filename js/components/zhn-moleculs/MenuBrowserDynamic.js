"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));

var _CaptionRow = _interopRequireDefault(require("../zhn-atoms/CaptionRow"));

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var _jsxRuntime = require("react/jsx-runtime");

var S_BROWSER = {
  paddingRight: 0
},
    S_SCROLL_DIV = {
  overflowY: 'auto',
  height: '92%',
  //height: 'calc(100vh - 90px)',
  paddingRight: 10
};

var MenuBrowserDynamic = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MenuBrowserDynamic, _Component);

  /*
  static propTypes = {
    isInitShow: PropTypes.bool,
    browserType: PropTypes.string,
    caption: PropTypes.string,
    sourceMenuUrl: PropTypes.string,
    onLoadMenu: PropTypes.func,
      store: PropTypes.object,
    showAction: PropTypes.string,
    updateAction: PropTypes.string,
    loadCompletedAction: PropTypes.string
  }
  */
  function MenuBrowserDynamic(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._loadMenu = function () {
      var _this$props = _this.props,
          browserType = _this$props.browserType,
          caption = _this$props.caption,
          sourceMenuUrl = _this$props.sourceMenuUrl,
          onLoadMenu = _this$props.onLoadMenu;
      onLoadMenu({
        browserType: browserType,
        caption: caption,
        sourceMenuUrl: sourceMenuUrl
      });
    };

    _this._onStore = function (actionType, data) {
      var _this$props2 = _this.props,
          browserType = _this$props2.browserType,
          store = _this$props2.store,
          showAction = _this$props2.showAction,
          updateAction = _this$props2.updateAction,
          loadCompletedAction = _this$props2.loadCompletedAction;

      if (actionType === showAction && data === browserType) {
        _this._handleShow();
      } else if (actionType === loadCompletedAction && data.browserType === browserType) {
        _this.setState({
          menuItems: data.menuItems,
          isLoaded: true
        });
      } else if (actionType === updateAction && data === browserType) {
        _this.setState({
          menuItems: store.getBrowserMenu(browserType)
        });
      }
    };

    _this._handleHide = function () {
      _this.setState({
        isShow: false
      });
    };

    _this._handleShow = function () {
      _this.setState({
        isShow: true
      });
    };

    _this.state = {
      isShow: !!props.isInitShow,
      isLoaded: false,
      menuItems: []
    };
    return _this;
  }

  var _proto = MenuBrowserDynamic.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);

    this._loadMenu();
  };

  _proto.UNSAFE_componentWillUpdate = function UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (!nextState.isLoaded && nextState.isShow) {
      this._loadMenu();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto._renderMenuParts = function _renderMenuParts(rowClass, menuItems) {
    if (menuItems === void 0) {
      menuItems = [];
    }

    return menuItems.map(function (menuPart, index) {
      return /*#__PURE__*/(0, _react.createElement)(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, {
        key: index,
        rowClass: rowClass
      }));
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        caption = _this$props3.caption,
        children = _this$props3.children,
        rowClass = _this$props3.rowClass,
        _this$state = this.state,
        menuItems = _this$state.menuItems,
        isShow = _this$state.isShow;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Browser["default"], {
      isShow: isShow,
      style: S_BROWSER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionRow["default"], {
        caption: caption,
        onClose: this._handleHide
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ScrollPane["default"], {
        style: S_SCROLL_DIV,
        children: [this._renderMenuParts(rowClass, menuItems), children]
      })]
    });
  };

  return MenuBrowserDynamic;
}(_react.Component);

var _default = MenuBrowserDynamic;
exports["default"] = _default;
//# sourceMappingURL=MenuBrowserDynamic.js.map