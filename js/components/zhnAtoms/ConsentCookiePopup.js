'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HIDE_PERIOD = 30000,
    ANIMATION_PERIOD = 1100,
    MSG = 'Library Watch uses session cookies from Google Analytics with anonymizeIp for better experience.',
    BTN_GOT_TITLE = "Got it.";

var STYLE = {
  ROOT_SHOW: {
    opacity: '0.9',
    bottom: '0px'
  },
  ROOT_HIDE: {
    display: 'none'
  }
};

var ConsentCookiePopup = _react2.default.createClass({
  displayName: 'ConsentCookiePopup',
  getInitialState: function getInitialState() {
    this.timeID = undefined;
    this.hideID = undefined;
    return {
      isOpacity: true,
      isDisplay: true
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.timeID = setTimeout(function () {
      _this._startHidingAnimation();
    }, HIDE_PERIOD);

    setTimeout(function () {
      _this.setState({ isOpacity: false });
    }, 500);
  },
  _startHidingAnimation: function _startHidingAnimation() {
    this.hideID = setTimeout(this._hidePopup, ANIMATION_PERIOD);
    this.setState({ isOpacity: true });
  },
  _hidePopup: function _hidePopup() {
    this.setState({ isDisplay: false });
  },
  _handlerClickGot: function _handlerClickGot() {
    if (!this.hideId) {
      clearTimeout(this.timeID);
      this._startHidingAnimation();
    }
  },
  render: function render() {
    var _state = this.state;
    var isOpacity = _state.isOpacity;
    var isDisplay = _state.isDisplay;
    var _opacityStyle = isOpacity ? undefined : STYLE.ROOT_SHOW;
    var _displayStyle = isDisplay ? undefined : STYLE.ROOT_HIDE;

    return _react2.default.createElement(
      'div',
      {
        className: 'consent',
        style: Object.assign({}, _opacityStyle, _displayStyle)
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
            onClick: this._handlerClickGot
          },
          BTN_GOT_TITLE
        )
      )
    );
  }
});

exports.default = ConsentCookiePopup;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\ConsentCookiePopup.js.map