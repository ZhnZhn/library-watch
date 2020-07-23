"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _AppStore = _interopRequireDefault(require("../../flux/stores/AppStore"));

var _ChartActions = require("../../flux/actions/ChartActions");

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));

var _ModelMore = _interopRequireDefault(require("./ModelMore"));

var _ContainerCaption = _interopRequireDefault(require("../zhn-atoms/ContainerCaption"));

var _SvgHrzResize = _interopRequireDefault(require("../zhn-moleculs/SvgHrzResize"));

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _CL = _interopRequireDefault(require("../styles/CL"));

//import PropTypes from "prop-types";
var CHILD_MARGIN = 36,
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 375,
    RESIZE_MAX_WIDTH = 1200,
    DELTA = 10;
var S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    borderRadius: 4,
    boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  },
  SCROLL: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  BT_MORE: {
    position: 'relative',
    top: 3,
    marginRight: 6
  }
};

var _isInArray = function _isInArray(arr, value) {
  if (arr === void 0) {
    arr = [];
  }

  return Boolean(~arr.indexOf(value));
};

var COMP_ACTIONS = [_ChartActions.ChartActionTypes.SHOW_CHART, _ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, _ChartActions.ChartActionTypes.CLOSE_CHART];

var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
};

var _toStyleWidth = function _toStyleWidth(width) {
  return width + 'px';
};

var ChartContainer2 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ChartContainer2, _Component);

  /*
  static propTypes = {
    caption: PropTypes.string,
    browserType: PropTypes.string,
    chartType: PropTypes.string,
    onCloseContainer: PropTypes.func
  }
  */
  function ChartContainer2(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._onStore = function (actionType, data) {
      if (_isInArray(COMP_ACTIONS, actionType)) {
        if (data && data.chartType === _this.props.chartType) {
          if (_this._scrollComp) {
            _this._scrollComp.scrollTop();
          }

          _this.setState(data);
        }
      } else if (actionType === _ComponentActions.ComponentActionTypes.CLOSE_CHART_CONTAINER_2) {
        if (data === _this.props.chartType) {
          _this._handleHide();
        }
      }
    };

    _this._getRootNodeStyle = function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          _rootNode = _assertThisInitialize._rootNode,
          _ref = _rootNode || {},
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style;

      return style;
    };

    _this._resizeTo = function (width) {
      _this._getRootNodeStyle().width = _toStyleWidth(width);
    };

    _this._plusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) + DELTA;

      if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._minusToWidth = function () {
      var style = _this._getRootNodeStyle(),
          w = _getWidth(style) - DELTA;

      if (w > RESIZE_MIN_WIDTH) {
        style.width = _toStyleWidth(w);
      }
    };

    _this._showMore = function () {
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

    _this._handleHide = function () {
      var _this$props = _this.props,
          chartType = _this$props.chartType,
          browserType = _this$props.browserType,
          onCloseContainer = _this$props.onCloseContainer;
      onCloseContainer(chartType, browserType);

      _this.setState({
        isShow: false
      });
    };

    _this._refRootNode = function (node) {
      return _this._rootNode = node;
    };

    _this._refScroll = function (c) {
      return _this._scrollComp = c;
    };

    var _chartType = props.chartType,
        onRemoveAll = props.onRemoveAll;
    _this.childMargin = CHILD_MARGIN;
    _this._MORE = (0, _ModelMore["default"])({
      chartType: _chartType,
      onMinWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_MIN_WIDTH),
      onInitialWidth: _this._resizeTo.bind((0, _assertThisInitialized2["default"])(_this), RESIZE_INIT_WIDTH),
      onPlusWidth: _this._plusToWidth,
      onMinusWidth: _this._minusToWidth,
      onRemoveAll: onRemoveAll
    });
    _this.state = {
      isMore: false
    };
    return _this;
  }

  var _proto = ChartContainer2.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = _AppStore["default"].listen(this._onStore);
    this.setState(_AppStore["default"].getConfigs(this.props.chartType));
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    var caption = this.props.caption,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isMore = _this$state.isMore,
        configs = _this$state.configs,
        _styleOpen = isShow ? S.BLOCK : S.NONE,
        _classOpen = isShow ? _CL["default"].SHOW_POPUP : undefined;

    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: this._refRootNode,
      className: _classOpen,
      style: (0, _extends2["default"])({}, S.ROOT, _styleOpen)
    }, /*#__PURE__*/_react["default"].createElement(_ModalSlider["default"], {
      isShow: isMore,
      className: _CL["default"].MENU_MORE,
      model: this._MORE,
      onClose: this._hToggleMore
    }), /*#__PURE__*/_react["default"].createElement(_ContainerCaption["default"], {
      moreStyle: S.BT_MORE,
      caption: caption,
      onMore: this._showMore,
      onClose: this._handleHide
    }, /*#__PURE__*/_react["default"].createElement(_SvgHrzResize["default"], {
      minWidth: RESIZE_MIN_WIDTH,
      maxWidth: RESIZE_MAX_WIDTH,
      comp: this
    })), /*#__PURE__*/_react["default"].createElement(_ScrollPane["default"], {
      ref: this._refScroll,
      style: S.SCROLL
    }, configs));
  };

  return ChartContainer2;
}(_react.Component);

var _default = ChartContainer2;
exports["default"] = _default;
//# sourceMappingURL=ChartContainer2.js.map