'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _NpmRecentMonthDownload = require('../../../components/items/NpmRecentMonthDownload');

var _NpmRecentMonthDownload2 = _interopRequireDefault(_NpmRecentMonthDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fNpmRecentMonthDownload = function fNpmRecentMonthDownload(_ref) {
  var factory = _ref.factory;
  var option = _ref.option;
  var json = _ref.json;
  var parentProps = _ref.parentProps;
  var onCloseItem = _ref.onCloseItem;
  var repo = option.repo;
  var requestType = option.requestType;
  var chartType = option.chartType;
  var browserType = option.browserType;
  var downloads = json.downloads;
  var start = json.start;
  var end = json.end;
  var key = repo + '_' + requestType;

  return factory.createElement(_NpmRecentMonthDownload2.default, _extends({
    key: key,
    packageName: json.package,
    downloads: downloads,
    start: start,
    end: end,
    caption: downloads,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
  }, parentProps));
};

exports.default = fNpmRecentMonthDownload;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\factories\fNpmRecentMonthDownload.js.map