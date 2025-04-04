"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../../styleFn");
var _Item = require("../Item.Style");
var _FormattedInteger = _interopRequireDefault(require("../../zhn/FormattedInteger"));
var _jsxRuntime = require("react/jsx-runtime");
const _S_CAPTION_OPEN = {
    ..._Item.S_CAPTION_OPEN,
    position: 'relative',
    top: -3
  },
  S_SPAN_SUM = {
    color: '#80c040',
    padding: '0 10px'
  },
  S_SPAN_FD = {
    paddingRight: 10
  };
const ButtonPackage = _ref => {
  let {
    style,
    caption,
    packageName,
    sumDownloads,
    fromDate,
    toDate,
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    className: _styleFn.CL_BT_ITEM,
    style: {
      ..._S_CAPTION_OPEN,
      ...style
    },
    title: caption,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: packageName
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormattedInteger.default, {
      style: S_SPAN_SUM,
      value: sumDownloads
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_SPAN_FD,
      children: fromDate
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: toDate
    })]
  });
};
var _default = exports.default = ButtonPackage;
//# sourceMappingURL=ButtonPackage.js.map