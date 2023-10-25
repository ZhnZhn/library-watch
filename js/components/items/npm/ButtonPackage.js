"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("../../styles/CL");
var _Item = _interopRequireDefault(require("../Item.Style"));
var _A = _interopRequireDefault(require("../../zhn-atoms/A"));
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION_OPEN = {
    ..._Item.default.CAPTION_OPEN,
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
    caption,
    packageName,
    sumDownloads,
    fromDate,
    toDate,
    onClick
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    className: _CL.CL_BT_ITEM,
    style: S_CAPTION_OPEN,
    title: caption,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: packageName
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.FormattedInteger, {
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