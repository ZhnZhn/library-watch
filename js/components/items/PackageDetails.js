"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ErrMsg = _interopRequireDefault(require("./ErrMsg"));

var _CellValue = _interopRequireDefault(require("./CellValue"));

var _Link = _interopRequireDefault(require("./Link"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  REPO: {
    paddingTop: 4,
    paddingLeft: 8
  },
  REPO_LINK: {
    marginRight: 24
  }
};

var _crRepositoryCaption = function _crRepositoryCaption(href) {
  return href.indexOf('https://github.com') !== -1 ? 'GitHub Repository' : 'Repository';
};

var RowLinks = function RowLinks(_ref) {
  var repoHref = _ref.repoHref,
      hpHref = _ref.hpHref;

  if (!repoHref && !hpHref) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.REPO,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
      style: S.REPO_LINK,
      href: repoHref,
      caption: _crRepositoryCaption(repoHref)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
      href: hpHref,
      caption: "HomePage"
    })]
  });
};

var _trimTo5 = function _trimTo5(n) {
  return ('' + n).substr(0, 5);
};

var _toYear = function _toYear(strDate) {
  return ('' + strDate).split('T')[0] || '';
};

var _crRepositoryHref = function _crRepositoryHref(_ref2) {
  var type = _ref2.type,
      url = _ref2.url;
  return type === 'git' ? url.replace('git+', '').replace('.git', '').replace('git://', 'https://') : void 0;
};

var PackageDetails = function PackageDetails(_ref3) {
  var json = _ref3.json;

  var _ref4 = json || {},
      errMsg = _ref4.errMsg,
      analyzedAt = _ref4.analyzedAt,
      collected = _ref4.collected,
      score = _ref4.score;

  if (errMsg) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrMsg["default"], {
      errMsg: errMsg
    });
  }

  var _ref5 = collected || {},
      github = _ref5.github,
      metadata = _ref5.metadata,
      _ref6 = github || {},
      starsCount = _ref6.starsCount,
      issues = _ref6.issues,
      homepage = _ref6.homepage,
      _ref7 = issues || {},
      openCount = _ref7.openCount,
      _ref8 = metadata || {},
      version = _ref8.version,
      license = _ref8.license,
      repository = _ref8.repository,
      _ref9 = score || {},
      _final = _ref9["final"],
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