"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useRerender = _interopRequireDefault(require("../hooks/useRerender"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _SelectGroupList = _interopRequireDefault(require("./SelectGroupList"));
var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("react/jsx-runtime");
const ListDeletePane = _ref => {
  let {
    getWatchListsByGroup,
    forActionType,
    msgOnNotSelect,
    onDelete,
    onClose
  } = _ref;
  const _refGroupList = (0, _uiApi.useRef)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(),
    rerender = (0, _useRerender.default)(),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear, rerender)
    /* eslint-disable react-hooks/exhaustive-deps */,
    _hDelete = (0, _uiApi.useCallback)(() => {
      const _selectGroupListComp = (0, _uiApi.getRefValue)(_refGroupList),
        {
          captionGroup,
          captionList
        } = _selectGroupListComp.getValue();
      if (captionGroup && captionList) {
        onDelete({
          captionGroup,
          captionList
        });
      } else {
        const msg = [];
        if (!captionGroup) {
          msg.push(msgOnNotSelect('Group'));
        }
        if (!captionList) {
          msg.push(msgOnNotSelect('List'));
        }
        setValidationMessages(msg);
      }
    }, []);
  // onDelete, msgOnNotSelect
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectGroupList.default, {
      ref: _refGroupList,
      getWatchListsByGroup: getWatchListsByGroup,
      groupCaption: "In Group",
      groupOptions: groupOptions,
      listCaption: "List"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Delete",
      onClick: _hDelete,
      onClear: _hClear,
      onClose: onClose
    })]
  });
};
var _default = ListDeletePane;
exports.default = _default;
//# sourceMappingURL=ListDeletePane.js.map