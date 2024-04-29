"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _RowInputText = _interopRequireDefault(require("../dialogs/rows/RowInputText"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useWatchListMsEdit = _interopRequireDefault(require("./useWatchListMsEdit"));
var _jsxRuntime = require("react/jsx-runtime");
const GroupAddPane = _ref => {
  let {
    forActionType,
    msgOnIsEmptyName,
    onCreate,
    onClose
  } = _ref;
  const _refInputText = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.getRefValue)(_refInputText).setValue(""))
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCreate = (0, _uiApi.useCallback)(() => {
      const _inputComp = (0, _uiApi.getRefValue)(_refInputText),
        caption = _inputComp.getValue();
      if (caption) {
        onCreate({
          caption
        });
      } else {
        _inputComp.setValue('');
        setValidationMessages([msgOnIsEmptyName('Group')]);
      }
    }, []);
  // msgOnIsEmptyName, onCreate
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useWatchListMsEdit.default)(forActionType, setValidationMessages, _hClear);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText.default, {
      refEl: _refInputText,
      caption: "Group"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ValidationMessages, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Create",
      onClick: _hCreate,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};

/*
GroupAddPane.propTypes = {
  forActionType: PropTypes.string,
  msgOnIsEmptyName: PropTypes.func,
  onCreate: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = GroupAddPane;
//# sourceMappingURL=GroupAddPane.js.map