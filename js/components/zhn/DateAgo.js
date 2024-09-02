"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const S_DATE_AGO = {
    color: 'gray'
  },
  S_DATE = {
    ..._styleFn.S_INLINE_BLOCK,
    color: 'black',
    marginLeft: 10
  };
const DateAgo = _ref => {
  let {
    isShowDate,
    style,
    dateAgo,
    date = ''
  } = _ref;
  const [isShow, toggleDateAgo] = (0, _useToggle.default)(isShowDate, true),
    _styleDate = isShow ? _styleFn.S_INLINE_BLOCK : _styleFn.S_NONE;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      role: "button",
      tabIndex: "-1",
      style: {
        ...S_DATE_AGO,
        ...style
      },
      onClick: date ? toggleDateAgo : void 0,
      children: dateAgo
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        ...S_DATE,
        ..._styleDate
      },
      children: date
    })]
  });
};
var _default = exports.default = DateAgo;
//# sourceMappingURL=DateAgo.js.map