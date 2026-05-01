"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
const DF_TUPLE = [void 0, _uiApi.FN_NOOP];
const useRecentFocusedElement = () => {
  const _refRecentFocusedElement = (0, _uiApi.useRef)();
  // biome-ignore-start lint/correctness/useHookAtTopLevel: const
  /*eslint-disable react-hooks/rules-of-hooks */
  return _has.HAS_KEYBOARD_FOCUS ? (0, _uiApi.useMemo)(() => [evt => {
    (0, _uiApi.setRefValue)(_refRecentFocusedElement, evt.target);
  }, () => (0, _uiApi.focusRefElement)(_refRecentFocusedElement)], []) : DF_TUPLE;
  /*eslint-enable react-hooks/rules-of-hooks */
  // biome-ignore-end lint/correctness/useHookAtTopLevel: const
};
var _default = exports.default = useRecentFocusedElement;
//# sourceMappingURL=useRecentFocusedElement.js.map