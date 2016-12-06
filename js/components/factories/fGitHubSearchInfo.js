'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _GitHubSearchInfo = require('../items/GitHubSearchInfo');

var _GitHubSearchInfo2 = _interopRequireDefault(_GitHubSearchInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fGitHubSearchInfo = function fGitHubSearchInfo(_ref) {
  var factory = _ref.factory,
      option = _ref.option,
      json = _ref.json,
      parentProps = _ref.parentProps,
      onCloseItem = _ref.onCloseItem;

  var repo = option.repo,
      requestType = option.requestType,
      chartType = option.chartType,
      browserType = option.browserType,
      _json$items = json.items,
      items = _json$items === undefined ? [{}] : _json$items,
      library = items[0],
      _library$full_name = library.full_name,
      full_name = _library$full_name === undefined ? 'empty' : _library$full_name,
      _library$stargazers_c = library.stargazers_count,
      stargazers_count = _library$stargazers_c === undefined ? '' : _library$stargazers_c,
      _library$pushed_at = library.pushed_at,
      pushed_at = _library$pushed_at === undefined ? '' : _library$pushed_at,
      _pushed_at = pushed_at.replace('T', ' ').replace('Z', ''),
      key = repo + '_' + requestType;

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
//# sourceMappingURL=fGitHubSearchInfo.js.map