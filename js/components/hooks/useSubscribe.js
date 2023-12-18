"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("./useRefInit"));
const useSubscribe = (store, selector, onChange) => {
  const _subscribe = (0, _useRefInit.default)(() => rerender => (rerender(), store.subscribe(selector, onChange)))[0],
    _getSnapshot = (0, _useRefInit.default)(() => () => selector(store.getState()))[0];
  (0, _uiApi.useSyncExternalStore)(_subscribe, _getSnapshot);
};
var _default = exports.default = useSubscribe;
//# sourceMappingURL=useSubscribe.js.map