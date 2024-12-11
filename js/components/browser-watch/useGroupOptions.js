"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
const useGroupOptions = store => {
  const [groupOptions, _refGroupOptions] = (0, _useRefInit.default)(_watchListStore.getWatchGroups),
    _rerender = (0, _useRerender.default)(),
    updateGroupOptions = () => {
      _refGroupOptions.current = (0, _watchListStore.getWatchGroups)();
      _rerender();
    };
  return [groupOptions, updateGroupOptions];
};
var _default = exports.default = useGroupOptions;
//# sourceMappingURL=useGroupOptions.js.map