"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _CL = require("../styles/CL");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useKeyDelete = _interopRequireDefault(require("../hooks/useKeyDelete"));
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _DivComments = _interopRequireDefault(require("./DivComments"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const S_STATE = {
    ..._Item.S_PR_8,
    color: '#d7bb52'
  },
  S_NUMBER = {
    ..._Item.S_PR_8,
    color: '#80c040'
  },
  S_DATE = {
    ..._Item.S_PR_8,
    ..._Item.S_COLOR_GREY
  },
  S_SHOW_HIDE = {
    padding: 8
  };
const IssueItem = _ref => {
  let {
    url,
    state,
    number,
    createdAt,
    updatedAt,
    title,
    comments,
    body
  } = _ref;
  const _refItem = (0, _uiApi.useRef)(),
    [isDescr, toggleIsDescr] = (0, _useToggle.default)(false),
    [isShow, setIsShow] = (0, _uiApi.useState)(true),
    _close = (0, _uiApi.useCallback)(() => {
      setIsShow(false);
      (0, _uiApi.focusRefNextSiblingFirstChildElement)(_refItem);
    }, []),
    _onKeyDownItem = (0, _useKeyDelete.default)(_close),
    _onKeyDown = (0, _useKeyEnter.default)(toggleIsDescr, {
      isPropagation: true
    });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
    refEl: _refItem,
    isShow: isShow,
    className: _CL.CL_ITEM,
    onKeyDown: _onKeyDownItem,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "button",
      tabIndex: "0",
      className: _CL.CL_ITEM_TITLE,
      onClick: toggleIsDescr,
      onKeyDown: _onKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: _Item.S_PB_8,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_STATE,
          children: state
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_NUMBER,
          children: "(#" + number + ")"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_DATE,
          children: createdAt
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: S_DATE,
          children: updatedAt
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: title
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ShowHide.default, {
      isShow: isDescr,
      style: S_SHOW_HIDE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        className: _CL.CL_LINK_WARPPER,
        href: url,
        children: body
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivComments.default, {
        n: comments
      })]
    })]
  });
};
var _default = exports.default = IssueItem;
//# sourceMappingURL=IssueItem.js.map