"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Chart = _interopRequireDefault(require("../charts/Chart"));

var _crNpmModelMore = _interopRequireDefault(require("./crNpmModelMore"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));

var _LineChart = _interopRequireDefault(require("../charts/LineChart"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var S = {
  ROOT: {
    lineHeight: 1.5,
    marginBottom: 10,
    marginRight: 25
  },
  BT_CAPTION: {
    position: 'relative',
    top: -3,
    display: 'inline-block',
    color: '#a487d4',
    paddingLeft: 8,
    maxWidth: 500,
    textAlign: 'left',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    cursor: 'pointer'
  },
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

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: S.ROOT
    }, /*#__PURE__*/_react["default"].createElement(_ModalSlider["default"], {
      isShow: isMore,
      className: _CL["default"].MENU_MORE,
      model: this._MORE,
      onClose: this._hToggleMore
    }), /*#__PURE__*/_react["default"].createElement(_ItemCaption["default"], {
      style: S.CAPTION,
      onClose: onCloseItem
    }, /*#__PURE__*/_react["default"].createElement(_A["default"].SvgMore, {
      onClick: this._hClickMore
    }), /*#__PURE__*/_react["default"].createElement("button", {
      className: _CL["default"].BT_ITEM,
      title: caption,
      style: S.BT_CAPTION,
      onClick: this._handlerToggleOpen
    }, /*#__PURE__*/_react["default"].createElement("span", null, caption), /*#__PURE__*/_react["default"].createElement("span", {
      style: S.SPAN_START
    }, fromDate), /*#__PURE__*/_react["default"].createElement("span", null, toDate))), /*#__PURE__*/_react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow,
      style: S.CHART_WRAPER
    }, /*#__PURE__*/_react["default"].createElement(_LineChart["default"], {
      data: _lineChartConfig,
      height: _heigh
    }), /*#__PURE__*/_react["default"].createElement("a", {
      className: _CL["default"].SOURCE_LINK,
      style: S.SOURCE_LINK,
      href: sourceLink,
      target: "_blank"
    }, "StatCounter Chart")));
  };

  return NpmRecentDownloads;
}(_react.Component);

var _default = NpmRecentDownloads;
exports["default"] = _default;
//# sourceMappingURL=StatCounterShare.js.map