'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      caption = _ref$caption === undefined ? '' : _ref$caption,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value;
  return _react2.default.createElement(
    'div',
    { style: S.CELL },
    _react2.default.createElement(
      'div',
      { style: S.CAPTION },
      caption
    ),
    _react2.default.createElement(
      'div',
      { style: S.VALUE },
      value
    )
  );
};

var _trimTo5 = function _trimTo5(n) {
  return ('' + n).substr(0, 5);
};
var _toYear = function _toYear(strDate) {
  return ('' + strDate).split('T')[0] || '';
};

var PackageDetails = function PackageDetails(_ref2) {
  var _ref2$json = _ref2.json,
      json = _ref2$json === undefined ? {} : _ref2$json;
  var analyzedAt = json.analyzedAt,
      _json$collected = json.collected,
      collected = _json$collected === undefined ? {} : _json$collected,
      _json$score = json.score,
      score = _json$score === undefined ? {} : _json$score,
      _collected$github = collected.github,
      github = _collected$github === undefined ? {} : _collected$github,
      _collected$metadata = collected.metadata,
      metadata = _collected$metadata === undefined ? {} : _collected$metadata,
      starsCount = github.starsCount,
      _github$issues = github.issues,
      issues = _github$issues === undefined ? {} : _github$issues,
      openCount = issues.openCount,
      version = metadata.version,
      license = metadata.license,
      final = score.final;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(CellValue, {
      caption: 'stars',
      value: starsCount
    }),
    _react2.default.createElement(CellValue, {
      caption: 'issues',
      value: openCount
    }),
    _react2.default.createElement(CellValue, {
      caption: 'version',
      value: version
    }),
    _react2.default.createElement(CellValue, {
      caption: 'score',
      value: _trimTo5(final)
    }),
    _react2.default.createElement(CellValue, {
      caption: 'license',
      value: license
    }),
    _react2.default.createElement(CellValue, {
      caption: 'onDate',
      value: _toYear(analyzedAt)
    })
  );
};

exports.default = PackageDetails;
//# sourceMappingURL=PackageDetails.js.map