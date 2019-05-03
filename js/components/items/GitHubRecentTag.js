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

var _A = require('../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _Item = require('./Item.Style');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

var _formatDate = function _formatDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var Token = function Token(_ref) {
  var caption = _ref.caption,
      value = _ref.value;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'span',
      { className: 'library__value-title' },
      caption + ':'
    ),
    _react2.default.createElement(
      'span',
      { className: 'library__value' },
      value
    )
  );
};

var CellValue = function CellValue(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Token, props)
  );
};

var CellValueDate = function CellValueDate(_ref2) {
  var caption = _ref2.caption,
      value = _ref2.value,
      date = _ref2.date;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(Token, {
      caption: caption,
      value: value
    }),
    _react2.default.createElement(Token, {
      caption: 'Date',
      value: _formatDate(date)
    })
  );
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
    _react2.default.createElement(CellValue, {
      caption: 'Message',
      value: message
    }),
    _react2.default.createElement(CellValueDate, {
      caption: 'Author',
      value: authorName,
      date: authorDate
    }),
    _react2.default.createElement(CellValueDate, {
      caption: 'Committer',
      value: committerName,
      date: committerDate
    }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Token, {
        caption: 'Total',
        value: total
      }),
      _react2.default.createElement(Token, {
        caption: 'Additions',
        value: additions
      }),
      _react2.default.createElement(Token, {
        caption: 'Deletions',
        value: deletions
      })
    ),
    _react2.default.createElement(
      _A2.default.OpenClose2,
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
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GitHubRecentTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = GitHubRecentTag.__proto__ || Object.getPrototypeOf(GitHubRecentTag)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      isShow: true,
      isDetail: false,
      json: {}
    }, _this._hClickWatch = function () {
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
    }, _this._hClickDetail = function () {
      _this.props.onClickDetail().then(function (json) {
        var _json$commit = json.commit,
            commit = _json$commit === undefined ? {} : _json$commit,
            _commit$committer = commit.committer,
            committer = _commit$committer === undefined ? {} : _commit$committer,
            date = committer.date,
            tagDate = _formatDate(date);

        _this.setState({
          isDetail: true,
          isShow: true,
          json: json, tagDate: tagDate
        });
      });
    }, _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
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
          _state = this.state,
          isShow = _state.isShow,
          isDetail = _state.isDetail,
          json = _state.json;

      return _react2.default.createElement(
        'div',
        { style: _Item2.default.ROOT },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
          _react2.default.createElement(
            'button',
            {
              className: 'not-selected',
              title: caption,
              style: _Item2.default.CAPTION_OPEN,
              onClick: this._hToggleOpen
            },
            _react2.default.createElement(
              'span',
              null,
              repo
            ),
            _react2.default.createElement(
              'span',
              { style: _Item2.default.SPAN_VERSION },
              version
            )
          ),
          _react2.default.createElement(_A2.default.ButtonCircle, {
            caption: 'W',
            title: 'Add to Watch',
            style: _Item2.default.BTN_CIRCLE,
            onClick: this._hClickWatch
          }),
          _react2.default.createElement(_A2.default.ButtonCircle, {
            caption: 'D',
            title: 'Load Tag Details',
            style: _Item2.default.BTN_CIRCLE,
            onClick: this._hClickDetail
          })
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
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