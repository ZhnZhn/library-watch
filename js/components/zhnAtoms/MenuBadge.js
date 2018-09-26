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

var _ButtonCircle = require('./ButtonCircle2');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "menu__badge";
//import PropTypes from 'prop-types'


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
  /*
  static propTypes = {
    counter : PropTypes.oneOfType([
                 PropTypes.number, PropTypes.string
              ]),
    isOpen : PropTypes.bool,
    onBadgeOpen : PropTypes.func,
    onBadgeClose : PropTypes.func
  }
  */

  (0, _createClass3.default)(MenuBadge, [{
    key: 'render',


    /*
    <span
       className={CL}
       style={_style}
       onClick={this._handleClickBadge}
    >
       {counter}
    </span>
    */

    value: function render() {
      var _props = this.props,
          counter = _props.counter,
          isOpen = _props.isOpen,
          _style = isOpen ? STYLE.OPEN : undefined;

      return _react2.default.createElement(_ButtonCircle2.default, {
        className: CL,
        style: _style,
        caption: counter,
        onClick: this._handleClickBadge
      });
    }
  }]);
  return MenuBadge;
}(_react.Component);

exports.default = MenuBadge;
//# sourceMappingURL=MenuBadge.js.map