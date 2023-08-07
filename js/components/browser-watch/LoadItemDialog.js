"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoIsShow = _interopRequireDefault(require("../dialogs/memoIsShow"));
var _itemStore = require("../../flux/itemStore");
var _Type = require("../../constants/Type");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _RowText = _interopRequireDefault(require("./RowText"));
var _jsxRuntime = require("react/jsx-runtime");
const DIALOG_CAPTION = "Load Watch Item",
  S_ITEM_DESCRIPTION = {
    fontWeight: 'bold',
    color: 'gray',
    padding: '8px 8px 0 8px'
  },
  S_LH_2 = {
    lineHeight: 2
  },
  S_LH_1_5 = {
    lineHeight: 1.5
  },
  S_BOLD = {
    fontWeight: 'bold'
  };
const LoadItemDialog = (0, _memoIsShow.default)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  const _hLoad = () => {
      (0, _itemStore.loadItem)(_Type.ChartType.WATCH_LIST, _Type.BrowserType.WATCH_LIST, data);
      onClose();
    },
    _commandButtons = [/*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
      isPrimary: true,
      caption: "Load",
      onClick: _hLoad
    }, "load")],
    {
      caption,
      descr,
      date
    } = data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
    caption: DIALOG_CAPTION,
    isShow: isShow,
    commandButtons: _commandButtons,
    onClose: onClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText.default, {
      style: S_LH_1_5,
      isCaption: false,
      text: descr,
      textStyle: S_ITEM_DESCRIPTION
    }, "1"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText.default, {
      style: S_LH_2,
      caption: "Item",
      text: caption,
      textStyle: S_BOLD
    }, "2"), date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowText.default, {
      style: S_LH_2,
      caption: "Date",
      text: date,
      textStyle: S_BOLD
    }, "3")]
  });
});
var _default = LoadItemDialog;
exports.default = _default;
//# sourceMappingURL=LoadItemDialog.js.map