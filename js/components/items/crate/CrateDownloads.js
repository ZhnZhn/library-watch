"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _ChartConfigFactories = require("../../charts/ChartConfigFactories");
var _LineChart = _interopRequireDefault(require("../../charts/LineChart"));
var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));
var _ButtonPackage = _interopRequireDefault(require("../npm/ButtonPackage"));
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _Item = require("../Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_CAPTION = {
    paddingLeft: 4
  },
  S_BT_PACKAGE = {
    top: 4
  },
  S_CHART_WRAPPER = {
    paddingTop: 4
  },
  CHART_OPTIONS = {
    legend: {
      position: "top"
    }
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
    onCloseItem
  } = _ref;
  const [isShow, toggleIsShow] = (0, _useToggle.default)(true),
    _lineChartConfig = (0, _ChartConfigFactories.fLineConfig)({
      labels,
      data
    });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemCaption.default, {
      style: S_CAPTION,
      onClose: onCloseItem,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPackage.default, {
        style: S_BT_PACKAGE,
        caption: caption,
        packageName: packageName,
        sumDownloads: sumDownloads,
        fromDate: fromDate,
        toDate: toDate,
        onClick: toggleIsShow
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      style: S_CHART_WRAPPER,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
        type: type,
        data: _lineChartConfig,
        options: options || CHART_OPTIONS
      })
    })]
  });
};
var _default = exports.default = CrateDownloads;
//# sourceMappingURL=CrateDownloads.js.map