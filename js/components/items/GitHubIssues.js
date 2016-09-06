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

var ITEM_DESCRIPTION = "GitHub Repository Issues";

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

var GitHubIssues = _react2.default.createClass({
  displayName: 'GitHubIssues',
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
    var onWatchItem = _props.onWatchItem;
    var caption = '' + repo;
    var descr = ITEM_DESCRIPTION;
    onWatchItem({
      caption: caption,
      config: { repo: repo, requestType: requestType, version: '', caption: caption, descr: descr }
    });
  },
  _renderIssues: function _renderIssues(issues) {
    return issues.map(function (item, index) {
      var state = item.state;
      var number = item.number;
      var created_at = item.created_at;
      var updated_at = item.updated_at;
      var title = item.title;
      var html_url = item.html_url;
      var className = index % 2 ? 'row-even not-selected' : 'row-odd not-selected';
      return _react2.default.createElement(
        'div',
        { key: index, className: className },
        _react2.default.createElement(
          'a',
          { href: html_url },
          _react2.default.createElement(
            'div',
            { style: { paddingBottom: '8px' } },
            _react2.default.createElement(
              'span',
              { style: { paddingRight: '8px' } },
              state
            ),
            _react2.default.createElement(
              'span',
              { style: { paddingRight: '8px' } },
              '(#' + number + ')'
            ),
            _react2.default.createElement(
              'span',
              { style: { paddingRight: '8px' } },
              created_at.replace('T', ' ').replace('Z', '')
            ),
            _react2.default.createElement(
              'span',
              null,
              updated_at.replace('T', ' ').replace('Z', '')
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            title
          )
        )
      );
    });
  },
  render: function render() {
    var _props2 = this.props;
    var repo = _props2.repo;
    var caption = _props2.caption;
    var _props2$issues = _props2.issues;
    var issues = _props2$issues === undefined ? [] : _props2$issues;
    var onCloseItem = _props2.onCloseItem;
    var _number = issues.length;
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
            { style: { paddingRight: '8px' } },
            repo
          ),
          _react2.default.createElement(
            'span',
            null,
            _number
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
        this._renderIssues(issues)
      )
    );
  }
});

exports.default = GitHubIssues;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\GitHubIssues.js.map