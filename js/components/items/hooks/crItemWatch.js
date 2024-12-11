"use strict";

exports.__esModule = true;
exports.default = void 0;
const _crCaption = props => props.repo;
const crItemWatch = function (props, itemDesription, crCaption) {
  if (crCaption === void 0) {
    crCaption = _crCaption;
  }
  const {
      repo,
      requestType,
      version = ''
    } = props,
    caption = _crCaption(props);
  return {
    caption,
    config: {
      descr: itemDesription,
      caption,
      version,
      repo,
      requestType
    }
  };
};
var _default = exports.default = crItemWatch;
//# sourceMappingURL=crItemWatch.js.map