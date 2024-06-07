"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _OpenClose = _interopRequireDefault(require("../zhn/OpenClose2"));
var _Link = _interopRequireDefault(require("../zhn/Link"));
var _jsxRuntime = require("react/jsx-runtime");
const _isArr = Array.isArray;
const Token = _ref => {
  let {
    caption,
    value
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_LIB_VALUE_TITLE,
      children: caption + ":"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_LIB_VALUE,
      children: value
    })]
  });
};
const CellValue = props => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
    ...props
  })
});
const CellValueDate = _ref2 => {
  let {
    caption,
    value,
    date
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: caption,
      value: value
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: "Date",
      value: (0, _formatStrDate.default)(date)
    })]
  });
};
const FileList = _ref3 => {
  let {
    files
  } = _ref3;
  return (files || []).map((file, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _CL.CL_FILE_ITEM,
    children: file ? file.filename : null
  }, index));
};
const TagDetail = _ref4 => {
  let {
    json
  } = _ref4;
  if (!json) {
    return null;
  }
  const {
      commit,
      files,
      stats,
      html_url
    } = json,
    {
      author,
      message,
      committer
    } = commit || {},
    {
      date: authorDate,
      name: authorName
    } = author || {},
    {
      date: committerDate,
      name: committerName
    } = committer || {},
    {
      total,
      additions,
      deletions
    } = stats || {};
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_LIB,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(CellValue, {
      caption: "Message",
      value: message
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CellValueDate, {
      caption: "Author",
      value: authorName,
      date: authorDate
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(CellValueDate, {
      caption: "Committer",
      value: committerName,
      date: committerDate
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Total",
        value: total
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Additions",
        value: additions
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
        caption: "Deletions",
        value: deletions
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OpenClose.default, {
      caption: "Files (" + (_isArr(files) ? files.length : '') + ")",
      isClose: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileList, {
        files: files
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
      className: _CL.CL_SOURCE_LINK,
      href: html_url,
      children: "Link to description of commit"
    })]
  });
};
var _default = exports.default = TagDetail;
//# sourceMappingURL=TagDetail.js.map