"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const FN_NOOP = () => {};
const useValidationMessages = function (preClear) {
  if (preClear === void 0) {
    preClear = FN_NOOP;
  }
  const [validationMessages, setValidationMessages] = (0, _uiApi.useState)([])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClear = (0, _uiApi.useCallback)(() => {
      preClear();
      setValidationMessages(prevState => prevState.length > 0 ? [] : prevState);
    }, []);
  // preClear
  /*eslint-enable react-hooks/exhaustive-deps */

  return [validationMessages, setValidationMessages, _hClear];
};
var _default = exports.default = useValidationMessages;
//# sourceMappingURL=useValidationMessages.js.map