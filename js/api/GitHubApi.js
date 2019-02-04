'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// repos/:owner/:repo/releases/latest

//  repos/:owner/:repo/git/refs/tags

// GET /repos/:owner/:repo/releases/tags/:tag

// repo
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc


// commit descr url, (sha), html_url
//https://api.github.com/repos/lodash/lodash/commits/fc734a63717e2f29268eb79a161daaa6a9107d02

// /repos/:owner/:repo/issues

var _base = 'https://api.github.com';

var _rRequestTypeToUrl = {
  GH_RELEASE_RECENT: function GH_RELEASE_RECENT(option) {
    return _base + '/repos/' + option.repo + '/releases/latest';
  },
  GH_TAGS: function GH_TAGS(option) {
    return _base + '/repos/' + option.repo + '/tags';
  },
  GH_SEARCH_INFO: function GH_SEARCH_INFO(option) {
    return _base + '/search/repositories?q=repo:' + option.repo;
  },
  GH_COMMITS: function GH_COMMITS(option) {
    return _base + '/repos/' + option.repo + '/commits';
  },
  GH_ISSUES: function GH_ISSUES(option) {
    return _base + '/repos/' + option.repo + '/issues';
  },
  GH_PULL_REQUESTS: function GH_PULL_REQUESTS(option) {
    return _base + '/repos/' + option.repo + '/pulls';
  }
};

var GitHubApi = {
  getRequestUrl: function getRequestUrl(option) {
    var fnFactory = _rRequestTypeToUrl[option.requestType];
    return fnFactory(option);
  },
  getOnCheckResponse: function getOnCheckResponse() {
    return GitHubApi.checkResponse;
  },
  crKey: function crKey(_ref) {
    var repo = _ref.repo,
        requestType = _ref.requestType;

    return repo + '_' + requestType;
  },
  checkResponse: function checkResponse() {
    return true;
  }
};

exports.default = GitHubApi;
//# sourceMappingURL=GitHubApi.js.map