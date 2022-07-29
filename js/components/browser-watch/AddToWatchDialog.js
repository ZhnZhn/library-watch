"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _memoIsShow = _interopRequireDefault(require("../dialogs/memoIsShow"));

var _useValidationMessages = _interopRequireDefault(require("../hooks/useValidationMessages"));

var _usePrevValue = _interopRequireDefault(require("../hooks/usePrevValue"));

var _useProperty2 = _interopRequireDefault(require("../hooks/useProperty"));

var _useListen = _interopRequireDefault(require("../hooks/useListen"));

var _useRefItemCaption2 = _interopRequireDefault(require("./useRefItemCaption"));

var _WatchActions = require("../../flux/actions/WatchActions");

var _Msg = require("../../constants/Msg");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _RowText = _interopRequireDefault(require("./RowText"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _RowInputSelect = _interopRequireDefault(require("../dialogs/rows/RowInputSelect"));

var _ValidationMessages = _interopRequireDefault(require("../dialogs/rows/ValidationMessages"));

var _jsxRuntime = require("react/jsx-runtime");

var S_BOLD = {
  fontWeight: 'bold'
},
    S_LH = {
  lineHeight: 2
},
    S_DESCR = {
  fontWeight: 'bold',
  color: 'gray'
};
var AddToWatchDialog = (0, _memoIsShow["default"])(function (props) {
  var _prevProps = (0, _usePrevValue["default"])(props),
      isShow = props.isShow,
      store = props.store,
      data = props.data,
      onClose = props.onClose,
      _useProperty = (0, _useProperty2["default"])(null),
      setGroupCaption = _useProperty[0],
      getGroupCaption = _useProperty[1],
      _useRefItemCaption = (0, _useRefItemCaption2["default"])(),
      _refListCaption = _useRefItemCaption[0],
      _handlerSelectList = _useRefItemCaption[1],
      _useState = (0, _uiApi.useState)(function () {
    return {
      groupOptions: store.getWatchGroups(),
      listOptions: []
    };
  }),
      state = _useState[0],
      setState = _useState[1],
      groupOptions = state.groupOptions,
      listOptions = state.listOptions,
      _useValidationMessage = (0, _useValidationMessages["default"])(),
      validationMessages = _useValidationMessage[0],
      setValidationMessages = _useValidationMessage[1],
      _clearValidationMessages = _useValidationMessage[2],
      _hSelectGroup = (0, _uiApi.useCallback)(function (group) {
    var _ref = group || {},
        caption = _ref.caption,
        lists = _ref.lists,
        _caption = caption ? (setState(function (prevState) {
      return (0, _extends2["default"])({}, prevState, {
        listOptions: lists || []
      });
    }), caption) : null;

    setGroupCaption(_caption);
  }, [setGroupCaption]),
      _hClose = (0, _uiApi.useCallback)(function () {
    _clearValidationMessages();

    onClose();
  }, []),
      _hAdd = (0, _uiApi.useCallback)(function () {
    var groupCaption = getGroupCaption(),
        listCaption = (0, _uiApi.getRefValue)(_refListCaption),
        _validationMessages = [];

    if (!groupCaption) {
      _validationMessages.push((0, _Msg.MSG_NOT_SELECTED)('Group'));
    }

    if (!listCaption) {
      _validationMessages.push((0, _Msg.MSG_NOT_SELECTED)('List'));
    }

    if (_validationMessages.length === 0) {
      var _caption2 = data.caption,
          _config = data.config;

      _WatchActions.WatchActions.addItem({
        caption: _caption2,
        groupCaption: groupCaption,
        listCaption: listCaption,
        config: _config
      });
    } else {
      setValidationMessages(_validationMessages);
    }
  }, [data]),
      _commandButtons = (0, _uiApi.useMemo)(function () {
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
      caption: "Add",
      title: "Click to add to watch list",
      timeout: 0,
      onClick: _hAdd
    }, "add")];
  }, [_hAdd]);

  (0, _useListen["default"])(store, function (actionType, data) {
    if (actionType === _WatchActions.WAT_EDIT_WATCH_COMPLETED && data.forActionType === _WatchActions.WAT_ADD_ITEM) {
      _hClose();
    } else if (actionType === _WatchActions.WAT_EDIT_WATCH_FAILED && data.forActionType === _WatchActions.WAT_ADD_ITEM) {
      setValidationMessages(data.messages);
    }
  }); //UNSAFE_componentWillReceiveProps(nextProps)

  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    if (_prevProps && _prevProps !== props && _prevProps.isShow !== isShow) {
      var _groupCaption = getGroupCaption(),
          _groupOptions = store.getWatchGroups();

      if (_groupOptions !== groupOptions) {
        setGroupCaption(null);
        (0, _uiApi.setRefValue)(_refListCaption, null);
        setState({
          groupOptions: _groupOptions,
          listOptions: []
        });
      } else if (_groupCaption) {
        var _listOptions = store.getWatchListsByGroup(_groupCaption);

        if (_listOptions !== listOptions) {
          (0, _uiApi.setRefValue)(_refListCaption, null);
          setState(function (prevState) {
            return (0, _extends2["default"])({}, prevState, {
              listOptions: _listOptions
            });
          });
        }
      }
    }
  });
  /*eslint-enable react-hooks/exhaustive-deps */

  var caption = data.caption,
      config = data.config,
      _ref2 = config || {},
      descr = _ref2.descr;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog["default"], {
    caption: "Add To Watch List",
    isShow: isShow,
    commandButtons: _commandButtons,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
      caption: "Group",
      options: groupOptions,
      onSelect: _hSelectGroup
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
      caption: "List",
      options: listOptions,
      onSelect: _handlerSelectList
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText["default"], {
      style: S_LH,
      caption: "Item",
      textStyle: S_BOLD,
      text: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText["default"], {
      style: S_LH,
      caption: "Descr",
      textStyle: S_DESCR,
      text: descr
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages["default"], {
      validationMessages: validationMessages
    })]
  });
});
var _default = AddToWatchDialog;
exports["default"] = _default;
//# sourceMappingURL=AddToWatchDialog.js.map