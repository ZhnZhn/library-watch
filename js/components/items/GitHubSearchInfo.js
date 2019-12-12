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

var _formatDate = function _formatDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var ItemDescription = function ItemDescription(props) {
  var _props$library = props.library,
      library = _props$library === void 0 ? {} : _props$library,
      name = library.name,
      description = library.description,
      size = library.size,
      created_at = library.created_at,
      pushed_at = library.pushed_at,
      stargazers_count = library.stargazers_count,
      open_issues = library.open_issues,
      watchers_count = library.watchers_count,
      html_url = library.html_url,
      _dateCreatedAt = _formatDate(created_at),
      _datePushedAt = _formatDate(pushed_at);

  return _react["default"].createElement("div", {
    className: "library"
  }, _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "library__title"
  }, name)), _react["default"].createElement("div", null, _react["default"].createElement("span", null, description)), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Size:"), _react["default"].createElement("span", {
    className: "library__value"
  }, size)), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Created At:"), _react["default"].createElement("span", {
    className: "library__value"
  }, _dateCreatedAt), _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Pushed At:"), _react["default"].createElement("span", {
    className: "library__value"
  }, _datePushedAt)), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Stars:"), _react["default"].createElement("span", {
    className: "library__value"
  }, stargazers_count), _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Issues:"), _react["default"].createElement("span", {
    className: "library__value"
  }, open_issues), _react["default"].createElement("span", {
    className: "library__value-title"
  }, "Watchers:"), _react["default"].createElement("span", {
    className: "library__value"
  }, watchers_count)), _react["default"].createElement("div", null, _react["default"].createElement("a", {
    className: "library__link",
    href: html_url
  }, "Link to GitHub Repository")));
};

var GitHubSearchInfo =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(GitHubSearchInfo, _Component);

  function GitHubSearchInfo() {
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

    return _this;
  }

  var _proto = GitHubSearchInfo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        repo = _this$props.repo,
        stars_count = _this$props.stars_count,
        pushed_at = _this$props.pushed_at,
        caption = _this$props.caption,
        library = _this$props.library,
        onCloseItem = _this$props.onCloseItem,
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
    }, _react["default"].createElement("span", null, repo), _react["default"].createElement("span", {
      style: _Item["default"].SPAN_VERSION
    }, stars_count), _react["default"].createElement("span", null, pushed_at))), _react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow
    }, _react["default"].createElement(ItemDescription, {
      library: library
    })));
  };

  return GitHubSearchInfo;
}(_react.Component);

var _default = GitHubSearchInfo;
exports["default"] = _default;
//# sourceMappingURL=GitHubSearchInfo.js.map