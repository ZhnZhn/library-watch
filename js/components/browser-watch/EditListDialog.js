"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memoFn = require("../hoc/memoFn");
var _WatchActions = require("../../flux/actions/WatchActions");
var _watchListStore = require("../../flux/watch-list/watchListStore");
var _Msg = require("../../constants/Msg");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _TabPane = _interopRequireDefault(require("../zhn-moleculs/TabPane"));
var _Tab = _interopRequireDefault(require("../zhn/Tab"));
var _ListCreatePane = _interopRequireDefault(require("./ListCreatePane"));
var _ListEditPane = _interopRequireDefault(require("./ListEditPane"));
var _ListDeletePane = _interopRequireDefault(require("./ListDeletePane"));
var _jsxRuntime = require("react/jsx-runtime");
const EditListDialog = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    store,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog.default, {
    caption: "Watch Lists Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane.default, {
      width: "380px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Create",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListCreatePane.default, {
          forActionType: _WatchActions.WAT_CREATE_LIST,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onCreate: _watchListStore.crList,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Rename",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListEditPane.default, {
          getWatchListsByGroup: _watchListStore.getWatchListsByGroup,
          forActionType: _WatchActions.WAT_RENAME_LIST,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onRename: _watchListStore.renList,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Delete",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListDeletePane.default, {
          getWatchListsByGroup: _watchListStore.getWatchListsByGroup,
          forActionType: _WatchActions.WAT_DELETE_LIST,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          onDelete: _watchListStore.delList,
          onClose: onClose
        })
      })]
    }, "1")
  });
});
var _default = exports.default = EditListDialog;
//# sourceMappingURL=EditListDialog.js.map