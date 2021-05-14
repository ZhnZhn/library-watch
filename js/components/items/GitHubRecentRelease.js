"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useWatchItem = _interopRequireDefault(require("./hooks/useWatchItem"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Repository Recent Release";

var _crCaption = function _crCaption(_ref) {
  var repo = _ref.repo,
      version = _ref.version;
  return repo + " " + version;
};
/*
caption, repo, version,
published_at, html_url,
onCloseItem,
onWatchItem, requestType
*/


var GitHubRecentRelease = function GitHubRecentRelease(props) {
  var caption = props.caption,
      repo = props.repo,
      version = props.version,
      published_at = props.published_at,
      html_url = props.html_url,
      onCloseItem = props.onCloseItem,
      onWatchItem = props.onWatchItem,
      _useToggle = (0, _useToggle2["default"])(true),
      isShow = _useToggle[0],
      _hToggle = _useToggle[1],
      _hClickWatch = (0, _useWatchItem["default"])(onWatchItem, props, ITEM_DESCRIPTION, _crCaption);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item["default"].ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption["default"], {
      style: _Item["default"].PT_8,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL["default"].BT_ITEM,
        title: caption,
        style: _Item["default"].CAPTION_OPEN,
        onClick: _hToggle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: _Item["default"].SPAN_VERSION,
          children: version
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: published_at
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "W",
        title: "Add to Watch",
        style: _Item["default"].BTN_CIRCLE,
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
      isShow: isShow,
      style: _Item["default"].PT_8,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        href: html_url,
        className: _CL["default"].SOURCE_LINK,
        style: _Item["default"].ML_8,
        children: "Link to description of recent release tag"
      })
    })]
  });
};

var _default = GitHubRecentRelease;
exports["default"] = _default;
//# sourceMappingURL=GitHubRecentRelease.js.map