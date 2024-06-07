"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useMenuMore = _interopRequireDefault(require("../hooks/useMenuMore"));
var _ChartConfigFactories = require("../charts/ChartConfigFactories");
var _crNpmModelMore = _interopRequireDefault(require("./crNpmModelMore"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _LineChart = _interopRequireDefault(require("../charts/LineChart"));
var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT_CAPTION = {
    ..._Item.S_CAPTION_OPEN,
    position: 'relative',
    top: -3
  },
  S_CAPTION = {
    paddingLeft: 4
  },
  S_SPAN_START = {
    padding: "0 10px"
  },
  S_CHART_WRAPER = {
    paddingTop: 12
  },
  S_SOURCE_LINK = {
    margin: "4px 0 0 16px"
  };
const _crChartConfig = (labels, data) => {
  const _lineChartConfig = (0, _ChartConfigFactories.fLineConfigs)({
      labels,
      data
    }),
    _numSeries = _lineChartConfig.datasets.length,
    _height = 150 + Math.floor(_numSeries / 5) * 16;
  return [_lineChartConfig, _height];
};
const StatCounterShare = _ref => {
  let {
    caption,
    fromDate,
    toDate,
    labels,
    data,
    sourceLink,
    onMoveToTop,
    onCloseItem
  } = _ref;
  const [_isShow, _toggleIsShow] = (0, _useToggle.default)(true),
    [_MODAL_SLIDER_MODEL, _isMenuMore, _toggleMenuMore, _showMenuMore] = (0, _useMenuMore.default)(_crNpmModelMore.default, {
      onMoveToTop
    }),
    [_lineChartConfig, _height] = _crChartConfig(labels, data);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
      isShow: _isMenuMore,
      className: _CL.CL_MENU_MORE,
      model: _MODAL_SLIDER_MODEL,
      onClose: _toggleMenuMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: S_CAPTION,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore.default, {
        style: _Item.S_BT_MORE,
        onClick: _showMenuMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL.CL_BT_ITEM,
        title: caption,
        style: S_BT_CAPTION,
        onClick: _toggleIsShow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: caption
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_SPAN_START,
          children: fromDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: toDate
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
      isShow: _isShow,
      style: S_CHART_WRAPER,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart.default, {
        data: _lineChartConfig,
        height: _height
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        className: _CL.CL_SOURCE_LINK,
        style: S_SOURCE_LINK,
        href: sourceLink,
        children: "StatCounter Chart"
      })]
    })]
  });
};
var _default = exports.default = StatCounterShare;
//# sourceMappingURL=StatCounterShare.js.map