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

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _FormattedInteger = require('../zhnAtoms/FormattedInteger');

var _FormattedInteger2 = _interopRequireDefault(_FormattedInteger);

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
  },

  BUTTON_DOWN_UP: {
    paddingTop: '4px',
    paddingBottom: '4px'
  },

  SHOW_HIDE_BADGE: {
    marginTop: '16px'
  }

};

var NpmRecentDownloads = function (_Component) {
  (0, _inherits3.default)(NpmRecentDownloads, _Component);

  function NpmRecentDownloads() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NpmRecentDownloads);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NpmRecentDownloads.__proto__ || Object.getPrototypeOf(NpmRecentDownloads)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: true,
      isLoadNodeIco: false,
      isShowNodeIco: false
    }, _this._handlerToggleOpen = function () {
      _this.setState({ isShow: !_this.state.isShow });
    }, _this._handlerClickWatch = function () {
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
    }, _this._handlerClickNodeIco = function () {
      _this.setState({
        isLoadNodeIco: true,
        isShowNodeIco: !_this.state.isShowNodeIco
      });
    }, _this._renderButtonWatch = function () {
      return _react2.default.createElement(_ButtonCircle2.default, {
        caption: 'W',
        title: 'Add to Watch',
        style: styles.BTN_CIRCLE,
        onClick: _this._handlerClickWatch
      });
    }, _this._renderNodeIcoBadge = function (packageName) {
      var _href = BASE_NPM + packageName,
          _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO;
      return _react2.default.createElement(_LinkImg2.default, {
        href: _href,
        imgClass: 'node-ico',
        imgSrc: _imgSrc
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
          _isButtonWatch = typeof onWatchItem === 'function' ? true : false,
          _styleCaption = styles.captionSpanOpen,
          _state = this.state,
          isShow = _state.isShow,
          isLoadNodeIco = _state.isLoadNodeIco,
          isShowNodeIco = _state.isShowNodeIco,
          _lineChartConfig = _Chart2.default.fLineConfig({ labels: labels, data: data });

      return _react2.default.createElement(
        'div',
        { style: styles.rootDiv },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
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
            _react2.default.createElement(_FormattedInteger2.default, {
              value: sumDownloads,
              style: styles.SPAN_SUM
            }),
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
          _isButtonWatch && this._renderButtonWatch()
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
              styleRoot: styles.BUTTON_DOWN_UP,
              isUp: isShowNodeIco,
              onClick: this._handlerClickNodeIco
            }),
            _react2.default.createElement(
              _ShowHide2.default,
              { isShow: isShowNodeIco, style: styles.SHOW_HIDE_BADGE },
              isLoadNodeIco && this._renderNodeIcoBadge(packageName)
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