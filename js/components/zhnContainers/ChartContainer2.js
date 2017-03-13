'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var CHILD_MARGIN = 36;

var styles = {
  rootDiv: {
    position: 'relative',
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    //paddingTop : '5px',
    //paddingLeft : '5px',    
    //border: 'solid 3px #232F3B',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    borderRadius: '4px',
    boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  hrzResize: {
    position: 'absolute',
    top: '30px',
    right: '0'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  chartDiv: {
    overflowY: 'auto',
    height: '680px'
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

  function ChartContainer2(props) {
    (0, _classCallCheck3.default)(this, ChartContainer2);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChartContainer2.__proto__ || Object.getPrototypeOf(ChartContainer2)).call(this));

    _this._onStore = function (actionType, data) {
      if (isInArray(compActions, actionType)) {
        if (data && data.chartType === _this.props.chartType) {
          _this.setState(data);
        }
      } else if (actionType === _ComponentActions.ComponentActionTypes.CLOSE_CHART_CONTAINER_2) {
        if (data === _this.props.chartType) {
          _this._handleHide();
        }
      }
    };

    _this._handleHide = function () {
      var _this$props = _this.props,
          chartType = _this$props.chartType,
          browserType = _this$props.browserType,
          onCloseContainer = _this$props.onCloseContainer;

      onCloseContainer(chartType, browserType);
      _this.setState({ isShow: false });
    };

    _this._renderCharts = function () {
      return _this.state.configs.map(function (item, index) {
        return item;
      });
    };

    _this.childMargin = CHILD_MARGIN;
    _this.state = {};
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
          isShow = this.state.isShow,
          _styleOpen = isShow ? { display: 'inline-block' } : { display: 'none' },
          _classOpen = isShow ? "show-popup" : undefined;


      return _react2.default.createElement(
        'div',
        {
          className: _classOpen,
          style: Object.assign({}, styles.rootDiv, _styleOpen)
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
          { style: styles.scrollDiv },
          this._renderCharts()
        )
      );
    }
  }]);
  return ChartContainer2;
}(_react.Component);

process.env.NODE_ENV !== "production" ? ChartContainer2.propTypes = {
  caption: _react.PropTypes.string,
  browserType: _react.PropTypes.string,
  chartType: _react.PropTypes.string,
  onCloseContainer: _react.PropTypes.func
} : void 0;
exports.default = ChartContainer2;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\zhnContainers\ChartContainer2.js.map