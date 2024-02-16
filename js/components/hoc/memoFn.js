"use strict";

exports.__esModule = true;
exports.memoItems = exports.memoIsShow = exports.memoEqual = exports.crMemoCompList = void 0;
var _uiApi = require("../uiApi");
const IS_NOT_SHOULD_RERENDER_DF = () => true;
const memoEqual = function (Comp, isNotShouldRerender) {
  if (isNotShouldRerender === void 0) {
    isNotShouldRerender = IS_NOT_SHOULD_RERENDER_DF;
  }
  return (0, _uiApi.memo)(Comp, isNotShouldRerender);
};
exports.memoEqual = memoEqual;
const _fMemo = isNotShouldRerender => Comp => (0, _uiApi.memo)(Comp, isNotShouldRerender);
const _isNotShouldRerenderIsShow = (prevProps, nextProps) => prevProps.isShow === nextProps.isShow;
const memoIsShow = exports.memoIsShow = _fMemo(_isNotShouldRerenderIsShow);
const _isNotShouldRerenderItems = (prevProps, nextProps) => prevProps.items === nextProps.items;
const memoItems = exports.memoItems = _fMemo(_isNotShouldRerenderItems);
const crMemoCompList = crElement => memoItems(_ref => {
  let {
    items
  } = _ref;
  return (0, _uiApi.safeMap)(items, crElement);
});
exports.crMemoCompList = crMemoCompList;
//# sourceMappingURL=memoFn.js.map