"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useRecentFocusedElement = () => {
  const _refRecentFocusedElement = (0, _uiApi.useRef)();
  return (0, _uiApi.useMemo)(() => [evt => {
    (0, _uiApi.setRefValue)(_refRecentFocusedElement, evt.target);
  }, () => (0, _uiApi.focusRefElement)(_refRecentFocusedElement)], []);
};
var _default = exports.default = useRecentFocusedElement;
//# sourceMappingURL=useRecentFocusedElement.js.map