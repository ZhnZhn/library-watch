"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const useToggle = (initialValue, isEventStopPropagation) => {
  const [is, setIs] = (0, _uiApi.useState)(() => (0, _isTypeFn.isFn)(initialValue) ? initialValue() : !!initialValue)
    /*eslint-disable react-hooks/exhaustive-deps */,
    toggle = (0, _uiApi.useCallback)(evt => {
      if (isEventStopPropagation && evt) {
        evt.stopPropagation();
      }
      setIs(is => !is);
    }, []);
  // isEventStopPropagation
  /*eslint-enable react-hooks/exhaustive-deps */

  return [is, toggle, setIs];
};
var _default = exports.default = useToggle;
//# sourceMappingURL=useToggle.js.map