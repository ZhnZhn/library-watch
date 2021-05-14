"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _TagDetail = _interopRequireDefault(require("./TagDetail"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";

var _getTagDate = function _getTagDate(json) {
  var _ref = json || {},
      commit = _ref.commit,
      _ref2 = commit || {},
      committer = _ref2.committer,
      _ref3 = committer || {},
      date = _ref3.date;

  return (0, _formatStrDate["default"])(date);
};

var GitHubRecentTag = function GitHubRecentTag(_ref4) {
  var repo = _ref4.repo,
      version = _ref4.version,
      caption = _ref4.caption,
      onCloseItem = _ref4.onCloseItem,
      onClickDetail = _ref4.onClickDetail,
      requestType = _ref4.requestType,
      onWatchItem = _ref4.onWatchItem;

  var _useState = (0, _react.useState)(true),
      isShow = _useState[0],
      setIsShow = _useState[1],
      _useState2 = (0, _react.useState)(),
      json = _useState2[0],
      setJson = _useState2[1],
      _hToggle = (0, _react.useCallback)(function () {
    return setIsShow(function (is) {
      return !is;
    });
  }, []),
      _hClickDetail = (0, _react.useCallback)(function () {
    onClickDetail().then(function (json) {
      setIsShow(true);
      setJson(json);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [onClickDetail]),
      _hClickWatch = (0, _react.useCallback)(function () {
    var tagDate = _getTagDate(json),
        caption = repo + " " + version;

    onWatchItem({
      caption: caption,
      config: {
        repo: repo,
        requestType: requestType,
        version: version,
        caption: caption,
        descr: ITEM_DESCRIPTION,
        date: tagDate
      }
    }); //onWatchItem, repo, version, requestType
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [json]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item["default"].ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption["default"], {
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
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "W",
        title: "Add to Watch",
        style: _Item["default"].BTN_CIRCLE,
        onClick: _hClickWatch
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ButtonCircle, {
        caption: "D",
        title: "Load Tag Details",
        style: _Item["default"].BTN_CIRCLE,
        onClick: _hClickDetail
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].ShowHide, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TagDetail["default"], {
        json: json
      })
    })]
  });
};

var _default = GitHubRecentTag;
exports["default"] = _default;
//# sourceMappingURL=GitHubRecentTag.js.map