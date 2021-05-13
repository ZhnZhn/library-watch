"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CommitList = _interopRequireDefault(require("./CommitList"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Repository Commits";

var _crItemWatch = function _crItemWatch(repo, requestType) {
  var caption = "" + repo;
  return {
    caption: caption,
    config: {
      version: '',
      descr: ITEM_DESCRIPTION,
      repo: repo,
      requestType: requestType,
      caption: caption
    }
  };
};

var GitHubCommits = function GitHubCommits(_ref) {
  var repo = _ref.repo,
      caption = _ref.caption,
      commits = _ref.commits,
      requestType = _ref.requestType,
      onCloseItem = _ref.onCloseItem,
      onWatchItem = _ref.onWatchItem;

  var _useState = (0, _react.useState)(true),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _hToggle = (0, _react.useCallback)(function () {
    return setIsShow(function (is) {
      return !is;
    });
  }, []),
      _hClickWatch = (0, _react.useCallback)(function () {
    onWatchItem(_crItemWatch(repo, requestType));
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps*/


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