"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));
var _RowInputText = _interopRequireDefault(require("../dialogs/rows/RowInputText"));
var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("react/jsx-runtime");
const GroupEditPane = _ref => {
  let {
    forActionType,
    msgOnNotSelect,
    msgOnIsEmptyName,
    onRename,
    onClose
  } = _ref;
  const _refInputText = (0, _uiApi.useRef)(),
    [_refCaptionFrom, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.getRefValue)(_refInputText).setValue('')),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear)
    /* eslint-disable react-hooks/exhaustive-deps */,
    _hRename = (0, _uiApi.useCallback)(() => {
      const captionTo = (0, _uiApi.getRefValue)(_refInputText).getValue(),
        captionFrom = (0, _uiApi.getRefValue)(_refCaptionFrom);
      if (captionTo && captionFrom) {
        onRename({
          captionFrom,
          captionTo
        });
      } else {
        const msg = [];
        if (!captionFrom) {
          msg.push(msgOnNotSelect('Group From'));
        }
        if (!captionTo) {
          msg.push(msgOnIsEmptyName('Group To'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // onRename, msgOnNotSelect, msgOnIsEmptyName, setValidationMessages
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: "Group From",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText.default, {
      ref: _refInputText,
      caption: "Group To"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Rename",
      onClick: _hRename,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
var _default = GroupEditPane;
exports.default = _default;
//# sourceMappingURL=GroupEditPane.js.map