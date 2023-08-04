"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _useGroupOptions = _interopRequireDefault(require("./useGroupOptions"));
var _useWatchListMsEdit = _interopRequireDefault(require("./useWatchListMsEdit"));
const FN_NOOP = () => {};
const useWatchList = function (forActionType, setValidationMessages, hClear, rerender) {
  if (rerender === void 0) {
    rerender = FN_NOOP;
  }
  const [groupOptions, updateGroupOptions] = (0, _useGroupOptions.default)();
  (0, _useWatchListMsEdit.default)(forActionType, setValidationMessages, hClear);
  (0, _watchListStore.useWatchList)(watchList => {
    if (watchList) {
      updateGroupOptions();
      rerender();
    }
  });
  return groupOptions;
};
var _default = useWatchList;
exports.default = _default;
//# sourceMappingURL=useWatchList.js.map