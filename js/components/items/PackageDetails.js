"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var S = {
  ERR: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  CELL: {
    display: 'inline-block',
    marginLeft: 8
  },
  CAPTION: {
    fontWeight: 600
  },
  VALUE: {
    textAlign: 'center'
  },
  REPO: {
    paddingTop: 4,
    paddingLeft: 8
  },
  REPO_LINK: {
    marginRight: 24
  }
};

var ErrMsg = function ErrMsg(_ref) {
  var errMsg = _ref.errMsg;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.ERR
  }, errMsg);
};

var CellValue = function CellValue(_ref2) {
  var _ref2$caption = _ref2.caption,
      caption = _ref2$caption === void 0 ? '' : _ref2$caption,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? 'N/A' : _ref2$value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.CELL
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: S.CAPTION
  }, caption), /*#__PURE__*/_react["default"].createElement("div", {
    style: S.VALUE
  }, value));
};

var Link = function Link(_ref3) {
  var style = _ref3.style,
      href = _ref3.href,
      caption = _ref3.caption;
  return href ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    className: _CL["default"].SOURCE_LINK,
    style: style,
    href: href
  }, caption) : null;
};

var _crRepositoryCaption = function _crRepositoryCaption(href) {
  return href.indexOf('https://github.com') !== -1 ? 'GitHub Repository' : 'Repository';
};

var RowLinks = function RowLinks(_ref4) {
  var repoHref = _ref4.repoHref,
      hpHref = _ref4.hpHref;

  if (!repoHref && !hpHref) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.REPO
  }, /*#__PURE__*/_react["default"].createElement(Link, {
    style: S.REPO_LINK,
    href: repoHref,
    caption: _crRepositoryCaption(repoHref)
  }), /*#__PURE__*/_react["default"].createElement(Link, {
    href: hpHref,
    caption: "HomePage"
  }));
};

var _trimTo5 = function _trimTo5(n) {
  return ('' + n).substr(0, 5);
};

var _toYear = function _toYear(strDate) {
  return ('' + strDate).split('T')[0] || '';
};

var _crRepositoryHref = function _crRepositoryHref(_ref5) {
  var type = _ref5.type,
      url = _ref5.url;
  return type === 'git' ? url.replace('git+', '').replace('.git', '').replace('git://', 'https://') : void 0;
};

var PackageDetails = function PackageDetails(_ref6) {
  var json = _ref6.json;

  var _ref7 = json || {},
      errMsg = _ref7.errMsg,
      analyzedAt = _ref7.analyzedAt,
      collected = _ref7.collected,
      score = _ref7.score;

  if (errMsg) {
    return /*#__PURE__*/_react["default"].createElement(ErrMsg, {
      errMsg: errMsg
    });
  }

  var _ref8 = collected || {},
      github = _ref8.github,
      metadata = _ref8.metadata,
      _ref9 = github || {},
      starsCount = _ref9.starsCount,
      issues = _ref9.issues,
      homepage = _ref9.homepage,
      _ref10 = issues || {},
      openCount = _ref10.openCount,
      _ref11 = metadata || {},
      version = _ref11.version,
      license = _ref11.license,
      repository = _ref11.repository,
      _ref12 = score || {},
      _final = _ref12["final"],
      _repositoryHref = _crRepositoryHref(repository || {});

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "stars",
    value: starsCount
  }), /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "issues",
    value: openCount
  }), /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "version",
    value: version
  }), /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "score",
    value: _trimTo5(_final)
  }), /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "license",
    value: license
  }), /*#__PURE__*/_react["default"].createElement(CellValue, {
    caption: "onDate",
    value: _toYear(analyzedAt)
  })), /*#__PURE__*/_react["default"].createElement(RowLinks, {
    repoHref: _repositoryHref,
    hpHref: homepage
  }));
};

var _default = PackageDetails;
exports["default"] = _default;
//# sourceMappingURL=PackageDetails.js.map