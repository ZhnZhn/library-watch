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

var ITEM_DESCRIPTION = "GitHub Repository Recent Release";

var GitHubRecentRelease = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GitHubRecentRelease, _Component);

  function GitHubRecentRelease() {
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
          version = _this$props.version,
          published_at = _this$props.published_at,
          onWatchItem = _this$props.onWatchItem,
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
          date: published_at
        }
      });
    };

    return _this;
  }

  var _proto = GitHubRecentRelease.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        caption = _this$props2.caption,
        repo = _this$props2.repo,
        version = _this$props2.version,
        published_at = _this$props2.published_at,
        html_url = _this$props2.html_url,
        onCloseItem = _this$props2.onCloseItem,
        isShow = this.state.isShow;
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
    }, version), /*#__PURE__*/_react["default"].createElement("span", null, published_at)), /*#__PURE__*/_react["default"].createElement(_A["default"].ButtonCircle, {
      caption: "W",
      title: "Add to Watch",
      style: _Item["default"].BTN_CIRCLE,
      onClick: this._hClickWatch
    })), /*#__PURE__*/_react["default"].createElement(_A["default"].ShowHide, {
      isShow: isShow,
      style: _Item["default"].PT_8
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: html_url,
      className: "github-link",
      style: _Item["default"].ML_8
    }, "Link to description of recent release tag")));
  };

  return GitHubRecentRelease;
}(_react.Component);

var _default = GitHubRecentRelease;
exports["default"] = _default;
//# sourceMappingURL=GitHubRecentRelease.js.map