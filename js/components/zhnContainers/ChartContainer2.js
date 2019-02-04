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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppStore = require('../../flux/stores/AppStore');

var _AppStore2 = _interopRequireDefault(_AppStore);

var _ChartActions = require('../../flux/actions/ChartActions');

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _CaptionRow = require('../zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _SvgHrzResize = require('../zhnMoleculs/SvgHrzResize');

var _SvgHrzResize2 = _interopRequireDefault(_SvgHrzResize);

var _ScrollPane = require('../zhnAtoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var CL = "show-popup";
var CHILD_MARGIN = 36;

var S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    borderRadius: '4px',
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
    paddingRight: '10px'
  }
};

var isInArray = function isInArray() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments[1];

  var len = arr.length;
  var i = 0;
  for (; i < len; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
};

var compActions = [_ChartActions.ChartActionTypes.SHOW_CHART, _ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, _ChartActions.ChartActionTypes.CLOSE_CHART];

var ChartContainer2 = function (_Component) {
  (0, _inherits3.default)(ChartContainer2, _Component);

  function ChartContainer2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChartContainer2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ChartContainer2.__proto__ || Object.getPrototypeOf(ChartContainer2)).call.apply(_ref, [this].concat(args))), _this), _this.childMargin = CHILD_MARGIN, _this.state = {}, _this._onStore = function (actionType, data) {
      if (isInArray(compActions, actionType)) {
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
    }, _this._handleHide = function () {
      var _this$props = _this.props,
          chartType = _this$props.chartType,
          browserType = _this$props.browserType,
          onCloseContainer = _this$props.onCloseContainer;

      onCloseContainer(chartType, browserType);
      _this.setState({ isShow: false });
    }, _this._refScroll = function (c) {
      return _this._scrollComp = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    caption: PropTypes.string,
    browserType: PropTypes.string,
    chartType: PropTypes.string,
    onCloseContainer: PropTypes.func
  }
  */


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
          configs = _state.configs,
          _styleOpen = isShow ? S.BLOCK : S.NONE,
          _classOpen = isShow ? CL : undefined;

      return _react2.default.createElement(
        'div',
        {
          className: _classOpen,
          style: (0, _extends3.default)({}, S.ROOT, _styleOpen)
        },
        _react2.default.createElement(
          _CaptionRow2.default,
          {
            caption: caption,
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
}(_react.Component);

exports.default = ChartContainer2;
//# sourceMappingURL=ChartContainer2.js.map