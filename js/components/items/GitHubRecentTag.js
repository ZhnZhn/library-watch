"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

var _formatDate = function _formatDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var Token = function Token(_ref) {
  var caption = _ref.caption,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "library__value-title"
  }, caption + ':'), /*#__PURE__*/_react["default"].createElement("span", {
    className: "library__value"
  }, value));
};

var CellValue = function CellValue(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Token, props));
};

var CellValueDate = function CellValueDate(_ref2) {
  var caption = _ref2.caption,
      value = _ref2.value,
      date = _ref2.date;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Token, {
    caption: caption,
    value: value
  }), /*#__PURE__*/_react["default"].createElement(Token, {
    caption: "Date",
    value: _formatDate(date)
  }));
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

  var _renderFiles = function _renderFiles(files) {
    if (files === void 0) {
      files = [];
    }

    return files.map(function (file, index) {
      var className = index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
          filename = file.filename;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: className
      }, filename);
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "library"
  }, /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "Message",
    value: message
  }), /*#__PURE__*/_react["default"].createElement(CellValueDate, {
    caption: "Author",
    value: authorName,
    date: authorDate
  }), /*#__PURE__*/_react["default"].createElement(CellValueDate, {
    caption: "Committer",
    value: committerName,
    date: committerDate
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Token, {
    caption: "Total",
    value: total
  }), /*#__PURE__*/_react["default"].createElement(Token, {
    caption: "Additions",
    value: additions
  }), /*#__PURE__*/_react["default"].createElement(Token, {
    caption: "Deletions",
    value: deletions
  })), /*#__PURE__*/_react["default"].createElement(_A["default"].OpenClose2, {
    caption: "Files (" + files.length + ")",
    isClose: true
  }, _renderFiles(files)), /*#__PURE__*/_react["default"].createElement("a", {
    href: html_url,
    className: "github-link"
  }, "Link to description of commit"));
};

var GitHubRecentTag = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GitHubRecentTag, _Component);

  function GitHubRecentTag() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: true,
      isDetail: false,
      json: {}
    };

    _this._hClickWatch = function () {
      var _this$props = _this.props,
          repo = _this$props.repo,
          requestType = _this$props.requestType,
          version = _this$props.version,
          onWatchItem = _this$props.onWatchItem,
          tagDate = _this.state.tagDate,
          caption = repo + " " + version,
          descr = ITEM_DESCRIPTION;
      onWatchItem({
        caption: caption,
        config: {
          repo: repo,
          requestType: requestType,
          version: version,
          caption: caption,
          descr: descr,
          date: tagDate
        }
      });
    };

    _this._hClickDetail = function () {
      _this.props.onClickDetail().then(function (json) {
        var _json$commit = json.commit,
            commit = _json$commit === void 0 ? {} : _json$commit,
            _commit$committer = commit.committer,
            committer = _commit$committer === void 0 ? {} : _commit$committer,
            date = committer.date,
            tagDate = _formatDate(date);

        _this.setState({
          isDetail: true,
          isShow: true,
          json: json,
          tagDate: tagDate
        });
      });
    };

    _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    return _this;
  }

  var _proto = GitHubRecentTag.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        repo = _this$props2.repo,
        version = _this$props2.version,
        caption = _this$props2.caption,
        onCloseItem = _this$props2.onCloseItem,
        _this$state = this.state,
        isShow = _this$state.isShow,
        isDetail = _this$state.isDetail,
        json = _this$state.json;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: _Item["default"].ROOT
    }, /*#__PURE__*/_react["default"].createElement(_ItemCaption["default"], {
      onClose: onCloseItem
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "not-selected",
      title: caption,
      style: _Item["default"].CAPTION_OPEN,
      onClick: this._hToggleOpen
    }, /*#__PURE__*/_react["default"].createElement("span", null, repo), /*#__PURE__*/_react["default"].createElement("span", {
      style: _Item["default"].SPAN_VERSION
    }, version)), /*#__PURE__*/_react["default"].createElement(_A["default"].ButtonCircle, {
      caption: "W",
      title: "Add to Watch",
      style: _Item["default"].BTN_CIRCLE,
      onClick: this._hClickWatch
    }), /*#__PURE__*/_react["default"].createElement(_A["default"].ButtonCircle, {
      caption: "D",
      title: "Load Tag Details",
      style: _Item["default"].BTN_CIRCLE,
      onClick: this._hClickDetail
    })), /*#__PURE__*/_react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow
    }, isDetail && /*#__PURE__*/_react["default"].createElement(Detail, {
      json: json
    })));
  };

  return GitHubRecentTag;
}(_react.Component);

var _default = GitHubRecentTag;
exports["default"] = _default;
//# sourceMappingURL=GitHubRecentTag.js.map