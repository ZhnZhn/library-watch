"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useWatchItem = _interopRequireDefault(require("./hooks/useWatchItem"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _IssueList = _interopRequireDefault(require("./IssueList"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Repository Issues";
/*
repo, caption, issues, onCloseItem,
onWatchItem, requestType
*/

var GitHubIssues = function GitHubIssues(props) {
  var caption = props.caption,
      repo = props.repo,
      issues = props.issues,
      onCloseItem = props.onCloseItem,
      onWatchItem = props.onWatchItem,
      _useToggle = (0, _useToggle2["default"])(true),
      isShow = _useToggle[0],
      _hToggle = _useToggle[1],
      _hClickWatch = (0, _useWatchItem["default"])(onWatchItem, props, ITEM_DESCRIPTION),
      _number = issues.length;

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
          style: _Item["default"].PR_8,
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: _number
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "W",
        title: "Add to Watch",
        style: _Item["default"].BTN_CIRCLE,
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IssueList["default"], {
        issues: issues
      })
    })]
  });
};

var _default = GitHubIssues;
exports["default"] = _default;
//# sourceMappingURL=GitHubIssues.js.map