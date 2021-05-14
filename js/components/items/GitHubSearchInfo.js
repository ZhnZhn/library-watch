"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));

var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var ItemDescription = function ItemDescription(_ref) {
  var library = _ref.library;

  var _ref2 = library || {},
      name = _ref2.name,
      description = _ref2.description,
      size = _ref2.size,
      created_at = _ref2.created_at,
      pushed_at = _ref2.pushed_at,
      stargazers_count = _ref2.stargazers_count,
      open_issues = _ref2.open_issues,
      watchers_count = _ref2.watchers_count,
      html_url = _ref2.html_url,
      _dateCreatedAt = (0, _formatStrDate["default"])(created_at),
      _datePushedAt = (0, _formatStrDate["default"])(pushed_at);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL["default"].LIB,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_T,
        children: name
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: description
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Size:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: size
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Created At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: _dateCreatedAt
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Pushed At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: _datePushedAt
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Stars:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: stargazers_count
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Issues:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: open_issues
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_VT,
        children: "Watchers:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _CL["default"].LIB_V,
        children: watchers_count
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: _CL["default"].SOURCE_LINK,
        href: html_url,
        children: "Link to GitHub Repository"
      })
    })]
  });
};

var GitHubSearchInfo = function GitHubSearchInfo(_ref3) {
  var repo = _ref3.repo,
      stars_count = _ref3.stars_count,
      pushed_at = _ref3.pushed_at,
      caption = _ref3.caption,
      library = _ref3.library,
      onCloseItem = _ref3.onCloseItem;

  var _useToggle = (0, _useToggle2["default"])(true),
      isShow = _useToggle[0],
      _hToggle = _useToggle[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item["default"].ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemCaption["default"], {
      onClose: onCloseItem,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _CL["default"].BT_ITEM,
        title: caption,
        style: _Item["default"].CAPTION_OPEN,
        onClick: _hToggle,
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

var _default = GitHubSearchInfo;
exports["default"] = _default;
//# sourceMappingURL=GitHubSearchInfo.js.map