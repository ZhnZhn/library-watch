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

var _Chart = require('../charts/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _crNpmModelMore = require('./crNpmModelMore');

var _crNpmModelMore2 = _interopRequireDefault(_crNpmModelMore);

var _A = require('../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ModalSlider = require('../zhn-modal-slider/ModalSlider');

var _ModalSlider2 = _interopRequireDefault(_ModalSlider);

var _LineChart = require('../charts/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _CL = require('../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 10,
    marginRight: 25
  },
  BT_CAPTION: {
    position: 'relative',
    top: -6,
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
  BT_MORE: {
    verticalAlign: 'none'
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

var NpmRecentDownloads = function (_Component) {
  (0, _inherits3.default)(NpmRecentDownloads, _Component);

  function NpmRecentDownloads(props) {
    (0, _classCallCheck3.default)(this, NpmRecentDownloads);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NpmRecentDownloads.__proto__ || Object.getPrototypeOf(NpmRecentDownloads)).call(this, props));

    _this._hClickMore = function () {
      _this.setState({ isMore: true });
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

    _this._MORE = (0, _crNpmModelMore2.default)({
      onMoveToTop: onMoveToTop
    });
    _this.state = {
      isShow: true,
      isMore: false
    };
    return _this;
  }

  (0, _createClass3.default)(NpmRecentDownloads, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          fromDate = _props.fromDate,
          toDate = _props.toDate,
          labels = _props.labels,
          data = _props.data,
          sourceLink = _props.sourceLink,
          onCloseItem = _props.onCloseItem,
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore,
          _lineChartConfig = _Chart2.default.fLineConfigs({ labels: labels, data: data }),
          _numSeries = _lineChartConfig.datasets.length,
          _heigh = 150 + Math.floor(_numSeries / 5) * 16;

      return _react2.default.createElement(
        'div',
        { style: S.ROOT },
        _react2.default.createElement(_ModalSlider2.default, {
          isShow: isMore,
          className: _CL2.default.MENU_MORE,
          model: this._MORE,
          onClose: this._hToggleMore
        }),
        _react2.default.createElement(
          _ItemCaption2.default,
          { style: S.CAPTION, onClose: onCloseItem },
          _react2.default.createElement(_A2.default.SvgMore, {
            style: S.BT_MORE,
            onClick: this._hClickMore
          }),
          _react2.default.createElement(
            'button',
            {
              className: _CL2.default.NOT_SELECTED,
              title: caption,
              style: S.BT_CAPTION,
              onClick: this._handlerToggleOpen
            },
            _react2.default.createElement(
              'span',
              null,
              caption
            ),
            _react2.default.createElement(
              'span',
              { style: S.SPAN_START },
              fromDate
            ),
            _react2.default.createElement(
              'span',
              null,
              toDate
            )
          )
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow, style: S.CHART_WRAPER },
          _react2.default.createElement(_LineChart2.default, {
            data: _lineChartConfig,
            height: _heigh
          }),
          _react2.default.createElement(
            'a',
            { className: _CL2.default.SOURCE_LINK, style: S.SOURCE_LINK, href: sourceLink, target: '_blank' },
            'StatCounter Chart'
          )
        )
      );
    }
  }]);
  return NpmRecentDownloads;
}(_react.Component);

exports.default = NpmRecentDownloads;
//# sourceMappingURL=StatCounterShare.js.map