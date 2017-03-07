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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_CLASS = "menu__badge";

var STYLE = {
  OPEN: {
    color: 'rgb(164, 135, 212)'
  }
};

var MenuBadge = function (_Component) {
  (0, _inherits3.default)(MenuBadge, _Component);

  function MenuBadge() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuBadge.__proto__ || Object.getPrototypeOf(MenuBadge)).call.apply(_ref, [this].concat(args))), _this), _this._handleClickBadge = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onBadgeOpen = _this$props.onBadgeOpen,
          onBadgeClose = _this$props.onBadgeClose;

      if (isOpen) {
        onBadgeClose();
      } else {
        onBadgeOpen();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuBadge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          counter = _props.counter,
          isOpen = _props.isOpen,
          _style = isOpen ? STYLE.OPEN : null;

      return _react2.default.createElement(
        'span',
        {
          className: ROOT_CLASS,
          style: _style,
          onClick: this._handleClickBadge
        },
        counter
      );
    }
  }]);
  return MenuBadge;
}(_react.Component);

process.env.NODE_ENV !== "production" ? MenuBadge.propTypes = {
  counter: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  isOpen: _react.PropTypes.bool,
  onBadgeOpen: _react.PropTypes.func,
  onBadgeClose: _react.PropTypes.func
} : void 0;
exports.default = MenuBadge;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnAtoms\MenuBadge.js.map