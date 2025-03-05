"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../../styleFn");
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _useItemMenuMore = _interopRequireDefault(require("../useItemMenuMore"));
var _ChartConfigFactories = require("../../charts/ChartConfigFactories");
var _ChartComponent = require("../../charts/ChartComponent");
var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));
var _ButtonPackage = _interopRequireDefault(require("../npm/ButtonPackage"));
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _Link = _interopRequireDefault(require("../../zhn/Link"));
var _Item = require("../Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION = {
    paddingLeft: 4
  },
  S_CHART_WRAPPER = {
    paddingTop: 4
  };
const CrateDownloads = _ref => {
  let {
    type,
    options,
    caption,
    packageName,
    sumDownloads,
    fromDate,
    toDate,
    labels,
    data,
    sourceLink,
    onMoveToTop,
    onCloseItem
  } = _ref;
  const [isShow, toggleIsShow] = (0, _useToggle.default)(true),
    [MenuMoreEl, BtMenuMoreEl] = (0, _useItemMenuMore.default)(onMoveToTop),
    _lineChartConfig = (0, _ChartConfigFactories.fLineConfigs)({
      labels,
      data
    });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [MenuMoreEl, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: S_CAPTION,
      onClose: onCloseItem,
      children: [BtMenuMoreEl, /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPackage.default, {
        caption: caption,
        packageName: packageName,
        sumDownloads: sumDownloads,
        fromDate: fromDate,
        toDate: toDate,
        onClick: toggleIsShow
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
      isShow: isShow,
      style: S_CHART_WRAPPER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ChartComponent.ChartComponent, {
        type: type,
        data: _lineChartConfig,
        options: options || _Item.CHART_OPTIONS_LEGEND_TOP
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        className: _styleFn.CL_SOURCE_LINK,
        style: _Item.S_SOURCE_LINK,
        href: sourceLink,
        children: `Crates.io ${packageName}`
      })]
    })]
  });
};
var _default = exports.default = CrateDownloads;
//# sourceMappingURL=CrateDownloads.js.map