"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

var _formatDate = function _formatDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var Token = function Token(_ref) {
  var caption = _ref.caption,
      value = _ref.value;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "library__value-title",
      children: caption + ':'
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "library__value",
      children: value
    })]
  });
};

var CellValue = function CellValue(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, (0, _extends2["default"])({}, props))
  });
};

var CellValueDate = function CellValueDate(_ref2) {
  var caption = _ref2.caption,
      value = _ref2.value,
      date = _ref2.date;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: caption,
      value: value
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: "Date",
      value: _formatDate(date)
    })]
  });
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: className,
        children: filename
      }, index);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "library",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CellValue, {
      caption: "Message",
      value: message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CellValueDate, {
      caption: "Author",
      value: authorName,
      date: authorDate
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CellValueDate, {
      caption: "Committer",
      value: committerName,
      date: committerDate
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Total",
        value: total
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Additions",
        value: additions
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Deletions",
        value: deletions
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].OpenClose2, {
      caption: "Files (" + files.length + ")",
      isClose: true,
      children: _renderFiles(files)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: html_url,
      className: "github-link",
      children: "Link to description of commit"
    })]
  });
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Item["default"].ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption["default"], {
        onClose: onCloseItem,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          className: _CL["default"].BT_ITEM,
          title: caption,
          style: _Item["default"].CAPTION_OPEN,
          onClick: this._hToggleOpen,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: repo
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: _Item["default"].SPAN_VERSION,
            children: version
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
          caption: "W",
          title: "Add to Watch",
          style: _Item["default"].BTN_CIRCLE,
          onClick: this._hClickWatch
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
          caption: "D",
          title: "Load Tag Details",
          style: _Item["default"].BTN_CIRCLE,
          onClick: this._hClickDetail
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShow,
        children: isDetail && /*#__PURE__*/(0, _jsxRuntime.jsx)(Detail, {
          json: json
        })
      })]
    });
  };

  return GitHubRecentTag;
}(_react.Component);

var _default = GitHubRecentTag;
exports["default"] = _default;
//# sourceMappingURL=GitHubRecentTag.js.map