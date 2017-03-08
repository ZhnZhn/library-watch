'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var STYLE = {
  BROWSER: {
    paddingRight: '0'
  },
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  }
};

var MenuBrowserDynamic = function (_Component) {
  (0, _inherits3.default)(MenuBrowserDynamic, _Component);

  function MenuBrowserDynamic(props) {
    (0, _classCallCheck3.default)(this, MenuBrowserDynamic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MenuBrowserDynamic.__proto__ || Object.getPrototypeOf(MenuBrowserDynamic)).call(this));

    _this._loadMenu = function () {
      var _this$props = _this.props,
          browserType = _this$props.browserType,
          caption = _this$props.caption,
          sourceMenuUrl = _this$props.sourceMenuUrl,
          onLoadMenu = _this$props.onLoadMenu;

      onLoadMenu({ browserType: browserType, caption: caption, sourceMenuUrl: sourceMenuUrl });
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
        _this.setState({ menuItems: data.menuItems, isLoaded: true });
      } else if (actionType === updateAction && data === browserType) {
        _this.setState({ menuItems: store.getBrowserMenu(browserType) });
      }
    };

    _this._handleHide = function () {
      _this.setState({ isShow: false });
    };

    _this._handleShow = function () {
      _this.setState({ isShow: true });
    };

    _this.state = {
      isShow: !!props.isInitShow,
      isLoaded: false,
      menuItems: []
    };
    return _this;
  }

  (0, _createClass3.default)(MenuBrowserDynamic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._loadMenu();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (!nextState.isLoaded && nextState.isShow) {
        this._loadMenu();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: '_renderMenuParts',
    value: function _renderMenuParts() {
      var menuItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return menuItems.map(function (menuPart, index) {
        return _react2.default.createElement(_MenuPart2.default, (0, _extends3.default)({ key: index }, menuPart));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          children = _props.children,
          _state = this.state,
          menuItems = _state.menuItems,
          isShow = _state.isShow;


      return _react2.default.createElement(
        _Browser2.default,
        { isShow: isShow, style: STYLE.BROWSER },
        _react2.default.createElement(_CaptionRow2.default, {
          caption: caption,
          onClose: this._handleHide
        }),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: STYLE.SCROLL_DIV },
          this._renderMenuParts(menuItems),
          children
        )
      );
    }
  }]);
  return MenuBrowserDynamic;
}(_react.Component);

process.env.NODE_ENV !== "production" ? MenuBrowserDynamic.propTypes = {
  isInitShow: _react.PropTypes.bool,
  browserType: _react.PropTypes.string,
  caption: _react.PropTypes.string,
  sourceMenuUrl: _react.PropTypes.string,
  onLoadMenu: _react.PropTypes.func,

  store: _react.PropTypes.object,
  showAction: _react.PropTypes.string,
  updateAction: _react.PropTypes.string,
  loadCompletedAction: _react.PropTypes.string
} : void 0;
exports.default = MenuBrowserDynamic;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnMoleculs\MenuBrowserDynamic.js.map