"use strict";

exports.__esModule = true;
exports.default = void 0;
const _crCaptionDf = props => props.repo;
const crItemWatch = function (props, itemDesription, crCaption) {
  if (crCaption === void 0) {
    crCaption = _crCaptionDf;
  }
  const {
      repo,
      requestType,
      version = ''
    } = props,
    caption = crCaption(props);
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