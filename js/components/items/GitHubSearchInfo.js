"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "library",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__title",
        children: name
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: description
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Size:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: size
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Created At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: _dateCreatedAt
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Pushed At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: _datePushedAt
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Stars:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: stargazers_count
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Issues:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: open_issues
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value-title",
        children: "Watchers:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "library__value",
        children: watchers_count
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "library__link",
        href: html_url,
        children: "Link to GitHub Repository"
      })
    })]
  });
};

var GitHubSearchInfo = /*#__PURE__*/function (_Component) {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: _Item["default"].ROOT,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemCaption["default"], {
        onClose: onCloseItem,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
          className: _CL["default"].BT_ITEM,
          title: caption,
          style: _Item["default"].CAPTION_OPEN,
          onClick: this._hToggleOpen,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: repo
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: _Item["default"].SPAN_VERSION,
            children: stars_count
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: pushed_at
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
        isShow: isShow,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemDescription, {
          library: library
        })
      })]
    });
  };

  return GitHubSearchInfo;
}(_react.Component);

var _default = GitHubSearchInfo;
exports["default"] = _default;
//# sourceMappingURL=GitHubSearchInfo.js.map