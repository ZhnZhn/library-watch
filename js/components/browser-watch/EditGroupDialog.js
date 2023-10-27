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
var _Tab = _interopRequireDefault(require("../zhn-atoms/Tab"));
var _GroupAddPane = _interopRequireDefault(require("./GroupAddPane"));
var _GroupEditPane = _interopRequireDefault(require("./GroupEditPane"));
var _GroupDeletePane = _interopRequireDefault(require("./GroupDeletePane"));
var _jsxRuntime = require("react/jsx-runtime");
const EditGroupDialog = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    store,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog.default, {
    caption: "Watch Groups Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane.default, {
      width: "380px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Create",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupAddPane.default, {
          forActionType: _WatchActions.WAT_CREATE_GROUP,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onCreate: _watchListStore.crGroup,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Rename",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupEditPane.default, {
          forActionType: _WatchActions.WAT_RENAME_GROUP,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onRename: _watchListStore.renGroup,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        title: "Delete",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupDeletePane.default, {
          forActionType: _WatchActions.WAT_DELETE_GROUP,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          onDelete: _watchListStore.delGroup,
          onClose: onClose
        })
      })]
    }, "1")
  });
});
var _default = exports.default = EditGroupDialog;
//# sourceMappingURL=EditGroupDialog.js.map