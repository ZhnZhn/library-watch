"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _dateFn = require("../../utils/dateFn");
var _IssueItem = _interopRequireDefault(require("./IssueItem"));
var _jsxRuntime = require("react/jsx-runtime");
const IssueList = (0, _memoFn.crMemoCompList)((item, index) => {
  const {
      state,
      number,
      created_at,
      updated_at,
      title,
      body,
      comments,
      html_url
    } = item,
    _creadedAt = (0, _dateFn.crDateAgo)(created_at),
    _updated = created_at === updated_at ? '' : (0, _dateFn.crDateAgo)(updated_at),
    _updatedAt = _creadedAt === _updated ? '' : _updated;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IssueItem.default, {
    url: html_url,
    state: state,
    number: number,
    createdAt: _creadedAt,
    updatedAt: _updatedAt,
    title: title,
    comments: comments,
    body: body
  }, index);
});
var _default = exports.default = IssueList;
//# sourceMappingURL=IssueList.js.map