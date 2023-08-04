"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _usePrevValue = _interopRequireDefault(require("../hooks/usePrevValue"));
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

const SelectGroupList = (0, _uiApi.forwardRef)((props, ref) => {
  const _prevProps = (0, _usePrevValue.default)(props),
    _refGroupCaption = (0, _uiApi.useRef)(null),
    [_refListCaption, _hSelectList] = (0, _useRefItemCaption.default)(),
    [listOptions, setListOptions] = (0, _uiApi.useState)([]),
    _hSelectGroup = (0, _uiApi.useCallback)(item => {
      if (item && item.caption) {
        (0, _uiApi.setRefValue)(_refGroupCaption, item.caption);
        setListOptions(item.lists || []);
      } else {
        (0, _uiApi.setRefValue)(_refGroupCaption, null);
      }
    }, []),
    {
      getWatchListsByGroup,
      groupCaption,
      groupOptions,
      listCaption
    } = props;

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (_prevProps && props !== _prevProps) {
      const _groupCaption = (0, _uiApi.getRefValue)(_refGroupCaption);
      if (props.groupOptions !== _prevProps.groupOptions) {
        (0, _uiApi.setRefValue)(_refGroupCaption, null);
        (0, _uiApi.setRefValue)(_refListCaption, null);
        setListOptions([]);
      } else if (_groupCaption) {
        setListOptions(prevListOptions => {
          const listOptions = getWatchListsByGroup(_groupCaption);
          if (listOptions !== prevListOptions) {
            (0, _uiApi.setRefValue)(_refListCaption, null);
            return listOptions;
          }
          return prevListOptions;
        });
      }
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, () => ({
    getValue: () => ({
      captionGroup: (0, _uiApi.getRefValue)(_refGroupCaption),
      captionList: (0, _uiApi.getRefValue)(_refListCaption)
    }),
    setValueNull: () => {
      (0, _uiApi.setRefValue)(_refGroupCaption, null);
      (0, _uiApi.setRefValue)(_refListCaption, null);
    }
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: groupCaption,
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: listCaption,
      options: listOptions,
      onSelect: _hSelectList
    })]
  });
});

/*
SelectGroupList.propTypes = {  
  groupCaption: PropTypes.string,
  groupOptions: PropTypes.array,
  listCaption: PropTypes.string
}
*/
var _default = SelectGroupList;
exports.default = _default;
//# sourceMappingURL=SelectGroupList.js.map