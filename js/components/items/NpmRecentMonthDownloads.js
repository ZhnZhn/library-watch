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

var _ButtonDownUp = require('../zhnAtoms/ButtonDownUp');

var _ButtonDownUp2 = _interopRequireDefault(_ButtonDownUp);

var _LinkImg = require('../zhnAtoms/LinkImg');

var _LinkImg2 = _interopRequireDefault(_LinkImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_NODEICO = "https://nodei.co/npm/",
    SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true",
    BASE_NPM = "https://www.npmjs.com/package/",
    ITEM_DESCRIPTION = "Npm Recent Month Downloads";

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
      isLoadNodeIco: false,
      isShowNodeIco: false
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
  _handlerClickNodeIco: function _handlerClickNodeIco() {
    this.setState({
      isLoadNodeIco: true,
      isShowNodeIco: !this.state.isShowNodeIco
    });
  },
  _renderButtonWatch: function _renderButtonWatch() {
    return _react2.default.createElement(_ButtonCircle2.default, {
      caption: 'W',
      title: 'Add to Watch',
      style: styles.BTN_CIRCLE,
      onClick: this._handlerClickWatch
    });
  },
  _renderNodeIcoBadge: function _renderNodeIcoBadge(packageName) {
    var _href = BASE_NPM + packageName,
        _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO;
    return _react2.default.createElement(_LinkImg2.default, {
      href: _href,
      imgClass: 'node-ico',
      imgSrc: _imgSrc
    });
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
    var onWatchItem = _props2.onWatchItem;
    var _isButtonWatch = typeof onWatchItem === 'function' ? true : false;
    var _styleCaption = styles.captionSpanOpen;
    var _state = this.state;
    var isShow = _state.isShow;
    var isLoadNodeIco = _state.isLoadNodeIco;
    var isShowNodeIco = _state.isShowNodeIco;
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
        _isButtonWatch && this._renderButtonWatch(),
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
          _react2.default.createElement(_ButtonDownUp2.default, {
            caption: 'NodeICO',
            title: 'Package badge from Nodei.co',
            styleRoot: { paddingTop: '4px', paddingBottom: '4px' },
            isUp: isShowNodeIco,
            onClick: this._handlerClickNodeIco
          }),
          _react2.default.createElement(
            _ShowHide2.default,
            { isShow: isShowNodeIco, style: { marginTop: '16px' } },
            isLoadNodeIco && this._renderNodeIcoBadge(packageName)
          )
        )
      )
    );
  }
});

exports.default = NpmRecentDownloads;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\items\NpmRecentMonthDownloads.js.map