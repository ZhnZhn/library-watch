"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _jsxRuntime = require("react/jsx-runtime");

var S_DATE_AGO = {
  color: 'gray'
},
    S_DATE = {
  display: 'inline-block',
  color: 'black',
  marginLeft: 10
},
    S_INLINE_BLOCK = {
  display: 'inline-block'
},
    S_NONE = {
  display: 'none'
};

var DateAgo = function DateAgo(_ref) {
  var isShowDate = _ref.isShowDate,
      style = _ref.style,
      dateAgo = _ref.dateAgo,
      _ref$date = _ref.date,
      date = _ref$date === void 0 ? '' : _ref$date;

  var _useToggle = (0, _useToggle2["default"])(isShowDate),
      isShow = _useToggle[0],
      toggleDateAgo = _useToggle[1],
      _hClick = (0, _react.useCallback)(function (event) {
    event.stopPropagation();
    toggleDateAgo();
  }, []),
      _styleDate = isShow ? S_INLINE_BLOCK : S_NONE;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      role: "button",
      tabIndex: "-1",
      style: (0, _extends2["default"])({}, S_DATE_AGO, style),
      onClick: date ? _hClick : void 0,
      children: dateAgo
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, S_DATE, _styleDate),
      children: date
    })]
  });
};

var _default = DateAgo;
exports["default"] = _default;
//# sourceMappingURL=DateAgo.js.map