"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useWatchItem = _interopRequireDefault(require("./hooks/useWatchItem"));
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const ITEM_DESCRIPTION = "GitHub Repository Recent Release";
const _crCaption = _ref => {
  let {
    repo,
    version
  } = _ref;
  return `${repo} ${version}`;
};

/*
caption, repo, version,
published_at, html_url,
onCloseItem,
onWatchItem, requestType
*/

const GitHubRecentRelease = props => {
  const {
      caption,
      repo,
      version,
      published_at,
      html_url,
      onCloseItem,
      onWatchItem
    } = props,
    [isShow, _hToggle] = (0, _useToggle.default)(true),
    _hClickWatch = (0, _useWatchItem.default)(onWatchItem, props, ITEM_DESCRIPTION, _crCaption);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: _Item.S_PT_8,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _styleFn.CL_BT_ITEM,
        title: caption,
        style: _Item.S_CAPTION_OPEN,
        onClick: _hToggle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: _Item.S_SPAN_VERSION,
          children: version
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: published_at
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        caption: "W",
        title: "Add to Watch",
        style: _Item.S_BTN_CIRCLE,
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      style: _Item.S_PT_8,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        className: _styleFn.CL_SOURCE_LINK,
        style: _Item.S_ML_8,
        href: html_url,
        children: "Link to description of recent release tag"
      })
    })]
  });
};
var _default = exports.default = GitHubRecentRelease;
//# sourceMappingURL=GitHubRecentRelease.js.map