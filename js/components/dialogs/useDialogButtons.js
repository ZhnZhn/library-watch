"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useCommandButtons = _interopRequireDefault(require("./useCommandButtons"));
const useDialogButtons = (handleLoad, onClose) => {
  const [validationMessages, _setValidationMessages, _clearValidationMessages] = (0, _useValidationMessages.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    hLoad = (0, _uiApi.useCallback)(() => {
      handleLoad(_setValidationMessages, _clearValidationMessages);
    }, [])
    // handleLoad, _setValidationMessages, _clearValidationMessages
    ,
    COMMAND_BUTTONS = (0, _useCommandButtons.default)(hLoad)
    /*eslint-disable react-hooks/exhaustive-deps */,
    hClose = (0, _uiApi.useCallback)(() => {
      _clearValidationMessages();
      onClose();
    }, []);
  /*eslint-enable react-hooks/exhaustive-deps */

  return [validationMessages, COMMAND_BUTTONS, hClose, hLoad];
};
var _default = exports.default = useDialogButtons;
//# sourceMappingURL=useDialogButtons.js.map