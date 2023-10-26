"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _A = _interopRequireDefault(require("../zhn-atoms/A"));
var _CL = require("../styles/CL");
var _Item = require("./Item.Style");
var _formatStrDate = _interopRequireDefault(require("../../utils/formatStrDate"));
var _dateFn = require("../../utils/dateFn");
var _DivComments = _interopRequireDefault(require("./DivComments"));
var _jsxRuntime = require("react/jsx-runtime");
const CommitList = _ref => {
  let {
    commits
  } = _ref;
  return (commits || []).map((item, index) => {
    const {
        commit,
        html_url
      } = item,
      {
        message = '',
        committer,
        comment_count
      } = commit || {},
      {
        date,
        name = ''
      } = committer || {},
      _dateTime = (0, _formatStrDate.default)(date),
      _dateAgo = (0, _dateFn.crDateAgo)(date);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _CL.CL_ROW_ITEM,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A.default.Link, {
        href: html_url,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: _Item.S_PB_8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: _Item.S_PR_8,
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A.default.DateAgo, {
            dateAgo: _dateAgo,
            date: _dateTime
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: message
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivComments.default, {
          n: comment_count
        })]
      })
    }, index);
  });
};
var _default = exports.default = CommitList;
//# sourceMappingURL=CommitList.js.map