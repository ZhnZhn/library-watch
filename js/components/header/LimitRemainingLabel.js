"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

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

var LimitRemainingLabel = function LimitRemainingLabel(_ref) {
  var style = _ref.style,
      store = _ref.store;

  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  (0, _useListen["default"])(store, function (limitValue) {
    var _value = limitValue != null ? limitValue : WITHOUT_LIMIT;

    setValue(_value);
  }, 'listenLimitRemaining');
  return /*#__PURE__*/React.createElement("span", {
    style: (0, _extends2["default"])({}, S.LABEL, style)
  }, value);
};

var _default = LimitRemainingLabel;
exports["default"] = _default;
//# sourceMappingURL=LimitRemainingLabel.js.map