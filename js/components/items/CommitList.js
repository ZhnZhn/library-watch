"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _A = _interopRequireDefault(require("../zhn-atoms/A"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var _Item = _interopRequireDefault(require("./Item.Style"));

var _formatDate = _interopRequireDefault(require("../../utils/formatDate"));

var _jsxRuntime = require("react/jsx-runtime");

var CommitList = function CommitList(_ref) {
  var commits = _ref.commits;
  return (commits || []).map(function (item, index) {
    var commit = item.commit,
        html_url = item.html_url,
        _ref2 = commit || {},
        _ref2$message = _ref2.message,
        message = _ref2$message === void 0 ? '' : _ref2$message,
        committer = _ref2.committer,
        _ref3 = committer || {},
        _ref3$date = _ref3.date,
        date = _ref3$date === void 0 ? '' : _ref3$date,
        _ref3$name = _ref3.name,
        name = _ref3$name === void 0 ? '' : _ref3$name,
        _dateTime = date.replace('T', ' ').replace('Z', ''),
        _dateAgo = (0, _formatDate["default"])(_dateTime);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: _CL["default"].ROW_ITEM,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
        href: html_url,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: _Item["default"].PB_8,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            style: _Item["default"].PR_8,
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_A["default"].DateAgo, {
            dateAgo: _dateAgo,
            date: _dateTime
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: message
        })]
      })
    }, index);
  });
};

var _default = CommitList;
exports["default"] = _default;
//# sourceMappingURL=CommitList.js.map