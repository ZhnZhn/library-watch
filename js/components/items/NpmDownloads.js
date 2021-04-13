"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _Chart = _interopRequireDefault(require("../charts/Chart"));

var _crNpmModelMore = _interopRequireDefault(require("./crNpmModelMore"));

var _loadNpms = _interopRequireDefault(require("./loadNpms"));

var _loadBundle = _interopRequireDefault(require("./loadBundle"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));

var _LineChart = _interopRequireDefault(require("../charts/LineChart"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _PackageDetails = _interopRequireDefault(require("./PackageDetails"));

var _BundleInfo = _interopRequireDefault(require("./BundleInfo"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var BASE_NODEICO = "https://nodei.co/npm/",
    SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true",
    ITEM_DESCRIPTION = "Npm Recent Month Downloads";
var S = {
  ROOT: _Item["default"].ROOT,
  CAPTION_OPEN: (0, _extends2["default"])({}, _Item["default"].CAPTION_OPEN, {
    position: 'relative',
    top: -3
  }),
  BT_MORE: _Item["default"].BT_MORE,
  CAPTION: {
    paddingLeft: 4
  },
  SPAN_SUM: {
    color: '#80c040',
    paddingLeft: 10,
    paddingRight: 10
  },
  SPAN_START: {
    paddingRight: 10
  },
  BTN_CIRCLE: {
    position: 'relative',
    top: -6,
    marginLeft: 10
  },
  ML_16: {
    marginLeft: 16
  },
  MT_16: {
    marginTop: 16
  },
  MB_16: {
    marginBottom: 16
  },
  CHART_WRAPER: {
    paddingTop: 4
  },
  SPAN_NODEICO: {
    display: 'block',
    fontWeight: 'bold',
    color: '#3399FF',
    cursor: 'pointer'
  },
  BUTTON_DOWN_UP: {
    paddingTop: 4,
    paddingBottom: 4
  }
};
var CHART_OPTIONS = {
  legend: {
    position: 'top'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var NpmDownloads = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NpmDownloads, _Component);

  function NpmDownloads(props) {
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

    _this._toggleButtons = function () {
      _this.setState(function (prevState) {
        return {
          isButtons: !prevState.isButtons
        };
      });
    };

    _this._handlerToggleOpen = function () {
      _this.setState({
        isShow: !_this.state.isShow
      });
    };

    _this._handlerClickWatch = function () {
      var _this$props = _this.props,
          packageName = _this$props.packageName,
          requestType = _this$props.requestType,
          sumDownloads = _this$props.sumDownloads,
          toDate = _this$props.toDate,
          onWatchItem = _this$props.onWatchItem,
          _caption = packageName + " " + sumDownloads,
          _descr = ITEM_DESCRIPTION;

      onWatchItem({
        caption: _caption,
        config: {
          requestType: requestType,
          repo: packageName,
          descr: _descr,
          version: sumDownloads,
          caption: _caption,
          date: toDate
        }
      });
    };

    _this._handlerClickNodeIco = function () {
      _this.setState({
        isLoadNodeIco: true,
        isShowNodeIco: !_this.state.isShowNodeIco
      });
    };

    _this._toggleByPropName = function (propName) {
      _this.setState(function (prevState) {
        var _ref;

        return _ref = {}, _ref[propName] = !prevState[propName], _ref;
      });
    };

    _this._loadJson = function (load, onLoad) {
      var packageName = _this.props.packageName;
      load({
        packageName: packageName,
        onLoad: onLoad
      });
    };

    _this._hClickNpms = function () {
      var npmsJson = _this.state.npmsJson;

      if (npmsJson) {
        _this._toggleByPropName('isShowNmps');
      } else {
        _this._loadJson(_loadNpms["default"], _this._onLoadNpms);
      }
    };

    _this._onLoadNpms = function (json) {
      _this.setState({
        npmsJson: json,
        isShowNmps: true
      });
    };

    _this._hClickBundle = function () {
      var bundleJson = _this.state.bundleJson;

      if (bundleJson) {
        _this._toggleByPropName('isShowBundle');
      } else {
        _this._loadJson(_loadBundle["default"], _this._onLoadBundle);
      }
    };

    _this._onLoadBundle = function (json) {
      _this.setState({
        bundleJson: json,
        isShowBundle: true
      });
    };

    _this._renderButtonWatch = function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "W",
        title: "Add to WatchList",
        style: S.BTN_CIRCLE,
        onClick: _this._handlerClickWatch
      });
    };

    var onMoveToTop = props.onMoveToTop;
    _this._MORE = (0, _crNpmModelMore["default"])({
      onMoveToTop: onMoveToTop,
      onToggleButtons: _this._toggleButtons
    });
    _this.state = {
      isShow: true,
      isMore: false,
      isButtons: true,
      isLoadNodeIco: false,
      isShowNodeIco: false,
      isShowNmps: false,
      isShowBundle: false
    };
    return _this;
  }

  var _proto = NpmDownloads.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        packageName = _this$props2.packageName,
        caption = _this$props2.caption,
        _this$props2$sumDownl = _this$props2.sumDownloads,
        sumDownloads = _this$props2$sumDownl === void 0 ? 0 : _this$props2$sumDownl,
        fromDate = _this$props2.fromDate,
        toDate = _this$props2.toDate,
        labels = _this$props2.labels,
        data = _this$props2.data,
        packageLink = _this$props2.packageLink,
        onCloseItem = _this$props2.onCloseItem,
        onWatchItem = _this$props2.onWatchItem,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        isButtons = _this$state.isButtons,
        isLoadNodeIco = _this$state.isLoadNodeIco,
        isShowNodeIco = _this$state.isShowNodeIco,
        isShowNmps = _this$state.isShowNmps,
        npmsJson = _this$state.npmsJson,
        isShowBundle = _this$state.isShowBundle,
        bundleJson = _this$state.bundleJson,
        _lineChartConfig = _Chart["default"].fLineConfig({
      labels: labels,
      data: data
    }),
        _infoStyle = isButtons ? (0, _extends2["default"])({}, S.ML_16, S.MT_16) : S.ML_16;

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
          style: S.CAPTION_OPEN,
          onClick: this._handlerToggleOpen,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: packageName
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].FormattedInteger, {
            value: sumDownloads,
            style: S.SPAN_SUM
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.SPAN_START,
            children: fromDate
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: toDate
          })]
        }), _isFn(onWatchItem) && this._renderButtonWatch()]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A["default"].ShowHide, {
        isShow: isShow,
        style: S.CHART_WRAPER,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LineChart["default"], {
          data: _lineChartConfig,
          options: CHART_OPTIONS
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
          isShow: isButtons,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            style: S.ML_16,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
              target: "_blank",
              className: _CL["default"].SOURCE_LINK,
              href: packageLink,
              children: "NPM Link"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
              style: (0, _extends2["default"])({}, S.BUTTON_DOWN_UP, S.ML_16),
              isUp: isShowNodeIco,
              caption: "NodeICO",
              title: "Package badge from Nodei.co",
              onClick: this._handlerClickNodeIco
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
              style: (0, _extends2["default"])({}, S.BUTTON_DOWN_UP, S.ML_16),
              isUp: isShowNmps,
              caption: "NPMS.IO",
              title: "Click to load package info from npms.io",
              onClick: this._hClickNpms
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonDownUp, {
              style: (0, _extends2["default"])({}, S.BUTTON_DOWN_UP, S.ML_16),
              isUp: isShowBundle,
              caption: "Bundlephobia.com",
              title: "Click to load package info from bundlephobia.com",
              onClick: this._hClickBundle
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: _infoStyle,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
            isShow: isShowNodeIco,
            style: S.MB_16,
            children: isLoadNodeIco && /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].LinkImg, {
              href: packageLink,
              imgClass: "node-ico",
              imgSrc: "" + BASE_NODEICO + packageName + SUFFIX_NODEICO
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
            isShow: isShowNmps,
            style: S.MB_16,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PackageDetails["default"], {
              json: npmsJson
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
            isShow: isShowBundle,
            style: S.MB_16,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BundleInfo["default"], {
              json: bundleJson
            })
          })]
        })]
      })]
    });
  };

  return NpmDownloads;
}(_react.Component);

var _default = NpmDownloads;
exports["default"] = _default;
//# sourceMappingURL=NpmDownloads.js.map