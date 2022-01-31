"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crGitRepositoryHref = _interopRequireDefault(require("./crGitRepositoryHref"));

var _crGitRepositoryCaption = _interopRequireDefault(require("./crGitRepositoryCaption"));

var _checkResponseJson = _interopRequireDefault(require("./checkResponseJson"));

var _CellValue = _interopRequireDefault(require("./CellValue"));

var _Link = _interopRequireDefault(require("./Link"));

var _jsxRuntime = require("react/jsx-runtime");

var S_REPO = {
  padding: '4px 0 0 8px'
},
    S_REPO_LINK = {
  marginRight: 24
};

var RowLinks = function RowLinks(_ref) {
  var repoHref = _ref.repoHref,
      hpHref = _ref.hpHref;

  if (!repoHref && !hpHref) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_REPO,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
      style: S_REPO_LINK,
      href: repoHref,
      caption: (0, _crGitRepositoryCaption["default"])(repoHref)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
      href: hpHref,
      caption: "HomePage"
    })]
  });
};

var _isStr = function _isStr(str) {
  return typeof str === 'string';
};

var _isNumber = function _isNumber(n) {
  return typeof n === 'number';
};

var _trimTo5 = function _trimTo5(n) {
  return _isNumber(n) ? ('' + n).substring(0, 5) : '';
};

var _toYear = function _toYear(strDate) {
  return _isStr(strDate) ? strDate.split('T')[0] : '';
};

var _crRepositoryHref = function _crRepositoryHref(_ref2) {
  var type = _ref2.type,
      url = _ref2.url;
  return type === 'git' ? (0, _crGitRepositoryHref["default"])(url) : void 0;
};

var PackageDetails = function PackageDetails(_ref3) {
  var json = _ref3.json;
  var result = (0, _checkResponseJson["default"])(json);

  if (result !== true) {
    return result;
  }

  var analyzedAt = json.analyzedAt,
      collected = json.collected,
      score = json.score,
      _ref4 = collected || {},
      github = _ref4.github,
      metadata = _ref4.metadata,
      _ref5 = github || {},
      starsCount = _ref5.starsCount,
      issues = _ref5.issues,
      homepage = _ref5.homepage,
      _ref6 = issues || {},
      openCount = _ref6.openCount,
      _ref7 = metadata || {},
      version = _ref7.version,
      license = _ref7.license,
      repository = _ref7.repository,
      _ref8 = score || {},
      _final = _ref8["final"],
      _repositoryHref = _crRepositoryHref(repository || {});

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "stars",
        value: starsCount
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "issues",
        value: openCount
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "version",
        value: version
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "score",
        value: _trimTo5(_final)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "license",
        value: license
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellValue["default"], {
        caption: "onDate",
        value: _toYear(analyzedAt)
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(RowLinks, {
      repoHref: _repositoryHref,
      hpHref: homepage
    })]
  });
};

var _default = PackageDetails;
exports["default"] = _default;
//# sourceMappingURL=PackageDetails.js.map