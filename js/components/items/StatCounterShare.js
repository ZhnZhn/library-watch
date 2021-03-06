"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _Chart = _interopRequireDefault(require("../charts/Chart"));

var _crNpmModelMore = _interopRequireDefault(require("./crNpmModelMore"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));

var _LineChart = _interopRequireDefault(require("../charts/LineChart"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ROOT: _Item["default"].ROOT,
  BT_MORE: _Item["default"].BT_MORE,
  BT_CAPTION: (0, _extends2["default"])({}, _Item["default"].CAPTION_OPEN, {
    position: 'relative',
    top: -3
  }),
  CAPTION: {
    paddingLeft: 4
  },
  SPAN_SUM: {
    color: '#80c040',
    paddingLeft: 10,
    paddingRight: 10
  },
  SPAN_START: {
    paddingLeft: 10,
    paddingRight: 10
  },
  BTN_CIRCLE: {
    position: 'relative',
    top: -6,
    marginLeft: 10
  },
  CHART_WRAPER: {
    paddingTop: 12
  },
  BUTTON_DOWN_UP: {
    paddingTop: 4,
    paddingBottom: 4
  },
  SOURCE_LINK: {
    marginTop: 4,
    marginLeft: 16
  }
};

var NpmRecentDownloads = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NpmRecentDownloads, _Component);

  function NpmRecentDownloads(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClickMore = function () {
      _this.setState({
        isMore: true
      });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._handlerToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    var onMoveToTop = props.onMoveToTop;
    _this._MORE = (0, _crNpmModelMore["default"])({
      onMoveToTop: onMoveToTop
    });
    _this.state = {
      isShow: true,
      isMore: false
    };
    return _this;
  }

  var _proto = NpmRecentDownloads.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        fromDate = _this$props.fromDate,
        toDate = _this$props.toDate,
        labels = _this$props.labels,
        data = _this$props.data,
        sourceLink = _this$props.sourceLink,
        onCloseItem = _this$props.onCloseItem,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        _lineChartConfig = _Chart["default"].fLineConfigs({
      labels: labels,
      data: data
    }),
        _numSeries = _lineChartConfig.datasets.length,
        _heigh = 150 + Math.floor(_numSeries / 5) * 16;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider["default"], {
        isShow: isMore,
        className: _CL["default"].MENU_MORE,
        model: this._MORE,
        onClose: this._hToggleMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption["default"], {
        style: S.CAPTION,
        onClose: onCloseItem,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].SvgMore, {
          style: S.BT_MORE,
          onClick: this._hClickMore
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          className: _CL["default"].BT_ITEM,
          title: caption,
          style: S.BT_CAPTION,
          onClick: this._handlerToggleOpen,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: caption
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.SPAN_START,
            children: fromDate
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: toDate
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A["default"].ShowHide, {
        isShow: isShow,
        style: S.CHART_WRAPER,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart["default"], {
          data: _lineChartConfig,
          height: _heigh
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          className: _CL["default"].SOURCE_LINK,
          style: S.SOURCE_LINK,
          href: sourceLink,
          target: "_blank",
          children: "StatCounter Chart"
        })]
      })]
    });
  };

  return NpmRecentDownloads;
}(_react.Component);

var _default = NpmRecentDownloads;
exports["default"] = _default;
//# sourceMappingURL=StatCounterShare.js.map