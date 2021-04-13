"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crGitRepositoryCaption = function crGitRepositoryCaption(href) {
  return (href || '').indexOf('https://github.com') !== -1 ? 'GitHub Repository' : 'Repository';
};

var _default = crGitRepositoryCaption;
exports["default"] = _default;
//# sourceMappingURL=crGitRepositoryCaption.js.map