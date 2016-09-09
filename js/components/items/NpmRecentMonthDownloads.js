'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _LineChart = require('../charts/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  rootDiv: {
    lineHeight: 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position: 'relative'
  },
  headerDiv: {
    backgroundColor: '#232F3B',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    paddingTop: '4px',
    paddingLeft: '10px',
    lineHeight: 1.5,
    //height: '25px',
    //width: '600px'
    width: '100%',
    height: '30px'
  },
  captionSpanOpen: {
    display: 'inline-block',
    color: 'rgba(164, 135, 212, 1)',
    cursor: 'pointer',
    maxWidth: '500px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    float: 'left'
  },

  SPAN_SUM: {
    color: '#80c040',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  SPAN_START: {
    paddingRight: '10px'
  }
};

var chartConfig = {
  labels: ['1', '2'],
  datasets: [{
    label: 'Downloads',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(128, 192, 64, 0.4)',
    //rgba(128, 192, 64, 1)
    //rgba(75,192,192,1)
    borderColor: 'rgba(128, 192, 64, 1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(128, 192, 64, 1)',
    //pointBackgroundColor: '#fff',
    pointBackgroundColor: 'rgba(128, 192, 64, 1)',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(128, 192, 64, 1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 5,
    pointHitRadius: 10,
    data: [0, 0]
  }]
};

var NpmRecentDownloads = _react2.default.createClass({
  displayName: 'NpmRecentDownloads',
  getInitialState: function getInitialState() {
    return {
      isShow: true
    };
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  render: function render() {
    var _props = this.props;
    var packageName = _props.packageName;
    var caption = _props.caption;
    var sumDownloads = _props.sumDownloads;
    var fromDate = _props.fromDate;
    var toDate = _props.toDate;
    var labels = _props.labels;
    var data = _props.data;
    var onCloseItem = _props.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    var isShow = this.state.isShow;


    chartConfig.labels = labels;
    chartConfig.datasets[0].data = data;

    return _react2.default.createElement(
      'div',
      { style: styles.rootDiv },
      _react2.default.createElement(
        'div',
        { style: styles.headerDiv },
        _react2.default.createElement(
          'span',
          {
            className: 'not-selected',
            title: caption,
            style: _styleCaption,
            onClick: this._handlerToggleOpen
          },
          _react2.default.createElement(
            'span',
            null,
            packageName
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_SUM },
            sumDownloads
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_START },
            fromDate
          ),
          _react2.default.createElement(
            'span',
            null,
            toDate
          )
        ),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      ),
      _react2.default.createElement(
        _ShowHide2.default,
        { isShow: isShow },
        _react2.default.createElement(_LineChart2.default, {
          data: chartConfig
        })
      )
    );
  }
});

exports.default = NpmRecentDownloads;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\items\NpmRecentMonthDownloads.js.map