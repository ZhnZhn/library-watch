"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Type = require("../../constants/Type");

var _WatchBrowser = _interopRequireDefault(require("../browser-watch/WatchBrowser"));

var _DialogContainer = _interopRequireDefault(require("../zhn-containers/DialogContainer3"));

//import PropTypes from 'props-type'
var CL = "hrz-container";

var BrowserContainer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(BrowserContainer, _Component);

  function BrowserContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isDoubleWatch: false,
      elBrowsers: []
    };

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          initBrowserAction = _this$props.initBrowserAction,
          toggleWatchDbBrowserAction = _this$props.toggleWatchDbBrowserAction;

      if (actionType === initBrowserAction) {
        _this.state.elBrowsers.unshift(data);

        _this.setState(_this.state);
      } else if (actionType === toggleWatchDbBrowserAction) {
        _this.setState({
          isDoubleWatch: !_this.state.isDoubleWatch
        });
      }
    };

    _this._renderEl = function (elBrowsers) {
      return elBrowsers.map(function (el) {
        return /*#__PURE__*/_react["default"].cloneElement(el);
      });
    };

    return _this;
  }

  var _proto = BrowserContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var store = this.props.store;
    this.unsubscribe = store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        store = _this$props2.store,
        showBrowserAction = _this$props2.showBrowserAction,
        updateWatchAction = _this$props2.updateWatchAction,
        initDialogAction = _this$props2.initDialogAction,
        showDialogAction = _this$props2.showDialogAction,
        _this$state = this.state,
        isDoubleWatch = _this$state.isDoubleWatch,
        elBrowsers = _this$state.elBrowsers,
        _doubleWatch = isDoubleWatch ? /*#__PURE__*/_react["default"].createElement(_WatchBrowser["default"], {
      isShow: true,
      isEditMode: true,
      isDoubleWatch: true,
      browserType: _Type.BrowserType.WATCH_LIST,
      caption: "Watch 2",
      store: store,
      showAction: showBrowserAction,
      updateAction: updateWatchAction
    }) : null;

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: CL
    }, /*#__PURE__*/_react["default"].createElement(_WatchBrowser["default"], {
      browserType: _Type.BrowserType.WATCH_LIST,
      caption: "Watch",
      store: store,
      showAction: showBrowserAction,
      updateAction: updateWatchAction
    }), _doubleWatch, this._renderEl(elBrowsers), /*#__PURE__*/_react["default"].createElement(_DialogContainer["default"], {
      maxDialog: 3,
      store: store,
      initAction: initDialogAction,
      showAction: showDialogAction
    }));
  };

  return BrowserContainer;
}(_react.Component);

var _default = BrowserContainer;
exports["default"] = _default;
//# sourceMappingURL=BrowserContainer.js.map