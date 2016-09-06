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

var _OpenClose = require('../zhnAtoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

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

var Detail = function Detail(props) {
  var json = props.json;
  var commit = json.commit;
  var files = json.files;
  var stats = json.stats;
  var html_url = json.html_url;
  var author = commit.author;
  var message = commit.message;
  var committer = commit.committer;
  var authorDate = author.date;
  var authorName = author.name;
  var committerDate = committer.date;
  var committerName = committer.name;
  var total = stats.total;
  var additions = stats.additions;
  var deletions = stats.deletions;


  var _renderFiles = function _renderFiles() {
    var files = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    return files.map(function (file, index) {
      var className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected';
      var filename = file.filename;

      return _react2.default.createElement(
        'div',
        { key: index, className: className },
        filename
      );
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'library' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Message:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        message
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Author:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        authorName
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Date:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        authorDate.replace('T', ' ').replace('Z', '')
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Committer:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        committerName
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Date:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        committerDate.replace('T', ' ').replace('Z', '')
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Total:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        total
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Additions:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        additions
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value-title' },
        'Deletions:'
      ),
      _react2.default.createElement(
        'span',
        { className: 'library__value' },
        deletions
      )
    ),
    _react2.default.createElement(
      _OpenClose2.default,
      { caption: 'Files (' + files.length + ')', isClose: true },
      _renderFiles(files)
    ),
    _react2.default.createElement(
      'a',
      {
        href: html_url,
        className: 'github-link'
      },
      'Link to description of commit'
    )
  );
};

var GitHubRecentTag = _react2.default.createClass({
  displayName: 'GitHubRecentTag',
  getInitialState: function getInitialState() {
    return {
      isShow: true,
      isDetail: false,
      json: {}
    };
  },
  _handlerClickWatch: function _handlerClickWatch() {
    var _props = this.props;
    var repo = _props.repo;
    var requestType = _props.requestType;
    var version = _props.version;
    var onWatchItem = _props.onWatchItem;
    var tagDate = this.state.tagDate;
    var caption = repo + ' ' + version;
    var descr = ITEM_DESCRIPTION;
    onWatchItem({
      caption: caption,
      config: { repo: repo, requestType: requestType, version: version, caption: caption, descr: descr, date: tagDate }
    });
  },
  _handlerClickDetail: function _handlerClickDetail() {
    var _this = this;

    this.props.onClickDetail().then(function (json) {
      //console.log(json);
      var _json$commit = json.commit;
      var commit = _json$commit === undefined ? {} : _json$commit;
      var _commit$committer = commit.committer;
      var committer = _commit$committer === undefined ? {} : _commit$committer;
      var tagDate = committer.date;
      var _tagDate = tagDate.replace('T', ' ').replace('Z', '');
      _this.setState({ isDetail: true, isShow: true, json: json, tagDate: _tagDate });
    });
  },
  _handlerToggleOpen: function _handlerToggleOpen() {
    this.setState({ isShow: !this.state.isShow });
  },
  _renderDetail: function _renderDetail(json) {
    return _react2.default.createElement(Detail, {
      json: json
    });
  },
  render: function render() {
    var _props2 = this.props;
    var repo = _props2.repo;
    var version = _props2.version;
    var caption = _props2.caption;
    var onCloseItem = _props2.onCloseItem;
    var _styleCaption = styles.captionSpanOpen;
    var _state = this.state;
    var isShow = _state.isShow;
    var isDetail = _state.isDetail;
    var json = _state.json;

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
          )
        ),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'W',
          title: 'Add to Watch',
          style: styles.BTN_CIRCLE,
          onClick: this._handlerClickWatch
        }),
        _react2.default.createElement(_ButtonCircle2.default, {
          caption: 'D',
          title: 'Load Tag Details',
          style: styles.BTN_CIRCLE,
          onClick: this._handlerClickDetail
        }),
        _react2.default.createElement(_SvgClose2.default, { onClose: onCloseItem })
      ),
      _react2.default.createElement(
        _ShowHide2.default,
        { isShow: isShow },
        isDetail && this._renderDetail(json)
      )
    );
  }
});

exports.default = GitHubRecentTag;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\items\GitHubRecentTag.js.map