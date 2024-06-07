"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useWatchItem = _interopRequireDefault(require("./hooks/useWatchItem"));
var _ButtonCircle = _interopRequireDefault(require("../zhn/ButtonCircle"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));
var _IssueList = _interopRequireDefault(require("./IssueList"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const ITEM_DESCRIPTION = "GitHub Repository Issues";

/*
repo, caption, issues, onCloseItem,
onWatchItem, requestType
*/

const GitHubIssues = props => {
  const {
      caption,
      repo,
      issues,
      onCloseItem,
      onWatchItem
    } = props,
    [isShow, _hToggle] = (0, _useToggle.default)(true),
    _hClickWatch = (0, _useWatchItem.default)(onWatchItem, props, ITEM_DESCRIPTION),
    _number = issues.length;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: _Item.S_PT_8,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL.CL_BT_ITEM,
        title: caption,
        style: _Item.S_CAPTION_OPEN,
        onClick: _hToggle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: _Item.S_PR_8,
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: _number
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonCircle.default, {
        caption: "W",
        title: "Add to Watch",
        style: _Item.S_BTN_CIRCLE,
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IssueList.default, {
        items: issues
      })
    })]
  });
};
var _default = exports.default = GitHubIssues;
//# sourceMappingURL=GitHubIssues.js.map