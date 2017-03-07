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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HIDE_PERIOD = 30000,
    ANIMATION_PERIOD = 1100,
    MSG = 'Library Watch uses session cookies from Google Analytics with anonymizeIp for better experience.',
    BTN_GOT_TITLE = "Got it.";

var STYLE = {
  SHOW: {
    opacity: '0.9',
    bottom: '0px'
  },
  HIDE: {
    display: 'none'
  }
};

var ConsentCookiePopup = function (_Component) {
  (0, _inherits3.default)(ConsentCookiePopup, _Component);

  function ConsentCookiePopup(props) {
    (0, _classCallCheck3.default)(this, ConsentCookiePopup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConsentCookiePopup.__proto__ || Object.getPrototypeOf(ConsentCookiePopup)).call(this));

    _this._startHidingAnimation = function () {
      _this.hideID = setTimeout(_this._hidePopup, ANIMATION_PERIOD);
      _this.setState({ isOpacity: true });
    };

    _this._hidePopup = function () {
      _this.setState({ isDisplay: false });
    };

    _this._handleClickGot = function () {
      if (!_this.hideId) {
        clearTimeout(_this.timeID);
        _this._startHidingAnimation();
      }
    };

    _this.timeID = undefined;
    _this.hideID = undefined;
    _this.state = {
      isOpacity: true,
      isDisplay: true
    };
    return _this;
  }

  (0, _createClass3.default)(ConsentCookiePopup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timeID = setTimeout(function () {
        _this2._startHidingAnimation();
      }, HIDE_PERIOD);

      setTimeout(function () {
        _this2.setState({ isOpacity: false });
      }, 500);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isOpacity = _state.isOpacity,
          isDisplay = _state.isDisplay,
          _opacityStyle = isOpacity ? undefined : STYLE.SHOW,
          _displayStyle = isDisplay ? undefined : STYLE.HIDE;

      return _react2.default.createElement(
        'div',
        {
          className: 'consent',
          style: (0, _extends3.default)({}, _opacityStyle, _displayStyle)
        },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            { className: 'consent__msg' },
            MSG
          ),
          _react2.default.createElement(
            'span',
            {
              className: 'consent__btn',
              onClick: this._handleClickGot
            },
            BTN_GOT_TITLE
          )
        )
      );
    }
  }]);
  return ConsentCookiePopup;
}(_react.Component);

exports.default = ConsentCookiePopup;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ConsentCookiePopup.js.map