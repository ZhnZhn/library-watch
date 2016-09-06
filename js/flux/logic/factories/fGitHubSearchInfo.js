'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _GitHubSearchInfo = require('../../../components/items/GitHubSearchInfo');

var _GitHubSearchInfo2 = _interopRequireDefault(_GitHubSearchInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fGitHubSearchInfo = function fGitHubSearchInfo(_ref) {
  var factory = _ref.factory;
  var option = _ref.option;
  var json = _ref.json;
  var parentProps = _ref.parentProps;
  var onCloseItem = _ref.onCloseItem;
  var repo = option.repo;
  var requestType = option.requestType;
  var chartType = option.chartType;
  var browserType = option.browserType;
  var _json$items = json.items;
  var items = _json$items === undefined ? [{}] : _json$items;
  var library = items[0];
  var _library$full_name = library.full_name;
  var full_name = _library$full_name === undefined ? 'empty' : _library$full_name;
  var _library$stargazers_c = library.stargazers_count;
  var stargazers_count = _library$stargazers_c === undefined ? '' : _library$stargazers_c;
  var _library$pushed_at = library.pushed_at;
  var pushed_at = _library$pushed_at === undefined ? '' : _library$pushed_at;
  var _pushed_at = pushed_at.replace('T', ' ').replace('Z', '');
  var key = repo + '_' + requestType;

  return factory.createElement(_GitHubSearchInfo2.default, _extends({
    key: key,
    repo: full_name,
    stars_count: stargazers_count,
    pushed_at: _pushed_at,
    caption: full_name + ' ' + stargazers_count + ' ' + _pushed_at,
    library: library,
    onCloseItem: onCloseItem.bind(null, chartType, browserType, key)
  }, parentProps));
};

exports.default = fGitHubSearchInfo;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\flux\logic\factories\fGitHubSearchInfo.js.map