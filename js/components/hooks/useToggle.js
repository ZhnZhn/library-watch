"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const _isFn = fn => typeof fn === "function";
const useToggle = (initialValue, isEventStopPropagation) => {
  const [is, setIs] = (0, _uiApi.useState)(() => _isFn(initialValue) ? initialValue() : !!initialValue)
    /*eslint-disable react-hooks/exhaustive-deps */,
    toggle = (0, _uiApi.useCallback)(event => {
      if (isEventStopPropagation && event) {
        event.stopPropagation();
      }
      setIs(is => !is);
    }, []);
  // isEventStopPropagation
  /*eslint-enable react-hooks/exhaustive-deps */

  return [is, toggle, setIs];
};
var _default = exports.default = useToggle;
//# sourceMappingURL=useToggle.js.map