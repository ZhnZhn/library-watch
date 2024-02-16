"use strict";

exports.__esModule = true;
exports.memoIsShow = exports.memoEqual = exports.crMemoCompList = void 0;
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
const _memoItems = _fMemo(_isNotShouldRerenderItems);
const crMemoCompList = crElement => _memoItems(props => (0, _uiApi.safeMap)(props.items, (item, index) => crElement(item, index, props)));
exports.crMemoCompList = crMemoCompList;
//# sourceMappingURL=memoFn.js.map