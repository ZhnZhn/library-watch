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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ChartActions = require('../../flux/actions/ChartActions');

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _CaptionRow = require('../zhn-atoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _Token = require('./Token');

var _Token2 = _interopRequireDefault(_Token);

var _LinkToken = require('./LinkToken');

var _LinkToken2 = _interopRequireDefault(_LinkToken);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyles = require('../styles/ContainerStyles');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: 10
  },
  ROOT_DIV: {
    color: 'gray',
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingRight: 5,
    lineHeight: 1.4
  },
  MARGIN_BOTTOM: {
    marginBottom: '1em'
  },
  MARGIN_TOP: {
    marginTop: 3
  }
};

var About = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this._onStore = function (actionType, data) {
      if (actionType === _ComponentActions.ComponentActionTypes.SHOW_ABOUT) {
        _this.setState({ isShow: true });
      } else if (actionType === _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART) {
        _this.setState({ isShow: false });
      } else if (actionType === _ChartActions.ChartActionTypes.SHOW_CHART) {
        _this.setState({ isShow: false });
      }
    };

    _this._handlerClose = function () {
      _this.setState({ isShow: false });
    };

    _this.state = {
      isShow: props.isShowInit
    };
    return _this;
  }

  (0, _createClass3.default)(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var isShow = this.state.isShow,
          _classOpen = isShow ? "show-popup" : null,
          _styleOpen = isShow ? { display: 'block' } : { display: 'none' };


      return _react2.default.createElement(
        'div',
        {
          className: _classOpen,
          style: (0, _extends3.default)({}, _ContainerStyles2.default.aboutRootDiv, _styleOpen)
        },
        _react2.default.createElement(_CaptionRow2.default, {
          caption: 'About',
          onClose: this._handlerClose
        }),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: S.SCROLL_DIV },
          _react2.default.createElement(
            'div',
            { style: S.ROOT_DIV },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: '#80c040' },
                'Library Watch'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'is a SPA RESTful client.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_BOTTOM },
              'By means of web app Library-Watch, it is possible to view information about GitHub\'s repositories, NPM\'s packages, StackOverflows\'s questions.'
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_BOTTOM },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'Information API providers:'
              ),
              _react2.default.createElement(_LinkToken2.default, {
                href: 'https://www.github.com/',
                color: '#009ae5',
                title: 'GitHub',
                caption: 'GitHub'
              }),
              _react2.default.createElement(_LinkToken2.default, {
                href: 'https://www.npmjs.com/',
                color: '#273547',
                title: 'NPM',
                caption: 'NPM'
              }),
              _react2.default.createElement(_LinkToken2.default, {
                href: 'https://api-docs.npms.io/',
                color: '#273547',
                title: 'NPMS.IO',
                caption: 'NPMS.IO'
              }),
              _react2.default.createElement(_LinkToken2.default, {
                href: 'https://stackexchange.com/',
                color: '#3186C9',
                title: 'Stack Exchange',
                caption: 'Stack Exchange'
              }),
              _react2.default.createElement(_LinkToken2.default, {
                href: 'https://gs.statcounter.com/',
                color: '#009ae5',
                title: 'StatCounter',
                caption: 'StatCounter'
              })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_Step2.default, { step: '1' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Please, choose an information Browser from the header bar.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '2' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Next, choose an information menu item in a Browser.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '3' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Enter repository or package name in a draggable Dialog.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '4' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Click a button Load.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'The result will be shown in an Item component in a Container.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: (0, _extends3.default)({}, S.MARGIN_BOTTOM, S.MARGIN_TOP) },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'Also, it possible to add an item to Watch Browser and save to LocalStorage.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_BOTTOM },
              'After clicking a button Show in a Dialog opens Container with Items or empty. After closing a Container all Items remains. In one-time max three Item Dialogs can be opened.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'In that case of using'
              ),
              _react2.default.createElement(
                _LinkToken2.default,
                {
                  href: 'https://developer.github.com/v3/#rate-limiting',
                  color: '#009ae5',
                  isFirstBlank: true,
                  title: 'GitHub API v3 Rate Limiting'
                },
                'GitHub'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'API provider, exists some restriction on frequency and amount queries (',
                _react2.default.createElement(
                  _Token2.default,
                  { color: '#2f7ed8' },
                  '60 calls per hour, 10 requests per minute for Search API'
                ),
                _react2.default.createElement(
                  _Token2.default,
                  { color: 'gray' },
                  ').'
                )
              )
            ),
            _react2.default.createElement(_IconLogoBar2.default, null)
          )
        )
      );
    }
  }]);
  return About;
}(_react.Component), _class.defaultProps = {
  isShowInit: true
}, _temp);
exports.default = About;
//# sourceMappingURL=About.js.map