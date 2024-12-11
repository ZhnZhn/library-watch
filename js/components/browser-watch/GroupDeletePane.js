"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _useWatchList = _interopRequireDefault(require("./useWatchList"));
var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));
var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));
var _RowButtons = _interopRequireDefault(require("./RowButtons"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

const GroupDeletePane = _ref => {
  let {
    forActionType,
    msgOnNotSelect,
    onDelete,
    onClose
  } = _ref;
  const [_refCaption, _hSelectGroup] = (0, _useRefItemCaption.default)(),
    [validationMessages, setValidationMessages, _hClear] = (0, _useValidationMessages.default)(),
    groupOptions = (0, _useWatchList.default)(forActionType, setValidationMessages, _hClear)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hDeleteGroup = (0, _uiApi.useCallback)(() => {
      const caption = (0, _uiApi.getRefValue)(_refCaption);
      if (caption) {
        onDelete({
          caption
        });
      } else {
        setValidationMessages([msgOnNotSelect('Group')]);
      }
    }, []);
  // onDelete, msgOnNotSelect
  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: "Group",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowButtons.default, {
      caption: "Delete",
      onClick: _hDeleteGroup,
      onClose: onClose
    })]
  });
};

/*
GroupDeletePane.propTypes = {  
  forActionType: PropTypes.string,
  msgOnNotSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = exports.default = GroupDeletePane;
//# sourceMappingURL=GroupDeletePane.js.map