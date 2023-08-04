"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _memoIsShow = _interopRequireDefault(require("../dialogs/memoIsShow"));
var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));
var _usePrevValue = _interopRequireDefault(require("../hooks/usePrevValue"));
var _useProperty = _interopRequireDefault(require("../hooks/useProperty"));
var _useRefItemCaption = _interopRequireDefault(require("./useRefItemCaption"));
var _WatchActions = require("../../flux/actions/WatchActions");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _Msg = require("../../constants/Msg");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _RowText = _interopRequireDefault(require("./RowText"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));
var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));
var _jsxRuntime = require("react/jsx-runtime");
const S_BOLD = {
    fontWeight: 'bold'
  },
  S_LH = {
    lineHeight: 2
  },
  S_DESCR = {
    fontWeight: 'bold',
    color: 'gray'
  };
const AddToWatchDialog = (0, _memoIsShow.default)(props => {
  const _prevProps = (0, _usePrevValue.default)(props),
    {
      isShow,
      data,
      onClose
    } = props,
    [setGroupCaption, getGroupCaption] = (0, _useProperty.default)(null),
    [_refListCaption, _handlerSelectList] = (0, _useRefItemCaption.default)(),
    [state, setState] = (0, _uiApi.useState)(() => ({
      groupOptions: (0, _watchListStore.getWatchGroups)(),
      listOptions: []
    })),
    {
      groupOptions,
      listOptions
    } = state,
    [validationMessages, setValidationMessages, _clearValidationMessages] = (0, _useValidationMessages.default)(),
    _hSelectGroup = (0, _uiApi.useCallback)(group => {
      const {
          caption,
          lists
        } = group || {},
        _caption = caption ? (setState(prevState => ({
          ...prevState,
          listOptions: lists || []
        })), caption) : null;
      setGroupCaption(_caption);
    }, [setGroupCaption])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClose = (0, _uiApi.useCallback)(() => {
      _clearValidationMessages();
      onClose();
    }, [])
    // _clearValidationMessages, onClose
    ,
    _hAdd = (0, _uiApi.useCallback)(() => {
      const groupCaption = getGroupCaption(),
        listCaption = (0, _uiApi.getRefValue)(_refListCaption),
        _validationMessages = [];
      if (!groupCaption) {
        _validationMessages.push((0, _Msg.MSG_NOT_SELECTED)('Group'));
      }
      if (!listCaption) {
        _validationMessages.push((0, _Msg.MSG_NOT_SELECTED)('List'));
      }
      if (_validationMessages.length === 0) {
        const {
          caption,
          config
        } = data;
        (0, _watchListStore.addWatchItem)({
          caption,
          groupCaption,
          listCaption,
          config
        });
      } else {
        setValidationMessages(_validationMessages);
      }
    }, [data])
    // _refListCaption, setValidationMessages
    /*eslint-enable react-hooks/exhaustive-deps */,
    _commandButtons = (0, _uiApi.useMemo)(() => [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Add",
      title: "Click to add to watch list",
      timeout: 0,
      onClick: _hAdd
    }, "add")], [_hAdd]);
  (0, _watchListStore.useMsEdit)(msEdit => {
    if (msEdit && msEdit.forActionType === _WatchActions.WAT_ADD_ITEM) {
      if (msEdit.message) {
        setValidationMessages(msEdit.messages);
      } else {
        _hClose();
      }
    }
  });

  //UNSAFE_componentWillReceiveProps(nextProps)
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (_prevProps && _prevProps !== props && _prevProps.isShow !== isShow) {
      const _groupCaption = getGroupCaption(),
        _groupOptions = (0, _watchListStore.getWatchGroups)();
      if (_groupOptions !== groupOptions) {
        setGroupCaption(null);
        (0, _uiApi.setRefValue)(_refListCaption, null);
        setState({
          groupOptions: _groupOptions,
          listOptions: []
        });
      } else if (_groupCaption) {
        const _listOptions = (0, _watchListStore.getWatchListsByGroup)(_groupCaption);
        if (_listOptions !== listOptions) {
          (0, _uiApi.setRefValue)(_refListCaption, null);
          setState(prevState => ({
            ...prevState,
            listOptions: _listOptions
          }));
        }
      }
    }
  });
  /*eslint-enable react-hooks/exhaustive-deps */

  const {
      caption,
      config
    } = data,
    {
      descr
    } = config || {};
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    caption: "Add To Watch List",
    isShow: isShow,
    commandButtons: _commandButtons,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: "Group",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect.default, {
      caption: "List",
      options: listOptions,
      onSelect: _handlerSelectList
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText.default, {
      style: S_LH,
      caption: "Item",
      textStyle: S_BOLD,
      text: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText.default, {
      style: S_LH,
      caption: "Descr",
      textStyle: S_DESCR,
      text: descr
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
      validationMessages: validationMessages
    })]
  });
});
var _default = AddToWatchDialog;
exports.default = _default;
//# sourceMappingURL=AddToWatchDialog.js.map