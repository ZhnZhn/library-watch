"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crGitRepositoryHref = function crGitRepositoryHref(url) {
  return (url || '').replace('git+', '').replace('.git', '').replace('git://', 'https://');
};

var _default = crGitRepositoryHref;
exports["default"] = _default;
//# sourceMappingURL=crGitRepositoryHref.js.map