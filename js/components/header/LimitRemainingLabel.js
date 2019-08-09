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

var WITHOUT_LIMIT = '';
var S = {
  LABEL: {
    position: 'relative',
    top: 4,
    display: 'inline-block',
    color: '#2f7ed8',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var LimitRemainingLabel = function (_Component) {
  (0, _inherits3.default)(LimitRemainingLabel, _Component);

  function LimitRemainingLabel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LimitRemainingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LimitRemainingLabel.__proto__ || Object.getPrototypeOf(LimitRemainingLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this._onStore = function (value) {
      if (!(value == null)) {
        _this.setState({ value: value });
      } else if (_this.state.value !== WITHOUT_LIMIT) {
        _this.setState({ value: WITHOUT_LIMIT });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LimitRemainingLabel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var store = this.props.store;

      this.unsubscribe = store.listenLimitRemaining(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style,
          value = this.state.value;


      return _react2.default.createElement(
        'span',
        { style: (0, _extends3.default)({}, S.LABEL, style) },
        value
      );
    }
  }]);
  return LimitRemainingLabel;
}(_react.Component);

exports.default = LimitRemainingLabel;
//# sourceMappingURL=LimitRemainingLabel.js.map