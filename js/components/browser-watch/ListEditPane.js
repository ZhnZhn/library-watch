"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _SelectGroupList = _interopRequireDefault(require("./SelectGroupList"));
var _RowInputText = _interopRequireDefault(require("../dialogs/rows/RowInputText"));
var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("react/jsx-runtime");
const ListEditPane = _ref => {
  let {
    getWatchListsByGroup,
    forActionType,
    msgOnIsEmptyName,
    msgOnNotSelect,
    onRename,
    onClose
  } = _ref;
  const _refGroupList = (0, _uiApi.useRef)(),
    _refInputText = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(() => (0, _uiApi.getRefValue)(_refInputText).setValue('')),
    rerender = (0, _useRerender.default)(),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear, rerender)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hRename = (0, _uiApi.useCallback)(() => {
      const {
          captionGroup,
          captionList
        } = (0, _uiApi.getRefValue)(_refGroupList).getValue(),
        captionListTo = (0, _uiApi.getRefValue)(_refInputText).getValue();
      if (captionGroup && captionList && captionListTo) {
        onRename({
          captionGroup,
          captionListFrom: captionList,
          captionListTo
        });
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }
        if (!captionList) {
          msg.push(msgOnNotSelect('List From'));
        }
        if (!captionListTo) {
          msg.push(msgOnIsEmptyName('List To'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // onRename, msgOnIsEmptyName, msgOnNotSelect
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectGroupList.default, {
      ref: _refGroupList,
      getWatchListsByGroup: getWatchListsByGroup,
      groupCaption: "In Group",
      groupOptions: groupOptions,
      listCaption: "List From"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputText.default, {
      ref: _refInputText,
      caption: "List To"
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
var _default = ListEditPane;
exports.default = _default;
//# sourceMappingURL=ListEditPane.js.map