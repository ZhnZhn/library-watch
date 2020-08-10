"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CL = _interopRequireDefault(require("../styles/CL"));

var S = {
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

var CellValue = function CellValue(_ref) {
  var _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? '' : _ref$caption,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'N/A' : _ref$value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: S.CELL
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: S.CAPTION
  }, caption), /*#__PURE__*/_react["default"].createElement("div", {
    style: S.VALUE
  }, value));
};

var Link = function Link(_ref2) {
  var style = _ref2.style,
      href = _ref2.href,
      caption = _ref2.caption;
  return href ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    className: _CL["default"].SOURCE_LINK,
    style: style,
    href: href
  }, caption) : null;
};

var _crRepositoryCaption = function _crRepositoryCaption(href) {
  return href.indexOf('github.com') !== -1 ? 'GitHub Repository' : 'Repository';
};

var RowLinks = function RowLinks(_ref3) {
  var repoHref = _ref3.repoHref,
      hpHref = _ref3.hpHref;

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

var _crRepositoryHref = function _crRepositoryHref(_ref4) {
  var type = _ref4.type,
      url = _ref4.url;
  return type === 'git' ? url.replace('git+', '').replace('.git', '') : void 0;
};

var PackageDetails = function PackageDetails(_ref5) {
  var json = _ref5.json;

  var _ref6 = json || {},
      analyzedAt = _ref6.analyzedAt,
      collected = _ref6.collected,
      score = _ref6.score,
      _ref7 = collected || {},
      github = _ref7.github,
      metadata = _ref7.metadata,
      _ref8 = github || {},
      starsCount = _ref8.starsCount,
      issues = _ref8.issues,
      homepage = _ref8.homepage,
      _ref9 = issues || {},
      openCount = _ref9.openCount,
      _ref10 = metadata || {},
      version = _ref10.version,
      license = _ref10.license,
      repository = _ref10.repository,
      _ref11 = score || {},
      _final = _ref11["final"],
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