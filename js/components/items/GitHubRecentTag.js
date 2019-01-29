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

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _ButtonCircle = require('../zhnAtoms/ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _ShowHide = require('../zhnAtoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _OpenClose = require('../zhnAtoms/OpenClose2');

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
  var json = props.json,
      commit = json.commit,
      files = json.files,
      stats = json.stats,
      html_url = json.html_url,
      author = commit.author,
      message = commit.message,
      committer = commit.committer,
      authorDate = author.date,
      authorName = author.name,
      committerDate = committer.date,
      committerName = committer.name,
      total = stats.total,
      additions = stats.additions,
      deletions = stats.deletions;


  var _renderFiles = function _renderFiles() {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return files.map(function (file, index) {
      var className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
          filename = file.filename;

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

var GitHubRecentTag = function (_Component) {
  (0, _inherits3.default)(GitHubRecentTag, _Component);

  function GitHubRecentTag() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GitHubRecentTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GitHubRecentTag.__proto__ || Object.getPrototypeOf(GitHubRecentTag)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: true,
      isDetail: false,
      json: {}
    }, _this._handlerClickWatch = function () {
      var _this$props = _this.props,
          repo = _this$props.repo,
          requestType = _this$props.requestType,
          version = _this$props.version,
          onWatchItem = _this$props.onWatchItem,
          tagDate = _this.state.tagDate,
          caption = repo + ' ' + version,
          descr = ITEM_DESCRIPTION;

      onWatchItem({
        caption: caption,
        config: { repo: repo, requestType: requestType, version: version, caption: caption, descr: descr, date: tagDate }
      });
    }, _this._handlerClickDetail = function () {
      _this.props.onClickDetail().then(function (json) {
        //console.log(json);
        var _json$commit = json.commit,
            commit = _json$commit === undefined ? {} : _json$commit,
            _commit$committer = commit.committer,
            committer = _commit$committer === undefined ? {} : _commit$committer,
            tagDate = committer.date,
            _tagDate = tagDate.replace('T', ' ').replace('Z', '');

        _this.setState({ isDetail: true, isShow: true, json: json, tagDate: _tagDate });
      });
    }, _this._handlerToggleOpen = function () {
      _this.setState({ isShow: !_this.state.isShow });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GitHubRecentTag, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repo = _props.repo,
          version = _props.version,
          caption = _props.caption,
          onCloseItem = _props.onCloseItem,
          _styleCaption = styles.captionSpanOpen,
          _state = this.state,
          isShow = _state.isShow,
          isDetail = _state.isDetail,
          json = _state.json;

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
          })
        ),
        _react2.default.createElement(
          _ShowHide2.default,
          { isShow: isShow },
          isDetail && _react2.default.createElement(Detail, { json: json })
        )
      );
    }
  }]);
  return GitHubRecentTag;
}(_react.Component);

exports.default = GitHubRecentTag;
//# sourceMappingURL=GitHubRecentTag.js.map