'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;
//import PropTypes from "prop-types";

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('../../flux/stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _ChartActions = require('../../flux/actions/ChartActions');

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ModalSlider = require('../zhn-modal-slider/ModalSlider');

var _ModalSlider2 = _interopRequireDefault(_ModalSlider);

var _ModelMore = require('./ModelMore');

var _ModelMore2 = _interopRequireDefault(_ModelMore);

var _ContainerCaption = require('../zhn-atoms/ContainerCaption');

var _ContainerCaption2 = _interopRequireDefault(_ContainerCaption);

var _SvgHrzResize = require('../zhn-moleculs/SvgHrzResize');

var _SvgHrzResize2 = _interopRequireDefault(_SvgHrzResize);

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _CL = require('../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHILD_MARGIN = 36,
    RESIZE_INIT_WIDTH = 635,
    RESIZE_MIN_WIDTH = 395,
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
  }
};

var isInArray = function isInArray() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments[1];

  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

var compActions = [_ChartActions.ChartActionTypes.SHOW_CHART, _ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, _ChartActions.ChartActionTypes.CLOSE_CHART];

var _getWidth = function _getWidth(style) {
  return parseInt(style.width, 10) || RESIZE_INIT_WIDTH;
};

var ChartContainer2 = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ChartContainer2, _Component);

  /*
  static propTypes = {
    caption: PropTypes.string,
    browserType: PropTypes.string,
    chartType: PropTypes.string,
    onCloseContainer: PropTypes.func
  }
  */
  function ChartContainer2(props) {
    (0, _classCallCheck3.default)(this, ChartContainer2);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChartContainer2.__proto__ || Object.getPrototypeOf(ChartContainer2)).call(this, props));

    _initialiseProps.call(_this);

    var chartType = props.chartType,
        onRemoveAll = props.onRemoveAll;

    _this.childMargin = CHILD_MARGIN;
    _this._MORE = (0, _ModelMore2.default)({
      chartType: chartType,
      onPlusWidth: _this._plusToWidth,
      onMinusWidth: _this._minusToWidth,
      onRemoveAll: onRemoveAll
    });
    _this.state = {
      isMore: false
    };
    return _this;
  }

  (0, _createClass3.default)(ChartContainer2, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unsubscribe = _AppStore2.default.listen(this._onStore);
      this.setState(_AppStore2.default.getConfigs(this.props.chartType));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var caption = this.props.caption,
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore,
          configs = _state.configs,
          _styleOpen = isShow ? S.BLOCK : S.NONE,
          _classOpen = isShow ? _CL2.default.SHOW_POPUP : undefined;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootNode,
          className: _classOpen,
          style: (0, _extends3.default)({}, S.ROOT, _styleOpen)
        },
        _react2.default.createElement(_ModalSlider2.default, {
          isShow: isMore,
          className: _CL2.default.MENU_MORE,
          model: this._MORE,
          onClose: this._hToggleMore
        }),
        _react2.default.createElement(
          _ContainerCaption2.default,
          {
            caption: caption,
            onMore: this._showMore,
            onClose: this._handleHide
          },
          _react2.default.createElement(_SvgHrzResize2.default, {
            minWidth: 500,
            maxWidth: 1200,
            comp: this
          })
        ),
        _react2.default.createElement(
          _ScrollPane2.default,
          {
            ref: this._refScroll,
            style: S.SCROLL
          },
          configs
        )
      );
    }
  }]);
  return ChartContainer2;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._onStore = function (actionType, data) {
    if (isInArray(compActions, actionType)) {
      if (data && data.chartType === _this2.props.chartType) {
        if (_this2._scrollComp) {
          _this2._scrollComp.scrollTop();
        }
        _this2.setState(data);
      }
    } else if (actionType === _ComponentActions.ComponentActionTypes.CLOSE_CHART_CONTAINER_2) {
      if (data === _this2.props.chartType) {
        _this2._handleHide();
      }
    }
  };

  this._plusToWidth = function () {
    var _rootNode2 = _this2._rootNode,
        _rootNode = _rootNode2 === undefined ? {} : _rootNode2,
        _rootNode$style = _rootNode.style,
        style = _rootNode$style === undefined ? {} : _rootNode$style,
        w = _getWidth(style) + DELTA;

    if (w < RESIZE_MAX_WIDTH) {
      style.width = w + 'px';
    }
  };

  this._minusToWidth = function () {
    var _rootNode3 = _this2._rootNode,
        _rootNode = _rootNode3 === undefined ? {} : _rootNode3,
        _rootNode$style2 = _rootNode.style,
        style = _rootNode$style2 === undefined ? {} : _rootNode$style2,
        w = _getWidth(style) - DELTA;

    if (w > RESIZE_MIN_WIDTH) {
      style.width = w + 'px';
    }
  };

  this._showMore = function () {
    _this2.setState({ isMore: true });
  };

  this._hToggleMore = function () {
    _this2.setState(function (prevState) {
      return {
        isMore: !prevState.isMore
      };
    });
  };

  this._handleHide = function () {
    var _props = _this2.props,
        chartType = _props.chartType,
        browserType = _props.browserType,
        onCloseContainer = _props.onCloseContainer;

    onCloseContainer(chartType, browserType);
    _this2.setState({ isShow: false });
  };

  this._refRootNode = function (node) {
    return _this2._rootNode = node;
  };

  this._refScroll = function (c) {
    return _this2._scrollComp = c;
  };
}, _temp);
exports.default = ChartContainer2;
//# sourceMappingURL=ChartContainer2.js.map