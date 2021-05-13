"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _useWatchItem = _interopRequireDefault(require("./hooks/useWatchItem"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CommitList = _interopRequireDefault(require("./CommitList"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Repository Commits";
/*
repo, caption, commits, onCloseItem,
onWatchItem, requestType,
*/

var GitHubCommits = function GitHubCommits(props) {
  var caption = props.caption,
      repo = props.repo,
      commits = props.commits,
      onCloseItem = props.onCloseItem,
      _useToggle = (0, _useToggle2["default"])(true),
      isShow = _useToggle[0],
      _hToggle = _useToggle[1],
      _hClickWatch = (0, _useWatchItem["default"])(props, ITEM_DESCRIPTION);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item["default"].ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption["default"], {
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: _CL["default"].BT_ITEM,
        title: caption,
        style: _Item["default"].CAPTION_OPEN,
        onClick: _hToggle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "W",
        title: "Add to Watch",
        style: _Item["default"].BTN_CIRCLE,
        onClick: _hClickWatch
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CommitList["default"], {
        commits: commits
      })
    })]
  });
};

var _default = GitHubCommits;
exports["default"] = _default;
//# sourceMappingURL=GitHubCommits.js.map