"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var crItemWatch = function crItemWatch(repo, requestType, itemDesription) {
  var caption = "" + repo;
  return {
    caption: caption,
    config: {
      version: '',
      descr: itemDesription,
      repo: repo,
      requestType: requestType,
      caption: caption
    }
  };
};

var _default = crItemWatch;
exports["default"] = _default;
//# sourceMappingURL=crItemWatch.js.map