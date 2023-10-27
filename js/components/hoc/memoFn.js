"use strict";

exports.__esModule = true;
exports.memoIsShow = exports.memoEqual = void 0;
var _uiApi = require("../uiApi");
const IS_NOT_SHOULD_RERENDER_DF = () => true;
const memoEqual = function (Element, isNotShouldRerender) {
  if (isNotShouldRerender === void 0) {
    isNotShouldRerender = IS_NOT_SHOULD_RERENDER_DF;
  }
  return (0, _uiApi.memo)(Element, isNotShouldRerender);
};
exports.memoEqual = memoEqual;
const _isNotShouldRerenderIsShow = (prevProps, nextProps) => prevProps.isShow === nextProps.isShow;
const memoIsShow = Comp => (0, _uiApi.memo)(Comp, _isNotShouldRerenderIsShow);
exports.memoIsShow = memoIsShow;
//# sourceMappingURL=memoFn.js.map