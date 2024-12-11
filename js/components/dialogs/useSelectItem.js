"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useSelectItem = initialValue => {
  const ref = (0, _uiApi.useRef)(initialValue || {}),
    setItem = (0, _uiApi.useCallback)(item => {
      (0, _uiApi.setRefValue)(ref, item);
    }, []);
  return [ref, setItem];
};
var _default = exports.default = useSelectItem;
//# sourceMappingURL=useSelectItem.js.map