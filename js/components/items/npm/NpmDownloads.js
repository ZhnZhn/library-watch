"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../../utils/isTypeFn");
var _uiApi = require("../../uiApi");
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _useItemMenuMore = _interopRequireDefault(require("../useItemMenuMore"));
var _ChartConfigFactories = require("../../charts/ChartConfigFactories");
var _ShowHide = _interopRequireDefault(require("../../zhn/ShowHide"));
var _ChartComponent = require("../../charts/ChartComponent");
var _ButtonPackage = _interopRequireDefault(require("./ButtonPackage"));
var _ButtonWatch = _interopRequireDefault(require("./ButtonWatch"));
var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));
var _NpmPackageInfo = _interopRequireDefault(require("./NpmPackageInfo"));
var _Item = require("../Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const ITEM_DESCRIPTION = "Npm Recent Month Downloads",
  S_CAPTION = {
    paddingLeft: 4
  },
  S_CHART_WRAPPER = {
    paddingTop: 4
  };
const NpmDownloads = _ref => {
  let {
    type,
    options,
    chartType,
    caption,
    packageName,
    requestType,
    sumDownloads = 0,
    toDate,
    fromDate,
    chartConfig,
    labels,
    data,
    height,
    packageLink,
    onWatchItem,
    onMoveToTop,
    onCloseItem
  } = _ref;
  const [isShow, toggleIsShow] = (0, _useToggle.default)(true),
    [isButtons, toggleIsButtons] = (0, _useToggle.default)(true),
    [MenuMoreEl, BtMenuMoreEl] = (0, _useItemMenuMore.default)(onMoveToTop, toggleIsButtons)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickWatch = (0, _uiApi.useCallback)(() => {
      const _caption = `${packageName} ${sumDownloads}`;
      onWatchItem({
        caption: _caption,
        config: {
          requestType,
          repo: packageName,
          descr: ITEM_DESCRIPTION,
          version: sumDownloads,
          caption: _caption,
          date: toDate
        }
      });
    }, [])
    // requestType, packageName, sumDownloads, toDate, onWatchItem
    /*eslint-enable react-hooks/exhaustive-deps */,
    _lineChartConfig = chartConfig || (0, _ChartConfigFactories.fLineConfig)({
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
      }), (0, _isTypeFn.isFn)(onWatchItem) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonWatch.default, {
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
      isShow: isShow,
      style: S_CHART_WRAPPER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ChartComponent.ChartComponent, {
        type: type,
        height: height,
        data: _lineChartConfig,
        options: options || _Item.CHART_OPTIONS_LEGEND_TOP
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NpmPackageInfo.default, {
        isButtons: isButtons,
        packageName: packageName,
        packageLink: packageLink
      })]
    })]
  });
};
var _default = exports.default = NpmDownloads;
//# sourceMappingURL=NpmDownloads.js.map