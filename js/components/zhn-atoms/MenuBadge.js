"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _ButtonCircle = _interopRequireDefault(require("./ButtonCircle2"));

//import PropTypes from 'prop-types'
var CL = "menu__badge";
var STYLE = {
  OPEN: {
    color: 'rgb(164, 135, 212)'
  }
};

var MenuBadge =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(MenuBadge, _Component);

  function MenuBadge() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleClickBadge = function (event) {
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
    };

    return _this;
  }

  var _proto = MenuBadge.prototype;

  /*
  <span
     className={CL}
     style={_style}
     onClick={this._handleClickBadge}
  >
     {counter}
  </span>
  */
  _proto.render = function render() {
    var _this$props2 = this.props,
        counter = _this$props2.counter,
        isOpen = _this$props2.isOpen,
        _style = isOpen ? STYLE.OPEN : undefined;

    return _react["default"].createElement(_ButtonCircle["default"], {
      className: CL,
      style: _style,
      caption: counter,
      onClick: this._handleClickBadge
    });
  };

  return MenuBadge;
}(_react.Component);

var _default = MenuBadge;
exports["default"] = _default;
//# sourceMappingURL=MenuBadge.js.map