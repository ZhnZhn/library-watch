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

var _Chart = require('../charts/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _crNpmModelMore = require('./crNpmModelMore');

var _crNpmModelMore2 = _interopRequireDefault(_crNpmModelMore);

var _loadNpms = require('./loadNpms');

var _loadNpms2 = _interopRequireDefault(_loadNpms);

var _A = require('../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ModalSlider = require('../zhn-modal-slider/ModalSlider');

var _ModalSlider2 = _interopRequireDefault(_ModalSlider);

var _LineChart = require('../charts/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _PackageDetails = require('./PackageDetails');

var _PackageDetails2 = _interopRequireDefault(_PackageDetails);

var _CL = require('../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_NODEICO = "https://nodei.co/npm/",
    SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true",
    BASE_NPM = "https://www.npmjs.com/package/",
    ITEM_DESCRIPTION = "Npm Recent Month Downloads";

var S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 10,
    marginRight: 25
  },
  CAPTION_OPEN: {
    position: 'relative',
    top: -6,
    display: 'inline-block',
    color: '#a487d4',
    paddingLeft: 8,
    maxWidth: 500,
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
    paddingRight: 10
  },
  BTN_CIRCLE: {
    position: 'relative',
    top: -6,
    marginLeft: 10
  },

  ML_32: {
    marginLeft: 32
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

    _this._toggleButtons = function () {
      _this.setState(function (prevState) {
        return {
          isButtons: !prevState.isButtons
        };
      });
    };

    _this._handlerToggleOpen = function () {
      _this.setState({ isShow: !_this.state.isShow });
    };

    _this._handlerClickWatch = function () {
      var _this$props = _this.props,
          packageName = _this$props.packageName,
          requestType = _this$props.requestType,
          sumDownloads = _this$props.sumDownloads,
          toDate = _this$props.toDate,
          onWatchItem = _this$props.onWatchItem,
          _caption = packageName + ' ' + sumDownloads,
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

    _this._hClickNpms = function () {
      var packageName = _this.props.packageName;

      (0, _loadNpms2.default)({ packageName: packageName, onLoad: _this._onLoadNpms });
    };

    _this._onLoadNpms = function (json) {
      _this.setState({
        npmsJson: json,
        isLoadedNpms: true,
        isShowNmps: true
      });
    };

    _this._toggleNpms = function () {
      _this.setState(function (prevState) {
        return {
          isShowNmps: !prevState.isShowNmps
        };
      });
    };

    _this._renderButtonWatch = function () {
      return _react2.default.createElement(_A2.default.ButtonCircle, {
        caption: 'W',
        title: 'Add to Watch',
        style: S.BTN_CIRCLE,
        onClick: _this._handlerClickWatch
      });
    };

    _this._renderNodeIcoBadge = function (packageName) {
      var _href = BASE_NPM + packageName,
          _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO;
      return _react2.default.createElement(_A2.default.LinkImg, {
        href: _href,
        imgClass: 'node-ico',
        imgSrc: _imgSrc
      });
    };

    var onMoveToTop = props.onMoveToTop;

    _this._MORE = (0, _crNpmModelMore2.default)({
      onMoveToTop: onMoveToTop,
      onToggleButtons: _this._toggleButtons
    });
    _this.state = {
      isShow: true,
      isMore: false,
      isButtons: true,
      isLoadNodeIco: false,
      isShowNodeIco: false,
      isLoadedNpms: false,
      isShowNmps: false
    };
    return _this;
  }

  (0, _createClass3.default)(NpmRecentDownloads, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          packageName = _props.packageName,
          caption = _props.caption,
          _props$sumDownloads = _props.sumDownloads,
          sumDownloads = _props$sumDownloads === undefined ? 0 : _props$sumDownloads,
          fromDate = _props.fromDate,
          toDate = _props.toDate,
          labels = _props.labels,
          data = _props.data,
          onCloseItem = _props.onCloseItem,
          onWatchItem = _props.onWatchItem,
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore,
          isButtons = _state.isButtons,
          isLoadNodeIco = _state.isLoadNodeIco,
          isShowNodeIco = _state.isShowNodeIco,
          isLoadedNpms = _state.isLoadedNpms,
          isShowNmps = _state.isShowNmps,
          npmsJson = _state.npmsJson,
          _lineChartConfig = _Chart2.default.fLineConfig({ labels: labels, data: data }),
          _onClickNpms = isLoadedNpms ? this._toggleNpms : this._hClickNpms,
          _infoStyle = isButtons ? (0, _extends3.default)({}, S.ML_32, S.MT_16) : S.ML_32;

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
              className: 'not-selected',
              title: caption,
              style: S.CAPTION_OPEN,
              onClick: this._handlerToggleOpen
            },
            _react2.default.createElement(
              'span',
              null,
              packageName
            ),
            _react2.default.createElement(_A2.default.FormattedInteger, {
              value: sumDownloads,
              style: S.SPAN_SUM
            }),
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
          ),
          _isFn(onWatchItem) && this._renderButtonWatch()
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow, style: S.CHART_WRAPER },
          _react2.default.createElement(_LineChart2.default, {
            data: _lineChartConfig,
            options: CHART_OPTIONS
          }),
          _react2.default.createElement(
            _A2.default.ShowHide,
            { isShow: isButtons },
            _react2.default.createElement(
              'div',
              { style: S.ML_32 },
              _react2.default.createElement(_A2.default.ButtonDownUp, {
                style: S.BUTTON_DOWN_UP,
                isUp: isShowNodeIco,
                caption: 'NodeICO',
                title: 'Package badge from Nodei.co',
                onClick: this._handlerClickNodeIco
              }),
              _react2.default.createElement(_A2.default.ButtonDownUp, {
                style: (0, _extends3.default)({}, S.BUTTON_DOWN_UP, { marginLeft: 32 }),
                isUp: isShowNmps,
                caption: 'NPMS.IO',
                title: 'Click to load package info from npms.io',
                onClick: _onClickNpms
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _infoStyle },
            _react2.default.createElement(
              _A2.default.ShowHide,
              { isShow: isShowNodeIco, style: S.MB_16 },
              isLoadNodeIco && this._renderNodeIcoBadge(packageName)
            ),
            _react2.default.createElement(
              _A2.default.ShowHide,
              { isShow: isShowNmps, style: S.MB_16 },
              isLoadedNpms && _react2.default.createElement(_PackageDetails2.default, { json: npmsJson })
            )
          )
        )
      );
    }
  }]);
  return NpmRecentDownloads;
}(_react.Component);

exports.default = NpmRecentDownloads;
//# sourceMappingURL=NpmRecentMonthDownloads.js.map