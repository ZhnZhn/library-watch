"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  LIB_VT: "library__value-title",
  LIB_V: "library__value",
  ROW_ITEM: "row__item"
};

var Token = function Token(_ref) {
  var caption = _ref.caption,
      value = _ref.value;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL.LIB_VT,
      children: caption + ':'
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL.LIB_V,
      children: value
    })]
  });
};

var CellValue = function CellValue(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, (0, _extends2["default"])({}, props))
  });
};

var CellValueDate = function CellValueDate(_ref2) {
  var caption = _ref2.caption,
      value = _ref2.value,
      date = _ref2.date;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: caption,
      value: value
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Token, {
      caption: "Date",
      value: (0, _formatStrDate["default"])(date)
    })]
  });
};

var FileList = function FileList(_ref3) {
  var files = _ref3.files;
  return (files || []).map(function (file, index) {
    var filename = file.filename;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: CL.ROW_ITEM,
      children: filename
    }, index);
  });
};

var TagDetail = function TagDetail(_ref4) {
  var json = _ref4.json;

  if (!json) {
    return null;
  }

  var commit = json.commit,
      files = json.files,
      stats = json.stats,
      html_url = json.html_url,
      _ref5 = commit || {},
      author = _ref5.author,
      message = _ref5.message,
      committer = _ref5.committer,
      _ref6 = author || {},
      authorDate = _ref6.date,
      authorName = _ref6.name,
      _ref7 = committer || {},
      committerDate = _ref7.date,
      committerName = _ref7.name,
      _ref8 = stats || {},
      total = _ref8.total,
      additions = _ref8.additions,
      deletions = _ref8.deletions;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "library",
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].OpenClose2, {
      caption: "Files (" + files.length + ")",
      isClose: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(FileList, {
        files: files
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      href: html_url,
      className: "github-link",
      children: "Link to description of commit"
    })]
  });
};

var _default = TagDetail;
exports["default"] = _default;
//# sourceMappingURL=TagDetail.js.map