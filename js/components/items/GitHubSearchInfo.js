"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _ItemCaption = _interopRequireDefault(require("./ItemCaption"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("react/jsx-runtime");
const ItemDescription = _ref => {
  let {
    library
  } = _ref;
  const {
      name,
      description,
      size,
      created_at,
      pushed_at,
      stargazers_count,
      open_issues,
      watchers_count,
      html_url
    } = library || {},
    _dateCreatedAt = (0, _formatStrDate.default)(created_at),
    _datePushedAt = (0, _formatStrDate.default)(pushed_at);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _styleFn.CL_LIB,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_TITLE,
        children: name
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: description
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Size:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: size
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Created At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: _dateCreatedAt
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Pushed At:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: _datePushedAt
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Stars:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: stargazers_count
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Issues:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: open_issues
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE_TITLE,
        children: "Watchers:"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: _styleFn.CL_LIB_VALUE,
        children: watchers_count
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        className: _styleFn.CL_SOURCE_LINK,
        href: html_url,
        children: "Link to GitHub Repository"
      })
    })]
  });
};
const GitHubSearchInfo = _ref2 => {
  let {
    repo,
    stars_count,
    pushed_at,
    caption,
    library,
    onCloseItem
  } = _ref2;
  const [isShow, _hToggle] = (0, _useToggle.default)(true);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: _Item.S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemCaption.default, {
      style: _Item.S_PT_8,
      onClose: onCloseItem,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        className: _styleFn.CL_BT_ITEM,
        title: caption,
        style: _Item.S_CAPTION_OPEN,
        onClick: _hToggle,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: repo
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          style: _Item.S_SPAN_VERSION,
          children: stars_count
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: pushed_at
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: isShow,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemDescription, {
        library: library
      })
    })]
  });
};
var _default = exports.default = GitHubSearchInfo;
//# sourceMappingURL=GitHubSearchInfo.js.map