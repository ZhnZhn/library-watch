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

var ITEM_DESCRIPTION = "GitHub Repository Issues";
var S = {
  STATE: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: '#d7bb52'
  }),
  NUMBER: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: '#80c040'
  }),
  DATE: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: 'gray'
  })
};

var _toDate = function _toDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var GitHubIssues = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(GitHubIssues, _Component);

  function GitHubIssues() {
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

    _this._renderIssues = function (issues) {
      return issues.map(function (item, index) {
        var state = item.state,
            number = item.number,
            created_at = item.created_at,
            updated_at = item.updated_at,
            title = item.title,
            html_url = item.html_url,
            _creadedAt = _toDate(created_at),
            _updatedAt = created_at !== updated_at ? _toDate(updated_at) : '';

        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: _CL["default"].ROW_ITEM,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            href: html_url,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              style: _Item["default"].PB_8,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                style: S.STATE,
                children: state
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                style: S.NUMBER,
                children: "(#" + number + ")"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                style: S.DATE,
                children: _creadedAt
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                style: S.DATE,
                children: _updatedAt
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              children: title
            })]
          })
        }, index);
      });
    };

    return _this;
  }

  var _proto = GitHubIssues.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        repo = _this$props2.repo,
        caption = _this$props2.caption,
        _this$props2$issues = _this$props2.issues,
        issues = _this$props2$issues === void 0 ? [] : _this$props2$issues,
        onCloseItem = _this$props2.onCloseItem,
        _number = issues.length,
        isShow = this.state.isShow;
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
            style: _Item["default"].PR_8,
            children: repo
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: _number
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
          caption: "W",
          title: "Add to Watch",
          style: _Item["default"].BTN_CIRCLE,
          onClick: this._hClickWatch
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShow,
        children: this._renderIssues(issues)
      })]
    });
  };

  return GitHubIssues;
}(_react.Component);

var _default = GitHubIssues;
exports["default"] = _default;
//# sourceMappingURL=GitHubIssues.js.map