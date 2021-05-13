"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  STATE: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: '#d7bb52'
  }),
  NUMBER: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: '#80c040'
  }),
  DATE: (0, _extends2["default"])({}, _Item["default"].PR_8, {
    color: 'gray'
  })
};

var _toDate = function _toDate(strDate) {
  return ('' + strDate).replace('T', ' ').replace('Z', '');
};

var IssueList = function IssueList(_ref) {
  var issues = _ref.issues;
  return (issues || []).map(function (item, index) {
    var state = item.state,
        number = item.number,
        created_at = item.created_at,
        updated_at = item.updated_at,
        title = item.title,
        html_url = item.html_url,
        _creadedAt = _toDate(created_at),
        _updatedAt = created_at !== updated_at ? _toDate(updated_at) : '';

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _CL["default"].ROW_ITEM,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: html_url,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: _Item["default"].PB_8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.STATE,
            children: state
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.NUMBER,
            children: "(#" + number + ")"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.DATE,
            children: _creadedAt
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: S.DATE,
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
exports["default"] = _default;
//# sourceMappingURL=IssueList.js.map