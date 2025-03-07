"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoFn = require("../hoc/memoFn");
var _useDialogButtons = _interopRequireDefault(require("./useDialogButtons"));
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _InputFileReader = _interopRequireDefault(require("../zhn/InputFileReader"));
var _Row = _interopRequireDefault(require("./rows/Row"));
var _ValidationMessages = _interopRequireDefault(require("./rows/ValidationMessages"));
var _jsxRuntime = require("react/jsx-runtime");
const MSG_FILE_NOT_CHOOSED = 'Please choose file for loading.',
  S_MODAL_DIALOG = {
    minWidth: 320
  },
  S_ROW_INPUT_FILE = {
    margin: '16px 0'
  },
  S_ROW_VALIDATION = {
    width: '100%',
    marginRight: 16
  };
const LoadFileDialog = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const {
      onLoad
    } = data,
    _refTupleEventFile = (0, _uiApi.useRef)(null),
    _hChange = (0, _uiApi.useCallback)(results => {
      const [_results] = results || [],
        _tupleEventFile = _results
        //progressEvent, file
        ? [_results[0], _results[1]] : null;
      (0, _uiApi.setRefValue)(_refTupleEventFile, _tupleEventFile);
    }, []),
    [validationMessages, COMMAND_BUTTONS, hClose] = (0, _useDialogButtons.default)((setValidationMessages, clearValidationMessages) => {
      const [progressEvent, file] = (0, _uiApi.getRefValue)(_refTupleEventFile) || [];
      if (progressEvent && file) {
        onLoad({
          progressEvent
        });
        clearValidationMessages();
      } else {
        setValidationMessages([MSG_FILE_NOT_CHOOSED]);
      }
    }, onClose);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    style: S_MODAL_DIALOG,
    caption: "Load Watch Items from File",
    isShow: isShow,
    commandButtons: COMMAND_BUTTONS,
    onClose: hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {
      style: S_ROW_INPUT_FILE,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputFileReader.default, {
        as: "text",
        onChange: _hChange
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {
      style: S_ROW_VALIDATION,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
        validationMessages: validationMessages
      })
    })]
  });
});
var _default = exports.default = LoadFileDialog;
//# sourceMappingURL=LoadFileDialog.js.map