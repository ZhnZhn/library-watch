"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ButtonCircle = _interopRequireDefault(require("./ButtonCircle2"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL = "menu__badge";
var S = {
  OPEN: {
    color: '#a487d4'
  }
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
      _style = isOpen ? S.OPEN : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle["default"], {
    className: CL,
    style: _style,
    caption: counter,
    onClick: _hClickBadge
  });
};
/*
MenuBadge.propTypes = {
  isOpen : PropTypes.bool,
  counter : PropTypes.oneOfType([
      PropTypes.number, PropTypes.string
  ]),
  onBadgeOpen : PropTypes.func,
  onBadgeClose : PropTypes.func
}
*/


var _default = MenuBadge;
exports["default"] = _default;
//# sourceMappingURL=MenuBadge.js.map