"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => function (fn, _temp) {
  let {
    deps,
    isPropagation
  } = _temp === void 0 ? {} : _temp;
  return (0, _uiApi.useCallback)(evt => {
    if (isKey(evt)) {
      evt.preventDefault();
      if (!isPropagation) {
        evt.stopPropagation();
      }
      fn(event);
    }
  }, deps || []);
};
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = fUseKey;
//# sourceMappingURL=fUseKey.js.map