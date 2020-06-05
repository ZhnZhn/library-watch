"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _WatchActions = _interopRequireWildcard(require("../../flux/actions/WatchActions"));

var _Msg = _interopRequireDefault(require("../../constants/Msg"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _TabPane = _interopRequireDefault(require("../zhn-moleculs/TabPane"));

var _Tab = _interopRequireDefault(require("../zhn-atoms/Tab"));

var _GroupAddPane = _interopRequireDefault(require("./GroupAddPane"));

var _GroupEditPane = _interopRequireDefault(require("./GroupEditPane"));

var _GroupDeletePane = _interopRequireDefault(require("./GroupDeletePane"));

//import PropTypes from 'prop-types'
var _areEqual = function _areEqual(prevProps, nextProps) {
  return prevProps.isShow === nextProps.isShow;
};

var EditGroupDialog = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var isShow = _ref.isShow,
      store = _ref.store,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement(_ModalDialog["default"], {
    caption: "Watch Groups Edit",
    isShow: isShow,
    isWithButton: false,
    onClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(_TabPane["default"], {
    key: "1",
    width: "380px"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Create"
  }, /*#__PURE__*/_react["default"].createElement(_GroupAddPane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType: _WatchActions.WatchActionTypes.ADD_GROUP,
    msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
    onCreate: _WatchActions["default"].addGroup,
    onClose: onClose
  })), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Rename"
  }, /*#__PURE__*/_react["default"].createElement(_GroupEditPane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    actionFailed: _WatchActions.WatchActionTypes.EDIT_WATCH_FAILED,
    forActionType: _WatchActions.WatchActionTypes.RENAME_GROUP,
    msgOnNotSelect: _Msg["default"].NOT_SELECTED,
    msgOnIsEmptyName: _Msg["default"].IS_EMPTY_NAME,
    onRename: _WatchActions["default"].renameGroup,
    onClose: onClose
  })), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    title: "Delete"
  }, /*#__PURE__*/_react["default"].createElement(_GroupDeletePane["default"], {
    store: store,
    actionCompleted: _WatchActions.WatchActionTypes.EDIT_WATCH_COMPLETED,
    forActionType: _WatchActions.WatchActionTypes.DELETE_GROUP,
    msgOnNotSelect: _Msg["default"].NOT_SELECTED,
    onDelete: _WatchActions["default"].deleteGroup,
    onClose: onClose
  }))));
}, _areEqual);
/*
EditGroupDialog.propTypes : {
  isShow : PropTypes.bool,
  store : PropTypes.object,
  onClose : PropTypes.func
},
*/


var _default = EditGroupDialog;
exports["default"] = _default;
//# sourceMappingURL=EditGroupDialog.js.map