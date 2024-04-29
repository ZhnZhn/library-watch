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
const ListCreatePane = _ref => {
  let {
    forActionType,
    msgOnNotSelect,
    msgOnIsEmptyName,
    onCreate,
    onClose
  } = _ref;
  const _refInputText = (0, _uiApi.useRef)(),
    [_refCaptionGroup, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.getRefValue)(_refInputText).setValue('')),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCreate = (0, _uiApi.useCallback)(() => {
      const captionList = (0, _uiApi.getRefValue)(_refInputText).getValue(),
        captionGroup = (0, _uiApi.getRefValue)(_refCaptionGroup);
      if (captionGroup && captionList) {
        onCreate({
          captionGroup,
          captionList
        });
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('In Group'));
        }
        if (!captionList) {
          msg.push(msgOnIsEmptyName('List'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // onCreate, msgOnNotSelect, msgOnIsEmptyName,
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: "In Group",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText.default, {
      refEl: _refInputText,
      caption: "List"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Create",
      onClick: _hCreate,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
var _default = exports.default = ListCreatePane;
//# sourceMappingURL=ListCreatePane.js.map