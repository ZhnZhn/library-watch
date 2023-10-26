"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _useToggle = _interopRequireDefault(require("../../hooks/useToggle"));
var _useMenuMore = _interopRequireDefault(require("../../hooks/useMenuMore"));
var _ChartConfigFactories = require("../../charts/ChartConfigFactories");
var _crNpmModelMore = _interopRequireDefault(require("../crNpmModelMore"));
var _A = _interopRequireDefault(require("../../zhn-atoms/A"));
var _ModalSlider = _interopRequireDefault(require("../../zhn-modal-slider/ModalSlider"));
var _LineChart = _interopRequireDefault(require("../../charts/LineChart"));
var _ButtonPackage = _interopRequireDefault(require("./ButtonPackage"));
var _ButtonWatch = _interopRequireDefault(require("./ButtonWatch"));
var _ItemCaption = _interopRequireDefault(require("../ItemCaption"));
var _NpmPackageInfo = _interopRequireDefault(require("./NpmPackageInfo"));
var _CL = require("../../styles/CL");
var _Item = require("../Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const ITEM_DESCRIPTION = "Npm Recent Month Downloads",
  S_CAPTION = {
    paddingLeft: 4
  },
  S_CHART_WRAPPER = {
    paddingTop: 4
  },
  CHART_OPTIONS = {
    legend: {
      position: 'top'
    }
  };
const _isFn = fn => typeof fn === 'function';
const NpmDownloads = _ref => {
  let {
    caption,
    packageName,
    requestType,
    sumDownloads = 0,
    toDate,
    fromDate,
    labels,
    data,
    packageLink,
    onWatchItem,
    onMoveToTop,
    onCloseItem
  } = _ref;
  const [isShow, toggleIsShow] = (0, _useToggle.default)(true),
    [isButtons, toggleIsButtons] = (0, _useToggle.default)(true),
    [_MENU_MODEL, isMenuMore, toggleIsMenuMore, setIsMenuMore] = (0, _useMenuMore.default)(_crNpmModelMore.default, {
      onMoveToTop,
      onToggleButtons: toggleIsButtons
    })
    /*eslint-disable react-hooks/exhaustive-deps */,
    _showMenuMore = (0, _uiApi.useCallback)(() => {
      setIsMenuMore(true);
    }, [])
    // toggleIsMore
    ,
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
    _lineChartConfig = (0, _ChartConfigFactories.fLineConfig)({
      labels,
      data
    });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
      isShow: isMenuMore,
      className: _CL.CL_MENU_MORE,
      model: _MENU_MODEL,
      onClose: toggleIsMenuMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: S_CAPTION,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.SvgMore, {
        style: _Item.S_BT_MORE,
        onClick: _showMenuMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPackage.default, {
        caption: caption,
        packageName: packageName,
        sumDownloads: sumDownloads,
        fromDate: fromDate,
        toDate: toDate,
        onClick: toggleIsShow
      }), _isFn(onWatchItem) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonWatch.default, {
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A.default.ShowHide, {
      isShow: isShow,
      style: S_CHART_WRAPPER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
        data: _lineChartConfig,
        options: CHART_OPTIONS
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