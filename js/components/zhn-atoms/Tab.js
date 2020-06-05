"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

//import PropTypes from "prop-types";
var STYLE = {
  LI: {
    "float": 'left',
    display: 'inline-block',
    backgroundColor: '#232F3B',

    /*color : 'rgba(164, 135, 212, 1)',*/
    color: 'gray',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    //border: '2px solid rgb(44, 40, 40)',
    border: '2px solid gray',
    borderBottom: 'none' //borderTop : 'none'

  },
  SELECTED: {
    borderColor: 'rgba(164, 135, 212, 1)',
    color: 'rgba(164, 135, 212, 1)'
  }
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _style = isSelected ? STYLE.SELECTED : null;

  return /*#__PURE__*/_react["default"].createElement("li", {
    style: (0, _extends2["default"])({}, STYLE.LI, _style),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", null, title));
};
/*
Tab.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
*/


Tab.defaultProps = {
  onClick: function onClick() {}
};
var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map