"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _crCaption = function _crCaption(props) {
  return props.repo;
};

var crItemWatch = function crItemWatch(props, itemDesription, crCaption) {
  if (crCaption === void 0) {
    crCaption = _crCaption;
  }

  var repo = props.repo,
      requestType = props.requestType,
      _props$version = props.version,
      version = _props$version === void 0 ? '' : _props$version,
      caption = _crCaption(props);

  return {
    caption: caption,
    config: {
      descr: itemDesription,
      caption: caption,
      version: version,
      repo: repo,
      requestType: requestType
    }
  };
};

var _default = crItemWatch;
exports["default"] = _default;
//# sourceMappingURL=crItemWatch.js.map