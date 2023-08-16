"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _A = _interopRequireDefault(require("../zhn-atoms/A"));
var _CL = _interopRequireDefault(require("../styles/CL"));
var _Item = _interopRequireDefault(require("./Item.Style"));
var _dateFn = require("../../utils/dateFn");
var _jsxRuntime = require("react/jsx-runtime");
const S_STATE = {
    ..._Item.default.PR_8,
    color: '#d7bb52'
  },
  S_NUMBER = {
    ..._Item.default.PR_8,
    color: '#80c040'
  },
  S_DATE = {
    ..._Item.default.PR_8,
    color: 'gray'
  };
const IssueList = _ref => {
  let {
    issues
  } = _ref;
  return (issues || []).map((item, index) => {
    const {
        state,
        number,
        created_at,
        updated_at,
        title,
        html_url
      } = item,
      _creadedAt = (0, _dateFn.crDateAgo)(created_at),
      _updated = created_at === updated_at ? '' : (0, _dateFn.crDateAgo)(updated_at),
      _updatedAt = _creadedAt === _updated ? '' : _updated;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _CL.default.ROW_ITEM,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_A.default.Link, {
        href: html_url,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: _Item.default.PB_8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S_STATE,
            children: state
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S_NUMBER,
            children: "(#" + number + ")"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S_DATE,
            children: _creadedAt
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S_DATE,
            children: _updatedAt
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: title
        })]
      })
    }, index);
  });
};
var _default = IssueList;
exports.default = _default;
//# sourceMappingURL=IssueList.js.map