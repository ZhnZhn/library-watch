'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _timeago2 = require('timeago.js');

var _timeago3 = _interopRequireDefault(_timeago2);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _DateAgo = require('../zhnAtoms/DateAgo');

var _DateAgo2 = _interopRequireDefault(_DateAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Repository Commits";

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

var GitHubCommits = _react2.default.createClass({
  displayName: 'GitHubCommits',
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
  _renderCommits: function _renderCommits(commits) {
    var _timeago = (0, _timeago3.default)(Date.now());
    return commits.map(function (item, index) {
      var _item$commit = item.commit;
      var commit = _item$commit === undefined ? {} : _item$commit;
      var html_url = item.html_url;
      var _commit$message = commit.message;
      var message = _commit$message === undefined ? '' : _commit$message;
      var _commit$committer = commit.committer;
      var committer = _commit$committer === undefined ? {} : _commit$committer;
      var _committer$date = committer.date;
      var date = _committer$date === undefined ? '' : _committer$date;
      var _committer$name = committer.name;
      var name = _committer$name === undefined ? '' : _committer$name;
      var _dateTime = date.replace('T', ' ').replace('Z', '');
      var _dateAgo = _timeago.format(_dateTime);
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
              name
            ),
            _react2.default.createElement(_DateAgo2.default, {
              dateAgo: _dateAgo,
              date: _dateTime
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            message
          )
        )
      );
    });
  },
  render: function render() {
    var _props2 = this.props;
    var repo = _props2.repo;
    var caption = _props2.caption;
    var commits = _props2.commits;
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
        this._renderCommits(commits)
      )
    );
  }
});

exports.default = GitHubCommits;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\items\GitHubCommits.js.map