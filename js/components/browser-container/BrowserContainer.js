'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Type = require('../../constants/Type');

var _WatchBrowser = require('../browser-watch/WatchBrowser');

var _WatchBrowser2 = _interopRequireDefault(_WatchBrowser);

var _DialogContainer = require('../zhnContainers/DialogContainer3');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const BrowserContainer = React.createClass({
var BrowserContainer = function (_Component) {
  (0, _inherits3.default)(BrowserContainer, _Component);

  function BrowserContainer(props) {
    (0, _classCallCheck3.default)(this, BrowserContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BrowserContainer.__proto__ || Object.getPrototypeOf(BrowserContainer)).call(this));

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          initBrowserAction = _this$props.initBrowserAction,
          toggleWatchDbBrowserAction = _this$props.toggleWatchDbBrowserAction;

      if (actionType === initBrowserAction) {
        _this.state.elBrowsers.unshift(data);
        _this.setState(_this.state);
      } else if (actionType === toggleWatchDbBrowserAction) {
        _this.setState({ isDoubleWatch: !_this.state.isDoubleWatch });
      }
    };

    _this.state = {
      isDoubleWatch: false,
      elBrowsers: []
    };
    return _this;
  }
  /*
  getInitialState(){
    return {
      isDoubleWatch : false,
      elBrowsers : []
    }
  },
  */


  (0, _createClass3.default)(BrowserContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var store = this.props.store;

      this.unsubscribe = store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          showBrowserAction = _props.showBrowserAction,
          updateWatchAction = _props.updateWatchAction,
          initDialogAction = _props.initDialogAction,
          showDialogAction = _props.showDialogAction,
          _state = this.state,
          isDoubleWatch = _state.isDoubleWatch,
          elBrowsers = _state.elBrowsers;


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
  }]);
  return BrowserContainer;
}(_react.Component);
//});

process.env.NODE_ENV !== "production" ? BrowserContainer.propTypes = {
  store: _react.PropTypes.shape({
    listen: _react.PropTypes.func
  }),
  initBrowserAction: _react.PropTypes.string,
  showBrowserAction: _react.PropTypes.string,
  showDialogAction: _react.PropTypes.string,
  updateWatchAction: _react.PropTypes.string,
  toggleWatchDbBrowserAction: _react.PropTypes.string
} : void 0;
exports.default = BrowserContainer;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-container\BrowserContainer.js.map