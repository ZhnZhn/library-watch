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

var _BrowserActions = require('../../flux/actions/BrowserActions');

var _BrowserActions2 = _interopRequireDefault(_BrowserActions);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Type = require('../../constants/Type');

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _LoadingProgress = require('./LoadingProgress');

var _LoadingProgress2 = _interopRequireDefault(_LoadingProgress);

var _IconAppLogo = require('./IconAppLogo');

var _IconAppLogo2 = _interopRequireDefault(_IconAppLogo);

var _AppLabel = require('./AppLabel');

var _AppLabel2 = _interopRequireDefault(_AppLabel);

var _ButtonSave = require('../zhn-moleculs/ButtonSave');

var _ButtonSave2 = _interopRequireDefault(_ButtonSave);

var _LimitRemainingLabel = require('./LimitRemainingLabel');

var _LimitRemainingLabel2 = _interopRequireDefault(_LimitRemainingLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = "Library Watch v0.12.0";
var CL = {
  HEADER: "header",
  ICON: "header__icon-app",
  ABOUT: "header__bt-about",
  APP_LABEL: "header__app-label",
  LIBRARY: "header__bt-library"
};
var S = {
  ROOT_DIV: {
    position: 'relative',
    zIndex: 50
  },
  BT_ABOUT: {
    float: 'right',
    marginRight: 20
  },
  BUTTON_SAVE: {
    marginLeft: 10
  },
  LABEL_LIMIT: {
    float: 'right',
    paddingTop: 5
  }
};

var BrowserConfig = {
  LIBRARY: {
    browserType: _Type.BrowserType.LIBRARY,
    caption: 'Library',
    sourceMenuUrl: './data/github/source-menu.json',
    rowClass: 'row__library'
  }
};

var HeaderBar = function (_Component) {
  (0, _inherits3.default)(HeaderBar, _Component);

  function HeaderBar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).call.apply(_ref, [this].concat(args))), _this), _this._handleClickDynamic = function (browserConfig) {
      _BrowserActions2.default.showBrowserDynamic(browserConfig);
    }, _this._handleClickWatch = function () {
      _BrowserActions2.default.showBrowser(_Type.BrowserType.WATCH_LIST);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderBar, [{
    key: 'render',
    value: function render() {
      var store = this.props.store;

      return _react2.default.createElement(
        'div',
        { className: CL.HEADER, style: S.ROOT_DIV },
        _react2.default.createElement(_LoadingProgress2.default, { store: store }),
        _react2.default.createElement(_IconAppLogo2.default, {
          className: CL.ICON,
          title: TITLE
        }),
        _react2.default.createElement(_AppLabel2.default, {
          className: CL.APP_LABEL,
          caption: TITLE
        }),
        _react2.default.createElement(_FlatButton2.default, {
          className: CL.LIBRARY,
          caption: 'Library',
          title: 'Click to show library browser',
          accessKey: 'l',
          timeout: 0,
          onClick: this._handleClickDynamic.bind(null, BrowserConfig.LIBRARY)
        }),
        _react2.default.createElement(_FlatButton2.default, {
          caption: 'Watch',
          title: 'Click to show watch browser',
          accessKey: 'w',
          timeout: 0,
          onClick: this._handleClickWatch
        }),
        _react2.default.createElement(_ButtonSave2.default, {
          store: store,
          style: S.BUTTON_SAVE
        }),
        _react2.default.createElement(_FlatButton2.default, {
          className: CL.ABOUT,
          rootStyle: S.BT_ABOUT,
          caption: 'About',
          title: 'Click to show about description',
          accessKey: 'a',
          timeout: 0,
          onClick: _ComponentActions2.default.showAbout
        }),
        _react2.default.createElement(_LimitRemainingLabel2.default, {
          store: store,
          style: S.LABEL_LIMIT
        })
      );
    }
  }]);
  return HeaderBar;
}(_react.Component);

exports.default = HeaderBar;
//# sourceMappingURL=HeaderBar.js.map