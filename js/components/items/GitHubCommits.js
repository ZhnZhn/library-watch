"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _timeago2 = _interopRequireDefault(require("timeago.js"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var ITEM_DESCRIPTION = "GitHub Repository Commits";
var CL_ITEM = 'row-item not-selected';

var GitHubCommits =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GitHubCommits, _Component);

  function GitHubCommits() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isShow: true
    };

    _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._hClickWatch = function () {
      var _this$props = _this.props,
          repo = _this$props.repo,
          requestType = _this$props.requestType,
          onWatchItem = _this$props.onWatchItem,
          caption = "" + repo,
          descr = ITEM_DESCRIPTION;
      onWatchItem({
        caption: caption,
        config: {
          repo: repo,
          requestType: requestType,
          version: '',
          caption: caption,
          descr: descr
        }
      });
    };

    _this._renderCommits = function (commits) {
      var _timeago = (0, _timeago2["default"])(Date.now());

      return commits.map(function (item, index) {
        var _item$commit = item.commit,
            commit = _item$commit === void 0 ? {} : _item$commit,
            html_url = item.html_url,
            _commit$message = commit.message,
            message = _commit$message === void 0 ? '' : _commit$message,
            _commit$committer = commit.committer,
            committer = _commit$committer === void 0 ? {} : _commit$committer,
            _committer$date = committer.date,
            date = _committer$date === void 0 ? '' : _committer$date,
            _committer$name = committer.name,
            name = _committer$name === void 0 ? '' : _committer$name,
            _dateTime = date.replace('T', ' ').replace('Z', ''),
            _dateAgo = _timeago.format(_dateTime);

        return _react["default"].createElement("div", {
          key: index,
          className: CL_ITEM
        }, _react["default"].createElement("a", {
          href: html_url
        }, _react["default"].createElement("div", {
          style: _Item["default"].PB_8
        }, _react["default"].createElement("span", {
          style: _Item["default"].PR_8
        }, name), _react["default"].createElement(_A["default"].DateAgo, {
          dateAgo: _dateAgo,
          date: _dateTime
        })), _react["default"].createElement("div", null, message)));
      });
    };

    return _this;
  }

  var _proto = GitHubCommits.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        repo = _this$props2.repo,
        caption = _this$props2.caption,
        commits = _this$props2.commits,
        onCloseItem = _this$props2.onCloseItem,
        isShow = this.state.isShow;
    return _react["default"].createElement("div", {
      style: _Item["default"].ROOT
    }, _react["default"].createElement(_ItemCaption["default"], {
      onClose: onCloseItem
    }, _react["default"].createElement("button", {
      className: "not-selected",
      title: caption,
      style: _Item["default"].CAPTION_OPEN,
      onClick: this._hToggleOpen
    }, _react["default"].createElement("span", null, repo)), _react["default"].createElement(_A["default"].ButtonCircle, {
      caption: "W",
      title: "Add to Watch",
      style: _Item["default"].BTN_CIRCLE,
      onClick: this._hClickWatch
    })), _react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow
    }, this._renderCommits(commits)));
  };

  return GitHubCommits;
}(_react.Component);

var _default = GitHubCommits;
exports["default"] = _default;
//# sourceMappingURL=GitHubCommits.js.map