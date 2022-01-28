"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ButtonCircle = _interopRequireDefault(require("./ButtonCircle2"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_MENU_BADGE = "menu__badge",
    S_OPEN = {
  color: '#a487d4'
};

var MenuBadge = function MenuBadge(_ref) {
  var isOpen = _ref.isOpen,
      counter = _ref.counter,
      onBadgeOpen = _ref.onBadgeOpen,
      onBadgeClose = _ref.onBadgeClose;

  var _hClickBadge = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (isOpen) {
      onBadgeClose();
    } else {
      onBadgeOpen();
    }
  }, [isOpen, onBadgeOpen, onBadgeClose]),
      _style = isOpen ? S_OPEN : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
    className: CL_MENU_BADGE,
    style: _style,
    caption: counter,
    onClick: _hClickBadge
  });
};
/*
MenuBadge.propTypes = {
  isOpen : PropTypes.bool,
  counter : PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
  ]),
  onBadgeOpen : PropTypes.func,
  onBadgeClose : PropTypes.func
}
*/


var _default = MenuBadge;
exports["default"] = _default;
//# sourceMappingURL=MenuBadge.js.map