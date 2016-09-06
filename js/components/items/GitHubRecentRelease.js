'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Repository Recent Release";

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

  SPAN_VERSION: {
    color: '#80c040',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  BTN_CIRCLE: {
    marginLeft: '10px'
  }
};

var GitHubRecentRelease = _react2.default.createClass({
  displayName: 'GitHubRecentRelease',
  getInitialState: function getInitialState() {
    return {
      isShow: true
    };
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  _handlerClickWatch: function _handlerClickWatch() {
    var _props = this.props;
    var repo = _props.repo;
    var requestType = _props.requestType;
    var version = _props.version;
    var published_at = _props.published_at;
    var onWatchItem = _props.onWatchItem;
    var caption = repo + ' ' + version;
    var descr = ITEM_DESCRIPTION;
    onWatchItem({
      caption: caption,
      config: { repo: repo, requestType: requestType, version: version, caption: caption, descr: descr, date: published_at }
    });
  },
  render: function render() {
    var _props2 = this.props;
    var caption = _props2.caption;
    var repo = _props2.repo;
    var version = _props2.version;
    var published_at = _props2.published_at;
    var html_url = _props2.html_url;
    var onCloseItem = _props2.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    var isShow = this.state.isShow;

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
            repo
          ),
          _react2.default.createElement(
            'span',
            { style: styles.SPAN_VERSION },
            version
          ),
          _react2.default.createElement(
            'span',
            null,
            published_at
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
        { isShow: isShow, style: { paddingTop: '8px' } },
        _react2.default.createElement(
          'a',
          {
            href: html_url,
            className: 'github-link',
            style: { marginLeft: '8px' }
          },
          'Link to description of recent release tag'
        )
      )
    );
  }
});

exports.default = GitHubRecentRelease;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\GitHubRecentRelease.js.map