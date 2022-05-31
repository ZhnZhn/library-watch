"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _memoIsShow = _interopRequireDefault(require("../dialogs/memoIsShow"));

var _WatchActions = require("../../flux/actions/WatchActions");

var _Msg = require("../../constants/Msg");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-moleculs/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-atoms/Tab"));

var _GroupAddPane = _interopRequireDefault(require("./GroupAddPane"));

var _GroupEditPane = _interopRequireDefault(require("./GroupEditPane"));

var _GroupDeletePane = _interopRequireDefault(require("./GroupDeletePane"));

var _jsxRuntime = require("react/jsx-runtime");

var EditGroupDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      store = _ref.store,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    caption: "Watch Groups Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TabPane["default"], {
      width: "380px",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Create",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupAddPane["default"], {
          store: store,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          actionFailed: _WatchActions.WAT_EDIT_WATCH_FAILED,
          forActionType: _WatchActions.WAT_ADD_GROUP,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onCreate: _WatchActions.WatchActions.addGroup,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Rename",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupEditPane["default"], {
          store: store,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          actionFailed: _WatchActions.WAT_EDIT_WATCH_FAILED,
          forActionType: _WatchActions.WAT_RENAME_GROUP,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          msgOnIsEmptyName: _Msg.MSG_EMPTY_NAME,
          onRename: _WatchActions.WatchActions.renameGroup,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab["default"], {
        title: "Delete",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupDeletePane["default"], {
          store: store,
          actionCompleted: _WatchActions.WAT_EDIT_WATCH_COMPLETED,
          forActionType: _WatchActions.WAT_DELETE_GROUP,
          msgOnNotSelect: _Msg.MSG_NOT_SELECTED,
          onDelete: _WatchActions.WatchActions.deleteGroup,
          onClose: onClose
        })
      })]
    }, "1")
  });
});
var _default = EditGroupDialog;
exports["default"] = _default;
//# sourceMappingURL=EditGroupDialog.js.map