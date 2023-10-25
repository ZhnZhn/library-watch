"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _A = _interopRequireDefault(require("../zhn-atoms/A"));
var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));
var _TagDetail = _interopRequireDefault(require("./TagDetail"));
var _CL = require("../styles/CL");
var _Item = _interopRequireDefault(require("./Item.Style"));
var _jsxRuntime = require("react/jsx-runtime");
const ITEM_DESCRIPTION = "GitHub Likely Recent Version Tag";
const _getTagDate = json => {
  const {
      commit
    } = json || {},
    {
      committer
    } = commit || {},
    {
      date
    } = committer || {};
  return (0, _formatStrDate.default)(date);
};
const GitHubRecentTag = _ref => {
  let {
    repo,
    version,
    caption,
    requestType,
    onCloseItem,
    onClickDetail,
    onWatchItem
  } = _ref;
  const [json, setJson] = (0, _uiApi.useState)(),
    [isShow, toggleIsShow, setIsShow] = (0, _useToggle.default)(true)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickDetail = (0, _uiApi.useCallback)(() => {
      onClickDetail().then(json => {
        setIsShow(true);
        setJson(json);
      }).catch(err => console.log(err));
    }, [onClickDetail])
    // toggleIsShow
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hClickWatch = (0, _uiApi.useCallback)(() => {
      const tagDate = _getTagDate(json),
        caption = `${repo} ${version}`;
      onWatchItem({
        caption,
        config: {
          repo,
          requestType,
          version,
          caption,
          descr: ITEM_DESCRIPTION,
          date: tagDate
        }
      });
      //onWatchItem, repo, version, requestType
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [json]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.default.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_ItemCaption.default, {
      style: _Item.default.PT_8,
      onClose: onCloseItem,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL.CL_BT_ITEM,
        title: caption,
        style: _Item.default.CAPTION_OPEN,
        onClick: toggleIsShow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: _Item.default.SPAN_VERSION,
          children: version
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.ButtonCircle, {
        caption: "W",
        title: "Add to Watch",
        style: _Item.default.BTN_CIRCLE,
        onClick: _hClickWatch
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.ButtonCircle, {
        caption: "D",
        title: "Load Tag Details",
        style: _Item.default.BTN_CIRCLE,
        onClick: _hClickDetail
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.ShowHide, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TagDetail.default, {
        json: json
      })
    })]
  });
};
var _default = exports.default = GitHubRecentTag;
//# sourceMappingURL=GitHubRecentTag.js.map