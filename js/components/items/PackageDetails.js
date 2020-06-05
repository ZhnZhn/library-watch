"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var _trimTo5 = function _trimTo5(n) {
  return ('' + n).substr(0, 5);
};

var _toYear = function _toYear(strDate) {
  return ('' + strDate).split('T')[0] || '';
};

var PackageDetails = function PackageDetails(_ref2) {
  var _ref2$json = _ref2.json,
      json = _ref2$json === void 0 ? {} : _ref2$json;
  var analyzedAt = json.analyzedAt,
      _json$collected = json.collected,
      collected = _json$collected === void 0 ? {} : _json$collected,
      _json$score = json.score,
      score = _json$score === void 0 ? {} : _json$score,
      _collected$github = collected.github,
      github = _collected$github === void 0 ? {} : _collected$github,
      _collected$metadata = collected.metadata,
      metadata = _collected$metadata === void 0 ? {} : _collected$metadata,
      starsCount = github.starsCount,
      _github$issues = github.issues,
      issues = _github$issues === void 0 ? {} : _github$issues,
      openCount = issues.openCount,
      version = metadata.version,
      license = metadata.license,
      _final = score["final"];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(CellValue, {
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
  }));
};

var _default = PackageDetails;
exports["default"] = _default;
//# sourceMappingURL=PackageDetails.js.map