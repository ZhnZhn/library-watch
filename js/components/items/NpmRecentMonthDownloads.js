'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Chart = require('../charts/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _LineChart = require('../charts/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_NODEICO = "https://nodei.co/npm/";
var BASE_NPM = "https://www.npmjs.com/package/";
var ITEM_DESCRIPTION = "Npm Recent Month Downloads";

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
  },
  BTN_CIRCLE: {
    marginLeft: '10px'
  },

  DIV_NODEICO_BADGE: {
    marginLeft: '32px'
  },
  SPAN_NODEICO: {
    display: 'block',
    fontWeight: 'bold',
    color: '#3399FF',
    cursor: 'pointer'
  }

};

var NpmRecentDownloads = _react2.default.createClass({
  displayName: 'NpmRecentDownloads',
  getInitialState: function getInitialState() {
    return {
      isShow: true,
      isLoadNodeICO: false,
      isShowNodeICO: false
    };
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  _handlerClickWatch: function _handlerClickWatch() {
    var _props = this.props;
    var packageName = _props.packageName;
    var requestType = _props.requestType;
    var sumDownloads = _props.sumDownloads;
    var toDate = _props.toDate;
    var onWatchItem = _props.onWatchItem;
    var _caption = packageName + ' ' + sumDownloads;
    var _descr = ITEM_DESCRIPTION;
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
  },
  _handlerClickNodeICO: function _handlerClickNodeICO() {
    this.setState({
      isLoadNodeICO: true,
      isShowNodeICO: !this.state.isShowNodeICO
    });
  },
  _renderNodeICO: function _renderNodeICO(packageName) {
    var isShowNodeICO = this.state.isShowNodeICO;
    var _style = isShowNodeICO ? { display: 'block' } : { display: 'none' };
    return _react2.default.createElement(
      'a',
      {
        style: _style,
        href: BASE_NPM + packageName
      },
      _react2.default.createElement('img', { src: BASE_NODEICO + packageName + '.png?downloads=true&downloadRank=true&stars=true' })
    );
  },
  render: function render() {
    var _props2 = this.props;
    var packageName = _props2.packageName;
    var caption = _props2.caption;
    var sumDownloads = _props2.sumDownloads;
    var fromDate = _props2.fromDate;
    var toDate = _props2.toDate;
    var labels = _props2.labels;
    var data = _props2.data;
    var onCloseItem = _props2.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    var _state = this.state;
    var isShow = _state.isShow;
    var isLoadNodeICO = _state.isLoadNodeICO;
    var _lineChartConfig = _Chart2.default.fLineConfig({ labels: labels, data: data });
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
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'W',
          title: 'Add to Watch',
          style: styles.BTN_CIRCLE,
          onClick: this._handlerClickWatch
        }),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      ),
      _react2.default.createElement(
        _ShowHide2.default,
        { isShow: isShow },
        _react2.default.createElement(_LineChart2.default, {
          data: _lineChartConfig
        }),
        _react2.default.createElement(
          'div',
          { style: styles.DIV_NODEICO_BADGE },
          _react2.default.createElement(
            'span',
            {
              style: styles.SPAN_NODEICO,
              onClick: this._handlerClickNodeICO
            },
            'NodeICO'
          ),
          isLoadNodeICO && this._renderNodeICO(packageName)
        )
      )
    );
  }
});

exports.default = NpmRecentDownloads;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\items\NpmRecentMonthDownloads.js.map