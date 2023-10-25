"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crGitRepositoryHref = _interopRequireDefault(require("./crGitRepositoryHref"));
var _crGitRepositoryCaption = _interopRequireDefault(require("./crGitRepositoryCaption"));
var _checkResponseJson = _interopRequireDefault(require("./checkResponseJson"));
var _CellValue = _interopRequireDefault(require("../CellValue"));
var _Link = _interopRequireDefault(require("../../zhn-atoms/Link"));
var _CL = require("../../styles/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_REPO = {
    padding: '4px 0 0 8px'
  },
  S_REPO_LINK = {
    marginRight: 24
  };
const RowLinks = _ref => {
  let {
    repoHref,
    hpHref
  } = _ref;
  return !repoHref && !hpHref ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_REPO,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
      className: _CL.CL_SOURCE_LINK,
      style: S_REPO_LINK,
      href: repoHref,
      children: (0, _crGitRepositoryCaption.default)(repoHref)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
      className: _CL.CL_SOURCE_LINK,
      href: hpHref,
      children: "Home Page"
    })]
  });
};
const _isStr = str => typeof str === 'string',
  _isNumber = n => typeof n === 'number',
  _trimTo5 = n => _isNumber(n) ? ('' + n).substring(0, 5) : '',
  _toYear = strDate => _isStr(strDate) ? strDate.split('T')[0] : '',
  _crRepositoryHref = _ref2 => {
    let {
      type,
      url
    } = _ref2;
    return type === 'git' ? (0, _crGitRepositoryHref.default)(url) : void 0;
  };
const PackageDetails = _ref3 => {
  let {
    json
  } = _ref3;
  const result = (0, _checkResponseJson.default)(json);
  if (result !== true) {
    return result;
  }
  const {
      analyzedAt,
      collected,
      score
    } = json,
    {
      github,
      metadata
    } = collected || {},
    {
      starsCount,
      issues,
      homepage
    } = github || {},
    {
      openCount
    } = issues || {},
    {
      version,
      license,
      repository
    } = metadata || {},
    {
      final
    } = score || {},
    _repositoryHref = _crRepositoryHref(repository || {});
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "stars",
        value: starsCount
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "issues",
        value: openCount
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "version",
        value: version
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "score",
        value: _trimTo5(final)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "license",
        value: license
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue.default, {
        caption: "onDate",
        value: _toYear(analyzedAt)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(RowLinks, {
      repoHref: _repositoryHref,
      hpHref: homepage
    })]
  });
};
var _default = exports.default = PackageDetails;
//# sourceMappingURL=PackageDetails.js.map