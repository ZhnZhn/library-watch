'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ChartActions = require('../../flux/actions/ChartActions');

var _ScrollPane = require('../zhnAtoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _CaptionRow = require('../zhnAtoms/CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _Token = require('./Token');

var _Token2 = _interopRequireDefault(_Token);

var _LinkToken = require('./LinkToken');

var _LinkToken2 = _interopRequireDefault(_LinkToken);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyles = require('../styles/ContainerStyles.js');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _ContainerStyles2.default;

var STYLE = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  },
  ROOT_DIV: {
    paddingLeft: '5px',
    paddingRight: '5px',
    lineHeight: 1.4
  }
};

var About = _react2.default.createClass({
  displayName: 'About',
  getInitialState: function getInitialState() {
    return {
      isShow: this.props.isShow
    };
  },
  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  _onStore: function _onStore(actionType, data) {
    if (actionType === _ComponentActions.ComponentActionTypes.SHOW_ABOUT) {
      this.setState({ isShow: true });
    } else if (actionType === _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART) {
      this.setState({ isShow: false });
    } else if (actionType === _ChartActions.ChartActionTypes.SHOW_CHART) {
      this.setState({ isShow: false });
    }
  },
  _handlerClose: function _handlerClose() {
    this.setState({ isShow: false });
  },
  render: function render() {
    var isShow = this.state.isShow;
    var _classOpen = isShow ? "show-popup" : null;
    var _styleOpen = isShow ? { display: 'block' } : { display: 'none' };

    return _react2.default.createElement(
      'div',
      {
        className: _classOpen,
        style: Object.assign({}, styles.aboutRootDiv, _styleOpen)
      },
      _react2.default.createElement(_CaptionRow2.default, {
        caption: 'About',
        onClose: this._handlerClose
      }),
      _react2.default.createElement(
        _ScrollPane2.default,
        { style: STYLE.SCROLL_DIV },
        _react2.default.createElement(
          'div',
          { style: STYLE.ROOT_DIV },
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
            null,
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'With it, you can view information about GitHub\'s repositories, NPM\'s packages, StackOverflows\'s questions.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'Information API providers :'
            ),
            _react2.default.createElement(
              _LinkToken2.default,
              {
                href: 'https://www.github.com/',
                color: '#009ae5',
                isFirstBlank: true,
                title: 'GitHub'
              },
              'GitHub'
            ),
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              ', '
            ),
            _react2.default.createElement(
              _LinkToken2.default,
              {
                href: 'https://www.npmjs.com/',
                color: '#273547',
                isFirstBlank: true,
                title: 'NPM'
              },
              'NPM'
            ),
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              ', '
            ),
            _react2.default.createElement(
              _LinkToken2.default,
              {
                href: 'https://stackexchange.com/',
                color: '#3186C9',
                isFirstBlank: true,
                title: 'Stack Exchange'
              },
              'Stack Exchange'
            ),
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              '.'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(_Step2.default, { step: '1' }),
            _react2.default.createElement(
              _Token2.default,
              { color: 'black', isFirstBlank: true },
              'Choose an information Browser from the header bar'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '3px' } },
            _react2.default.createElement(_Step2.default, { step: '2' }),
            _react2.default.createElement(
              _Token2.default,
              { color: 'black', isFirstBlank: true },
              'Choose an information menu item in a Browser'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '3px' } },
            _react2.default.createElement(_Step2.default, { step: '3' }),
            _react2.default.createElement(
              _Token2.default,
              { color: 'black', isFirstBlank: true },
              'Enter repository or package name in a draggable Dialog'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '3px' } },
            _react2.default.createElement(_Step2.default, { step: '4' }),
            _react2.default.createElement(
              _Token2.default,
              { color: 'black', isFirstBlank: true },
              'Click a button Load'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '3px' } },
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'The result will be shown in an Item component in a Container.'
            )
          ),
          _react2.default.createElement(
            'p',
            { style: { marginTop: '3px' } },
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'Also, you can add an item to Watch Browser and save to LocalStorage.'
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'After clicking a button Show in a Dialog will be opened Container with Items or empty. After closing a Container all Items remains.'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _Token2.default,
              { color: 'gray' },
              'In one-time max three Item Dialogs can be opened.'
            )
          ),
          _react2.default.createElement('br', null),
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
});

exports.default = About;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\about\About.js.map