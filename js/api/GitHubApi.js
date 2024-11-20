"use strict";

exports.__esModule = true;
exports.default = void 0;
var _apiFn = require("./apiFn");
// repos/:owner/:repo/releases/latest

//  repos/:owner/:repo/git/refs/tags

// GET /repos/:owner/:repo/releases/tags/:tag

// repo
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

// commit descr url, (sha), html_url
//https://api.github.com/repos/lodash/lodash/commits/fc734a63717e2f29268eb79a161daaa6a9107d02

// /repos/:owner/:repo/issues

const GITHUB_API = 'https://api.github.com',
  URL_REPOS = `${GITHUB_API}/repos`,
  _crReposRouteFn = routePath => _ref => {
    let {
      repo
    } = _ref;
    return `${URL_REPOS}/${repo}/${routePath}`;
  };
const _rRequestTypeToUrl = {
  GH_RELEASE_RECENT: _crReposRouteFn("releases/latest"),
  GH_TAGS: _crReposRouteFn("tags"),
  GH_SEARCH_INFO: _ref2 => {
    let {
      repo
    } = _ref2;
    return `${GITHUB_API}/search/repositories?q=repo:${repo}`;
  },
  GH_COMMITS: _crReposRouteFn("commits"),
  GH_ISSUES: _crReposRouteFn("issues"),
  GH_PULL_REQUESTS: _crReposRouteFn("pulls")
};
const GitHubApi = {
  getRequestUrl: (0, _apiFn.fGetRequestUrl)(_rRequestTypeToUrl),
  crKey(_ref3) {
    let {
      repo,
      requestType
    } = _ref3;
    return `${repo}_${requestType}`;
  },
  checkResponse() {
    return true;
  }
};
var _default = exports.default = GitHubApi;
//# sourceMappingURL=GitHubApi.js.map